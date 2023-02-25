import {HumansListener} from "./generated/HumansListener";
import {HumansParser} from "./generated/HumansParser";
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

  enterInbox(): void {
    this.machine.moveInputToMemory();
  }

  enterOutbox(): void {
    this.machine.moveMemoryToOutput();
  }

  exitProgram(): void {
    this.machine.checkWinningCondition();
  }
}
