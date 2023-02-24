import {EventEmitter} from "@angular/core";
import {MyMap, ObjectWithId} from "./my-map";
import {Level} from "./levels/levels";
import {MySet} from "./my-set";
import {Coordinate} from "./coordinate";

export class Playground {
  private readonly updated = new EventEmitter<undefined>();
  public readonly width: number;
  public readonly height: number;

  private readonly playerCoordinates: MyMap<Player, Coordinate>;
  private readonly invertedPlayerCoordinates: MyMap<Coordinate, Player>
  private readonly blockCoordinates: MyMap<Block, Coordinate>;
  private readonly invertedBlockCoordinates: MyMap<Coordinate, Block>
  private readonly _pits: MySet<Coordinate>
  private readonly _walls: MySet<Coordinate>

  constructor(level: Level) {
    this.width = level.width;
    this.height = level.height;
    this.playerCoordinates = new MyMap<Player, Coordinate>()
    this.invertedPlayerCoordinates = new MyMap<Coordinate, Player>()
    level.startingPositionPlayers.forEach((coordinate: Coordinate, id: number) => {
      const player = new Player(id)
      this.playerCoordinates.set(player, coordinate)
      this.invertedPlayerCoordinates.set(coordinate, player)
    })
    this.blockCoordinates = new MyMap<Block, Coordinate>()
    this.invertedBlockCoordinates = new MyMap<Coordinate, Block>()
    level.startingPositionBlocks.forEach((coordinate: Coordinate, id: number) => {
      let block = new Block(id);
      this.blockCoordinates.set(block, coordinate)
      this.invertedBlockCoordinates.set(coordinate, block)
    })
    this._pits = new MySet<Coordinate>()
    level.pits.forEach((c: Coordinate) => {
      this._pits.add(c)
    })
    this._walls = new MySet<Coordinate>()
    level.walls.forEach((c: Coordinate) => {
      this._walls.add(c)
    })
  }

  private updatePlayerCoordinate(player: Player, calculateNewCoordinate: (c: Coordinate) => Coordinate) {
    const oldCoordinate = this.playerCoordinates.get(player);
    if (oldCoordinate == undefined) {
      throw Error("This should not happen!")
    }

    if (this._pits.has(oldCoordinate)) {
      // If we are in a pit, we stop doing anything.
      return
    }

    const newCoordinate = calculateNewCoordinate(oldCoordinate);

    if (this._walls.has(newCoordinate)) {
      // We cannot walk through walls.
      return
    }

    if (this.invertedPlayerCoordinates.has(newCoordinate)) {
      // We cannot walk through other players.
      return
    }

    this.playerCoordinates.set(player, newCoordinate);
    this.invertedPlayerCoordinates.delete(oldCoordinate)
    this.invertedPlayerCoordinates.set(newCoordinate, player)

    if (player.holdsBlock != undefined) {
      this.blockCoordinates.set(player.holdsBlock, newCoordinate)
      this.invertedBlockCoordinates.delete(oldCoordinate)
      this.invertedBlockCoordinates.set(newCoordinate, player.holdsBlock)
    }
  }

  moveUp() {
    for (const player of this.playerCoordinates.keys()) {
      this.updatePlayerCoordinate(player, (c) => {return new Coordinate(c.x, c.y + 1)})
    }
    this.updated.emit()
  }

  moveDown() {
    for (const player of this.playerCoordinates.keys()) {
      this.updatePlayerCoordinate(player, (c) => {return new Coordinate(c.x, c.y - 1)})
    }
    this.updated.emit()
  }

  moveRight() {
    for (const player of this.playerCoordinates.keys()) {
      this.updatePlayerCoordinate(player, (c) => {return new Coordinate(c.x + 1, c.y)})
    }
    this.updated.emit()
  }

  moveLeft() {
    for (const player of this.playerCoordinates.keys()) {
      this.updatePlayerCoordinate(player, (c) => {return new Coordinate(c.x - 1, c.y)})
    }
    this.updated.emit()
  }

  pickUp() {
    const reverseBlockMap = new MyMap<Coordinate, Block>();
    this.blockCoordinates.forEach((value: Coordinate, key: Block) => {
      reverseBlockMap.set(value, key)
    })
    for (const player of this.playerCoordinates.keys()) {
      const playerCoordinate = this.playerCoordinates.get(player)
      if (reverseBlockMap.has(playerCoordinate)) {
        player.holdsBlock = reverseBlockMap.get(playerCoordinate)
      }
    }
    this.updated.emit()
  }

  drop() {
    for (const player of this.playerCoordinates.keys()) {
      player.holdsBlock = undefined
    }
    this.updated.emit()
  }

  pits(): Coordinate[] {
    return this._pits.toList()
  }

  walls(): Coordinate[] {
    return this._walls.toList()
  }

  players(): [{id: number, holdsBlock: boolean, c: Coordinate}] {
    // @ts-ignore
    const result: [{id: number, holdsBlock: boolean, c: Coordinate}] = []
    this.playerCoordinates.forEach((value: Coordinate, key: Player) => {
      result.push({id: key.id, holdsBlock: key.holdsBlock != undefined, c: value})
    })
    return result
  }

  blocks(): [{id: number, c: Coordinate}] {
    // @ts-ignore
    const result: [{id: number, c: Coordinate}] = []
    this.blockCoordinates.forEach((value: Coordinate, key: Block) => {
      result.push({id: key.id, c: value})
    })
    return result
  }

  updateEmitter(): EventEmitter<undefined> {
    return this.updated
  }
}

class Block extends ObjectWithId {
  constructor(id: number) {
    super(id);
  }
}

export class Player extends ObjectWithId {
  holdsBlock: Block | undefined;

  constructor(id: number) {
    super(id);
  }
}
