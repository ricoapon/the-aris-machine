import {CharStreams, CommonTokenStream} from "antlr4ts";
import {ArisLexer} from "../generated/ArisLexer";
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
  LoopContext,
  MoveContext,
  SubtractContext
} from "../generated/ArisParser";
import {ArisListener} from "../generated/ArisListener";
import {ParseTreeWalker} from "antlr4ts/tree";

// noinspection JSUnusedLocalSymbols
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

  enterAdd(ctx: AddContext): void {
    this.counter++
  }

  enterCopy(ctx: CopyContext): void {
    this.counter++
  }

  enterLoop(ctx: LoopContext): void {
    this.counter++
  }

  enterMove(ctx: MoveContext): void {
    this.counter++
  }

  enterDecrement(ctx: DecrementContext): void {
    this.counter++
  }

  enterIfNeg(ctx: IfNegContext): void {
    this.counter++
  }

  enterIfNotZero(ctx: IfNotZeroContext): void {
    this.counter++
  }

  enterIfPos(ctx: IfPosContext): void {
    this.counter++
  }

  enterIfZero(ctx: IfZeroContext): void {
    this.counter++
  }

  enterIncrement(ctx: IncrementContext): void {
    this.counter++
  }

  enterSubtract(ctx: SubtractContext): void {
    this.counter++
  }

}
