import {ProgramVisitor} from "./program-visitor";
import {Level} from "../levels";
import {ParseResult} from "./parse-result";
import {ScoreListener} from "./score-listener";

/**
 * Entry point for executing code for a certain level.
 */
export class Parser {
  parse(level: Level, input: string): ParseResult {
    const machineResult = new ProgramVisitor().run(level, input)
    const codeLengthScore = new ScoreListener().determineCodeLengthScore(input)
    return {
      actions: machineResult.machineGUIActions,
      finishedWithError: machineResult.finishedWithError,
      codeLengthScore: codeLengthScore,
    }
  }
}
