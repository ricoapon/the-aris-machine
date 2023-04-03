import {CharStreams, CommonTokenStream} from "antlr4ts";
import {ArisLexer} from "./generated/ArisLexer";
import {ArisParser} from "./generated/ArisParser";
import {ArisListener} from "./generated/ArisListener";
import {ParseTreeWalker} from "antlr4ts/tree";

export function determineCodeLengthScore(input: string) {
  const inputStream = CharStreams.fromString(input);
  const lexer = new ArisLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ArisParser(tokenStream);
  const listener = new ScoreListener()

  // @ts-ignore
  ParseTreeWalker.DEFAULT.walk(listener, parser.program());

  return listener.counter
}

export class ScoreListener implements ArisListener {
  counter: number = 0

  enterAdd(): void {
    this.counter++
  }

  enterCopy(): void {
    this.counter++
  }

  enterLoop(): void {
    this.counter++
  }

  enterMove(): void {
    this.counter++
  }
}
