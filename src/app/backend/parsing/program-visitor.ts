import {ArisVisitor} from "../generated/ArisVisitor";
import {Machine, MachineResult} from "./machine";
import {ErrorNode, ParseTree, RuleNode} from "antlr4ts/tree";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {
  AddContext,
  ArisParser,
  CopyContext,
  DecrementContext,
  IfNegContext,
  IfNotZeroContext,
  IfPosContext,
  IfZeroContext,
  IncrementContext,
  LinesContext,
  LoopContext,
  MoveContext
} from "../generated/ArisParser";
import {Level} from "../levels";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {ArisLexer} from "../generated/ArisLexer";

/**
 * Executes a program by walking through the code using the visitor pattern.
 * State will be processed in {@link Machine} and the result will be returned.
 */
export class ProgramVisitor implements ArisVisitor<void> {
  private machine: Machine

  run(level: Level, input: string): MachineResult {
    this.machine = new Machine(level)

    const inputStream = CharStreams.fromString(input);
    const lexer = new ArisLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ArisParser(tokenStream);

    this.visit(parser.program())
    return this.machine.createMachineResult()
  }

  visit(tree: ParseTree): void {
    for (let i = 0; i < tree.childCount; i++) {
      this.call(tree.getChild(i))
    }
    this.machine.checkWinningCondition();
  }

  visitErrorNode(node: ErrorNode): void {
  }

  visitTerminal(node: TerminalNode): void {
  }

  visitMove(ctx: MoveContext) {
    const editorLine = ctx.start.line;
    if (ctx.INPUT() != undefined && ctx.OUTPUT() != undefined) {
      this.machine.moveInputToOutput(editorLine)
    } else if (ctx.INPUT() != undefined) {
      const memorySlot = +ctx.MEMORY_SLOT(0).text
      this.machine.moveInputToMemorySlot(memorySlot, editorLine)
    } else if (ctx.OUTPUT() != undefined) {
      const memorySlot = +ctx.MEMORY_SLOT(0).text
      this.machine.moveMemorySlotToOutput(memorySlot, editorLine)
    } else {
      const from = +ctx.MEMORY_SLOT(0).text
      const to = +ctx.MEMORY_SLOT(1).text
      this.machine.moveMemorySlotToMemorySlot(from, to, editorLine)
    }
  }

  visitCopy(ctx: CopyContext) {
    const editorLine = ctx.start.line;
    const from = +ctx.MEMORY_SLOT(0)

    if (ctx.OUTPUT() != undefined) {
      this.machine.copyMemorySlotToOutput(from, editorLine)
    } else {
      const to = +ctx.MEMORY_SLOT(1)
      this.machine.copyMemorySlotToMemorySlot(from, to, editorLine)
    }
  }

  visitAdd(ctx: AddContext) {
    const editorLine = ctx.start.line;
    const from = +ctx.MEMORY_SLOT(0)
    const to = +ctx.MEMORY_SLOT(1)
    this.machine.addMemorySlotToMemorySlot(from, to, editorLine)
  }

  visitIncrement(ctx: IncrementContext): void {
    const editorLine = ctx.start.line;
    this.machine.incrementMemorySlot(+ctx.MEMORY_SLOT(), editorLine)
  }

  visitDecrement(ctx: DecrementContext): void {
    const editorLine = ctx.start.line;
    this.machine.decrementMemorySlot(+ctx.MEMORY_SLOT(), editorLine)
  }

  visitLoop(ctx: LoopContext) {
    // To prevent loops to go infinite, we set a max that we will never reach in normal situations.
    let counter = 0;
    while (counter < 1000 && this.machine.isRunning()) {
      this.callLines(ctx.lines())
      counter++
    }
  }

  visitIfZero(ctx: IfZeroContext) {
    let value
    if (ctx.INPUT() != undefined) {
      value = this.machine.getValueOfInputElement()
    } else {
      // We know the value of memory slot is undefined here.
      // @ts-ignore
      value = this.machine.getValueOfMemorySlot(+ctx.MEMORY_SLOT())
    }

    if (value == 0) {
      this.callLines(ctx.lines())
    }
  }

  visitIfNotZero(ctx: IfNotZeroContext) {
    let value
    if (ctx.INPUT() != undefined) {
      value = this.machine.getValueOfInputElement()
    } else {
      // We know the value of memory slot is undefined here.
      // @ts-ignore
      value = this.machine.getValueOfMemorySlot(+ctx.MEMORY_SLOT())
    }
    if (value != 0) {
      this.callLines(ctx.lines())
    }
  }

  visitIfPos(ctx: IfPosContext): void {
    let value
    if (ctx.INPUT() != undefined) {
      value = this.machine.getValueOfInputElement()
    } else {
      // We know the value of memory slot is undefined here.
      // @ts-ignore
      value = this.machine.getValueOfMemorySlot(+ctx.MEMORY_SLOT())
    }
    if (value > 0) {
      this.callLines(ctx.lines())
    }
  }

  visitIfNeg(ctx: IfNegContext): void {
    let value
    if (ctx.INPUT() != undefined) {
      value = this.machine.getValueOfInputElement()
    } else {
      // We know the value of memory slot is undefined here.
      // @ts-ignore
      value = this.machine.getValueOfMemorySlot(+ctx.MEMORY_SLOT())
    }
    if (value < 0) {
      this.callLines(ctx.lines())
    }
  }

  visitChildren(node: RuleNode): void {
    for (let i = 0; i < node.childCount; i++) {
      this.call(node.getChild(i))
    }
  }

  private callLines(lines: LinesContext) {
    for (let i = 0; i < lines.line().length; i++) {
      this.call(lines.line()[i])
    }
  }

  private call(tree: ParseTree) {
    if (this.machine.isRunning()) {
      tree.accept(this)
    }
  }
}
