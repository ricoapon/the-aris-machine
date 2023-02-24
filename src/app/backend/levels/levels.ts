import {Coordinate} from "../coordinate";

export class Level {
  readonly width: number;
  readonly height: number;
  readonly startingPositionPlayers: Map<number, Coordinate>
  readonly winningPositionPlayers: Map<number, Coordinate>
  readonly pits: Coordinate[]
  readonly walls: Coordinate[]
  readonly startingPositionBlocks: Map<number, Coordinate>
  readonly winningPositionBlocks: Map<number, Coordinate>

  constructor(width: number, height: number, startingPositionPlayers: Map<number, Coordinate>, winningPositionPlayers: Map<number, Coordinate>, pits: Coordinate[], walls: Coordinate[], startingPositionBlocks: Map<number, Coordinate>, winningPositionBlocks: Map<number, Coordinate>) {
    this.width = width;
    this.height = height;
    this.startingPositionPlayers = startingPositionPlayers;
    this.winningPositionPlayers = winningPositionPlayers;
    this.pits = pits;
    this.walls = walls;
    this.startingPositionBlocks = startingPositionBlocks;
    this.winningPositionBlocks = winningPositionBlocks;
  }
}

function createSquareBoundary(width: number, height: number): Coordinate[] {
  const result: Coordinate[] = [];

  for (let x = 0; x < width; x++) {
    result.push(new Coordinate(x, 0))
  }
  for (let x = 0; x < width; x++) {
    result.push(new Coordinate(x, height - 1))
  }
  for (let y = 1; y < height; y++) {
    result.push(new Coordinate(0, y))
  }
  for (let y = 1; y < height; y++) {
    result.push(new Coordinate(width - 1, y))
  }

  return result;
}

export const LEVEL_1 = new Level(
  10,10,
  new Map<number, Coordinate>([[1, new Coordinate(3, 3)], [2, new Coordinate(6, 3)]]),
  new Map<number, Coordinate>(),
  [],
  createSquareBoundary(10, 10),
  new Map<number, Coordinate>([[1, new Coordinate(3, 5)], [2, new Coordinate(6, 5)]]),
  new Map<number, Coordinate>([[1, new Coordinate(3, 7)], [2, new Coordinate(6, 7)]])
);

export const allLevels: Level[] = [LEVEL_1];
