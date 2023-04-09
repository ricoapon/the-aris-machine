export class Level {
  readonly input: number[];
  readonly expectedOut: number[];
  readonly nrOfMemorySlots: number;
  readonly maxCodeLengthScoreForStar: number;
  readonly description: string;


  constructor(input: number[], expectedOut: number[], nrOfMemorySlots: number, maxCodeLengthScoreForStar: number, description: string) {
    this.input = input;
    this.expectedOut = expectedOut;
    this.nrOfMemorySlots = nrOfMemorySlots;
    this.maxCodeLengthScoreForStar = maxCodeLengthScoreForStar;
    this.description = description;
  }
}

const LEVELS: Level[] = [
  new Level([9, 6, 4], [9, 6, 4], 1, 2,
    "Write commands in the editor below to build a program. Your task is to use the numbers (the purple boxes) in the input to " +
    "get the expected output. In this first simple program, you can move the input to the output without modifications.<br>" +
    "<br>" +
    "You can use the command <code>move input to output</code>."),
  new Level([9, 6, 4, 9, 6, 4, 9, 6, 4, 9, 6, 4], [9, 6, 4, 9, 6, 4, 9, 6, 4, 9, 6, 4], 1, 2,
    "Writing out every line by hand is very tedious work. We can do that far easier: use a loop! Try and move " +
    "all the input numbers to the output with only four lines of code!<br>" +
    "<br>" +
    "You can use the command <code>loop { ... }</code> to loop."),
  new Level([4, 5, 1, 7, 8, 9], [5, 4, 7, 1, 9, 8], 3, 4,
    "If every level was just moving the input to the output, this game would be too simple! Let's switch it up: " +
    "you have to grab the first TWO numbers from the input and move them to the output in REVERSE order.<br>" +
    "<br>" +
    "The tiles you can see in the middle are called 'memory slots'. The number you can see on the memory slot is called " +
    "index. You can store numbers in memory slots. You should use them.<br>" +
    "<br>" +
    "You can use the command <code>move X to Y</code> to move numbers from X to Y. You can either use 'input', 'output' or the index " +
    "of a memory slot. For example, <code>move input to 0</code> would move a number from the input to the " +
    "memory slot with the number 0."),
  new Level([3, 6, 6, 8, -1, 8, 5, -5], [9, 14, 7, 0], 3, 5,
    "It is now time to modify the numbers using the power of addition! For each two things in the input, add " +
    "them together and put the result in the output.<br>" +
    "<br>" +
    "You can use the command <code>add X to Y</code> where X and Y must be memory slots."),
  new Level([1, 2, 3], [1, 2, 3], 10, 0,
    "This is only a test level to test the number of memory slots on screen."),
]

export function getLevel(i: number): Level {
  if (i <= 0 || i > LEVELS.length) {
    throw Error("Level " + i + " does not exist!")
  }

  return LEVELS[i - 1];
}
