import {HumansListener} from "./generated/HumansListener";
import {AddContext, CopyContext, HumansParser, MoveContext} from "./generated/HumansParser";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {HumansLexer} from "./generated/HumansLexer";
import {ParseTreeWalker} from "antlr4ts/tree";
import {Machine, MachineGUI} from "./machine";

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
    const listener = new MyListener(this.machine);

    // @ts-ignore
    ParseTreeWalker.DEFAULT.walk(listener, parser.program());

    return this.machine.guiActions;
  }
}

class MyListener implements HumansListener {
  private readonly machine: Machine

  constructor(machine: Machine) {
    this.machine = machine
  }

  enterMove(ctx: MoveContext): void {
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

  enterCopy(ctx: CopyContext): void {
    const from = +ctx.MEMORY_SLOT(0)
    const to = +ctx.MEMORY_SLOT(1)
    this.machine.copyMemorySlotToMemorySlot(from, to)
  }

  enterAdd(ctx: AddContext): void {
    const from = +ctx.MEMORY_SLOT(0)
    const to = +ctx.MEMORY_SLOT(1)
    this.machine.addMemorySlotToMemorySlot(from, to)
  }

  exitProgram(): void {
    this.machine.checkWinningCondition();
  }
}
