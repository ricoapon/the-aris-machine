import {ObjectWithId} from "./my-map";

export class Coordinate extends ObjectWithId {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    super(0.5 * (x + y) * (x + y + 1) + y);
    this.x = x;
    this.y = y;
  }
}
