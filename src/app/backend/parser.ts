import {HumansListener} from "./generated/HumansListener";
import {HumansParser} from "./generated/HumansParser";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {HumansLexer} from "./generated/HumansLexer";
import {ParseTreeWalker} from "antlr4ts/tree";
import {Machine, MachineGUI} from "./machine";

export class Parser {
  private readonly playground: Machine

  constructor(playground: Machine) {
    this.playground = playground
  }

  parse(input: string): ((machineGUI: MachineGUI) => void)[] {
    const inputStream = CharStreams.fromString(input);
    const lexer = new HumansLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new HumansParser(tokenStream);
    const listener = new MyListener(this.playground);

    // @ts-ignore
    ParseTreeWalker.DEFAULT.walk(listener, parser.program());

    return this.playground.guiActions;
  }
}

class MyListener implements HumansListener {
  private readonly playground: Machine

  constructor(playground: Machine) {
    this.playground = playground
  }

  enterInbox(): void {
    this.playground.moveInputToMemory();
  }

  enterOutbox(): void {
    this.playground.moveMemoryToOutput();
  }

  exitProgram(): void {
    this.playground.checkWinningCondition();
  }
}
