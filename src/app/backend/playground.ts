import {EventEmitter} from "@angular/core";
import {MyMap} from "./my-map";

export class Playground {
  private readonly updated = new EventEmitter<undefined>();
  public readonly width: number;
  public readonly height: number;
  private readonly nrOfPlayers: number;
  private readonly map: MyMap<Coordinate, Set<PlaygroundTile>>;
  private readonly playerCoordinates: MyMap<Player, Coordinate>;

  constructor(width: number, height: number, playerCoordinates: MyMap<Player, Coordinate>) {
    this.width = width;
    this.height = height;
    this.map = new MyMap<Coordinate, Set<PlaygroundTile>>()
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        this.map.set({x: x, y: y}, new Set<PlaygroundTile>())
      }
    }
    this.playerCoordinates = playerCoordinates;
    playerCoordinates.forEach((value: Coordinate, key: Player) => {
      // @ts-ignore
      this.map.get(value).add(key);
    });

    this.nrOfPlayers = playerCoordinates.size();
  }

  private updatePlayerCoordinate(player: Player, calculateNewCoordinate: (c: Coordinate) => Coordinate) {
    const oldCoordinate = this.playerCoordinates.get(player);
    if (oldCoordinate == undefined) {
      throw Error("This should not happen!")
    }
    const newCoordinate = calculateNewCoordinate(oldCoordinate);

    this.playerCoordinates.set(player, newCoordinate);
    // @ts-ignore
    this.map.get(oldCoordinate).delete(player);
    // @ts-ignore
    this.map.get(newCoordinate).add(player);
  }

  moveUp() {
    for (const player of this.playerCoordinates.keys()) {
      this.updatePlayerCoordinate(player, (c) => {return {x: c.x, y: c.y + 1}})
    }
    this.updated.emit()
  }

  moveDown() {
    for (const player of this.playerCoordinates.keys()) {
      this.updatePlayerCoordinate(player, (c) => {return {x: c.x, y: c.y - 1}})
    }
    this.updated.emit()
  }

  moveRight() {
    for (const player of this.playerCoordinates.keys()) {
      this.updatePlayerCoordinate(player, (c) => {return {x: c.x + 1, y: c.y}})
    }
    this.updated.emit()
  }

  moveLeft() {
    for (const player of this.playerCoordinates.keys()) {
      this.updatePlayerCoordinate(player, (c) => {return {x: c.x - 1, y: c.y}})
    }
    this.updated.emit()
  }

  get(x: number, y: number): Set<PlaygroundTile> {
    const result = this.map.get({x: x, y: y});
    if (result == undefined) {
      throw Error("This should not happen!")
    }
    return result;
  }

  updateEmitter(): EventEmitter<undefined> {
    return this.updated
  }
}

export type Coordinate = {
  x: number,
  y: number,
}

export interface PlaygroundTile {

}

class Block implements PlaygroundTile {

}

export class Player implements PlaygroundTile {
  public readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Pit implements PlaygroundTile {

}
