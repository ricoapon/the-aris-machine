import {HumansListener} from "./generated/HumansListener";
import {HumansParser, MoveContext} from "./generated/HumansParser";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {HumansLexer} from "./generated/HumansLexer";
import {ParseTreeWalker} from "antlr4ts/tree";
import {Playground} from "./playground";

export class Parser {
  private readonly playground: Playground

  constructor(playground: Playground) {
    this.playground = playground
  }

  parse(input: string): void {
    const inputStream = CharStreams.fromString(input);
    const lexer = new HumansLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new HumansParser(tokenStream);
    const listener = new MyListener(this.playground);

    // @ts-ignore
    ParseTreeWalker.DEFAULT.walk(listener, parser.program());
  }
}

class MyListener implements HumansListener {
  private readonly playground: Playground

  constructor(playground: Playground) {
    this.playground = playground
  }

  enterMove(ctx: MoveContext): void {
    if (ctx.DIRECTION().text == "up") {
      this.playground.moveUp()
    } else if (ctx.DIRECTION().text == "down") {
      this.playground.moveDown();
    } else if (ctx.DIRECTION().text == "right") {
      this.playground.moveRight();
    } else if (ctx.DIRECTION().text == "left") {
      this.playground.moveLeft();
    }
  }

  enterPickUp(): void {
    this.playground.pickUp()
  }

  enterDrop(): void {
    this.playground.drop()
  }
}
