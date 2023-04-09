import {CharStreams, CommonTokenStream} from "antlr4ts";
import {ArisLexer} from "../generated/ArisLexer";
import {ArisParser} from "../generated/ArisParser";
import {ArisListener} from "../generated/ArisListener";
import {ParseTreeWalker} from "antlr4ts/tree";

export class ScoreListener implements ArisListener {
  counter: number

  determineCodeLengthScore(input: string): number {
    this.counter = 0;

    const inputStream = CharStreams.fromString(input);
    const lexer = new ArisLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ArisParser(tokenStream);
    // @ts-ignore
    ParseTreeWalker.DEFAULT.walk(this, parser.program());

    return this.counter
  }

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

  enterDecrement(): void {
    this.counter++
  }

  enterIfNeg(): void {
    this.counter++
  }

  enterIfNotZero(): void {
    this.counter++
  }

  enterIfPos(): void {
    this.counter++
  }

  enterIfZero(): void {
    this.counter++
  }

  enterIncrement(): void {
    this.counter++
  }
}
