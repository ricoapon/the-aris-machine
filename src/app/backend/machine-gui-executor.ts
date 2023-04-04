import {Level} from "./levels";
import {Injectable} from "@angular/core";
import {Parser} from "./parsing/parser";
import {MyCookieService} from "../my-cookie-service";
import {MachineGUIAction, ParseResult} from "./parsing/parse-result";

/**
 * This class "runs" the code on the screen, meaning that all steps that the code makes (for example: moving a memory
 * from input to memory slot 0) is executed on screen. Using the {@link MachineGUI} interface, all actions are delegated
 * to a frontend component.
 */
@Injectable({providedIn: 'root'})
export class MachineGuiExecutor {
  private determineCode: () => string;
  private level: Level;
  private machineGUI: MachineGUI;
  private machineEditor: MachineEditor;
  private delayInMs: number;

  // Array with all the actions that will be emptied after actions are executed.
  private actions: MachineGUIAction[] = []
  private parseResult: ParseResult
  private timer: NodeJS.Timer | undefined

  constructor(private myCookieService: MyCookieService) {
    this.delayInMs = 1000 / myCookieService.getSpeedUpFactor()
  }

  getCodeLengthScore(): number {
    // This method is called when initializing the screen, so this part is here for avoiding errors.
    if (this.parseResult == undefined) {
      return 0
    }
    return this.parseResult.codeLengthScore
  }

  setDetermineCode(determineCode: () => string) {
    this.determineCode = determineCode;
  }

  setLevel(level: Level) {
    this.level = level
    if (this.machineGUI != undefined) {
      this.machineGUI.initialize(this.level)
      this.machineGUI.detectChanges()
    }
  }

  setMachineVariables(machineGUI: MachineGUI, machineEditor: MachineEditor) {
    this.machineGUI = machineGUI;
    this.machineEditor = machineEditor;
    if (this.level != undefined) {
      this.machineGUI.initialize(this.level)
      this.machineGUI.detectChanges()
    }
  }

  initialize() {
    this.parseResult = new Parser().parse(this.level, this.determineCode())
    this.actions = this.parseResult.actions
  }

  hasActionsLeft(): boolean {
    return this.actions.length > 0
  }

  isRunning(): boolean {
    return this.timer != undefined
  }

  execute() {
    // The trick to add delays in between also applies to the first element. So we do this one manually.
    this.handleNext()
    this.executeDelayed()
  }

  updateDelayInMs(delayInMs: number) {
    this.delayInMs = delayInMs

    // Update the current running sequence with the new value.
    if (this.isRunning()) {
      this.pause()
      this.executeDelayed()
    }
  }

  singleStep() {
    if (this.timer != undefined) {
      throw Error("Cannot do single step while executor is running")
    }

    this.handleNext()
  }

  stopAndClear() {
    this.pause()
    this.actions = []
    this.machineEditor.removeCaret()
    this.machineGUI.initialize(this.level)
  }

  pause(): void {
    if (this.timer != undefined) {
      clearInterval(this.timer)
      this.timer = undefined
    }
  }

  private executeDelayed() {
    this.timer = setInterval(() => {
      this.handleNext()
    }, this.delayInMs)
  }

  private handleNext() {
    const action = this.actions.shift()
    if (action == undefined) {
      this.pause()
      return
    }

    this.machineGUI.handle(action);
    if (action.editorLine != undefined) {
      this.machineEditor.addCaret(action.editorLine!!)
    } else {
      this.machineEditor.removeCaret()
    }
    this.machineGUI.detectChanges()
  }
}

export interface MachineGUI {
  detectChanges(): void;

  initialize(level: Level): void;

  handle(machineGUIAction: MachineGUIAction): void;
}

export interface MachineEditor {
  addCaret(lineNumber: number): void;

  removeCaret(): void;
}
