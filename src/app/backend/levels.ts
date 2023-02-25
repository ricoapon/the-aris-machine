export class Level {
  readonly input: number[];
  readonly expectedOut: number[];
  readonly nrOfMemorySlots: number;

  constructor(input: number[], expectedOut: number[], nrOfMemorySlots: number) {
    this.input = input;
    this.expectedOut = expectedOut;
    this.nrOfMemorySlots = nrOfMemorySlots;
  }
}

export const LEVEL_1 = new Level([9, 6, 4], [9, 6, 4], 0)

// Reverse two inputs and put them into the output. Repeat.
export const LEVEL_2 = new Level([4, 5, 1, 7, 8, 9], [5, 4, 7, 1, 8, 9], 3)

// Put the sum of two elements in the output. Repeat.
export const LEVEL_3 = new Level([3, 6, 6, 8, -1, 8, 5, -5], [9, 14, 7, 0], 3)
