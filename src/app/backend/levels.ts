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

  new Level([4, 8, 3, 1, 10], [12, 24, 9, 3, 30], 3, 6,
    "Triple the input value and output the result."),
  new Level([4, 8, 3, 1, 10], [32, 64, 24, 8, 80], 5, 6,
    "Multiply the input by 8 and output the result. Can you do it using only 3 ADD commands?"),
  new Level([4, 8, 3, 1, 10], [160, 320, 120, 40, 400], 5, 10,
    "Multiply the input by 40 and output the result."),

  new Level([9, 0, 8, 1, 0, 0, -6, 0], [0, 0, 0, 0], 3, 4,
    "Only move the 0 values to the output. You can use the command <code>ifzero [memory-slot | input] { ... }</code> " +
    "to only execute commands if the memory slot has the value 0 in it." +
    "<br>" +
    "The function <code>ifnotzero</code> also exists, which does the opposite: executes code only if the memory slot value is not equal to 0."),
  new Level([9, 0, -5, 1, 6, 8, 0, -1], [10, -6, 2, 7, 9, -2], 3, 8,
    "If the input is positive, add 1 and output that. If the input is negative, subtract 1 and output that. " +
    "Ignore any input that is 0."),
  new Level([9, 0, -5, 1, 6, 8, 0, -1], [8, -4, 0, 5, 7, 0], 3, 9,
    "If the input is positive, subtract 1 and output that. If the input is negative, add 1 and output that. " +
    "Ignore any input that is 0."),
]

export function getLevel(i: number): Level {
  if (i <= 0 || i > LEVELS.length) {
    throw Error("Level " + i + " does not exist!")
  }

  return LEVELS[i - 1];
}
