import {AddContext, CopyContext, HumansParser, LoopContext, MoveContext} from "./generated/HumansParser";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {HumansLexer} from "./generated/HumansLexer";
import {ErrorNode, ParseTree, RuleNode} from "antlr4ts/tree";
import {Machine, MachineGUI} from "./machine";
import {HumansVisitor} from "./generated/HumansVisitor";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";

export class Parser {
  private readonly machine: Machine

  constructor(machine: Machine) {
    this.machine = machine
  }

  parse(input: string): ((machineGUI: MachineGUI) => void)[] {
    const inputStream = CharStreams.fromString(input);
    const lexer = new HumansLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new HumansParser(tokenStream);
    const visitor = new MyVisitor(this.machine);

    visitor.visit(parser.program())

    return this.machine.guiActions;
  }
}

class MyVisitor implements HumansVisitor<void> {
  private readonly machine: Machine
  private continueProgram = true

  constructor(machine: Machine) {
    this.machine = machine
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
    let result
    if (ctx.INPUT() != undefined && ctx.OUTPUT() != undefined) {
      result = this.machine.moveInputToOutput()
    } else if (ctx.INPUT() != undefined) {
      const memorySlot = +ctx.MEMORY_SLOT(0).text
      result = this.machine.moveInputToMemorySlot(memorySlot)
    } else if (ctx.OUTPUT() != undefined) {
      const memorySlot = +ctx.MEMORY_SLOT(0).text
      result = this.machine.moveMemorySlotToOutput(memorySlot)
    } else {
      const from = +ctx.MEMORY_SLOT(0).text
      const to = +ctx.MEMORY_SLOT(1).text
      result = this.machine.moveMemorySlotToMemorySlot(from, to)
    }

    this.parseResult(result)
  }

  visitCopy(ctx: CopyContext) {
    const from = +ctx.MEMORY_SLOT(0)
    const to = +ctx.MEMORY_SLOT(1)
    this.parseResult(this.machine.copyMemorySlotToMemorySlot(from, to))
  }

  visitAdd(ctx: AddContext) {
    const from = +ctx.MEMORY_SLOT(0)
    const to = +ctx.MEMORY_SLOT(1)
    this.parseResult(this.machine.addMemorySlotToMemorySlot(from, to))
  }

  visitLoop(ctx: LoopContext) {
    // To prevent loops to go infinite, we set a max that we will never reach in normal situations.
    let counter = 0;
    while (counter < 1000 && this.continueProgram) {
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
    if (this.continueProgram) {
      tree.accept(this)
    }
  }

  private parseResult(result: boolean | void) {
    if (result != undefined && !result) {
      this.continueProgram = false
    }
  }
}
