import {EventEmitter} from "@angular/core";

export class Playground {
  private readonly updated = new EventEmitter<undefined>();
  player: Coordinate = {
    x: 1,
    y: 2
  }

  moveUp() {
    this.player.y += 1
    this.updated.emit()
  }

  moveDown() {
    this.player.y -= 1
    this.updated.emit()
  }

  moveRight() {
    this.player.x += 1
    this.updated.emit()
  }

  moveLeft() {
    this.player.x -= 1
    this.updated.emit()
  }

  get(x: number, y: number): string {
    if (this.player.x == x && this.player.y == y) {
      return 'P'
    } else {
      return '.'
    }
  }

  updateEmitter(): EventEmitter<undefined> {
    return this.updated
  }
}

export type Coordinate = {
  x: number,
  y: number,
}
