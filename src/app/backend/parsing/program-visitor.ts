import {ArisVisitor} from "../generated/ArisVisitor";
import {Machine, MachineResult} from "./machine";
import {ErrorNode, ParseTree, RuleNode} from "antlr4ts/tree";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {AddContext, ArisParser, CopyContext, LoopContext, MoveContext} from "../generated/ArisParser";
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
    if (ctx.INPUT() != undefined && ctx.OUTPUT() != undefined) {
      this.machine.moveInputToOutput()
    } else if (ctx.INPUT() != undefined) {
      const memorySlot = +ctx.MEMORY_SLOT(0).text
      this.machine.moveInputToMemorySlot(memorySlot)
    } else if (ctx.OUTPUT() != undefined) {
      const memorySlot = +ctx.MEMORY_SLOT(0).text
      this.machine.moveMemorySlotToOutput(memorySlot)
    } else {
      const from = +ctx.MEMORY_SLOT(0).text
      const to = +ctx.MEMORY_SLOT(1).text
      this.machine.moveMemorySlotToMemorySlot(from, to)
    }
  }

  visitCopy(ctx: CopyContext) {
    const from = +ctx.MEMORY_SLOT(0)
    const to = +ctx.MEMORY_SLOT(1)
    this.machine.copyMemorySlotToMemorySlot(from, to)
  }

  visitAdd(ctx: AddContext) {
    const from = +ctx.MEMORY_SLOT(0)
    const to = +ctx.MEMORY_SLOT(1)
    this.machine.addMemorySlotToMemorySlot(from, to)
  }

  visitLoop(ctx: LoopContext) {
    // To prevent loops to go infinite, we set a max that we will never reach in normal situations.
    let counter = 0;
    while (counter < 1000 && this.machine.isRunning()) {
      for (let i = 0; i < ctx.line().length; i++) {
        this.call(ctx.line()[i])
      }
      counter++
    }
  }

  visitChildren(node: RuleNode): void {
    for (let i = 0; i < node.childCount; i++) {
      this.call(node.getChild(i))
    }
  }

  private call(tree: ParseTree) {
    if (this.machine.isRunning()) {
      tree.accept(this)
    }
  }
}
