import {ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {Level} from "../../backend/levels";
import {MachineGUI, MachineGuiExecutor} from "../../backend/machine-gui-executor";
import {ActivatedRoute, Router} from "@angular/router";
import {MachineGUIAction} from "../../backend/parsing/parse-result";

@Component({
  selector: 'app-machine-screen',
  templateUrl: './machine-screen.component.html',
  styleUrls: ['./machine-screen.component.css']
})
export class MachineScreenComponent implements MachineGUI {
  input: number[];
  output: number[];
  memorySlots: (number | undefined)[];
  maxCodeLengthScoreForStar: number;
  @ViewChild('finishedDialog') finishedDialog: ElementRef<HTMLDialogElement>

  constructor(private changeDetectorRef: ChangeDetectorRef,
              public machineGuiExecutor: MachineGuiExecutor,
              private route: ActivatedRoute,
              private router: Router) {
    // Add some values so the HTML stuff doesn't break.
    this.input = []
    this.output = []
    this.memorySlots = []
  }

  rangeToN(n: number): number[] {
    return Array(n).fill(0).map((x, i) => i);
  }

  determineNrOfGridColumns(): number {
    const length = this.memorySlots.length
    if (length <= 5) {
      return length;
    }

    return Math.ceil(length / 2);
  }

  detectChanges(): void {
    this.changeDetectorRef.detectChanges()
  }

  initialize(level: Level): void {
    // Clone the array to make sure no changes from the outside affect this class.
    this.input = [...level.input]
    this.output = [];
    this.memorySlots = [];
    for (let i = 0; i < level.nrOfMemorySlots; i++) {
      this.memorySlots.push(undefined)
    }
    this.maxCodeLengthScoreForStar = level.maxCodeLengthScoreForStar;
  }

  error(message: string) {
    alert(message)
    this.machineGuiExecutor.stopAndClear()
  }

  finished() {
    this.finishedDialog.nativeElement.showModal()
  }

  handle(machineGUIAction: MachineGUIAction): void {
    if (machineGUIAction.finished == true) {
      this.finished()
      return
    } else if (machineGUIAction.error != undefined) {
      this.error(machineGUIAction.error)
      return
    }

    if (machineGUIAction.shiftInput == true) {
      this.input.shift()
    }
    if (machineGUIAction.memory != undefined) {
      machineGUIAction.memory.forEach((memorySlot) => {
        this.memorySlots[memorySlot.index] = memorySlot.value
      })
    }
    if (machineGUIAction.addValueToOutput != undefined) {
      // To make sure the output is shown in the correct order, we need to add at the start instead of at the end.
      this.output.unshift(machineGUIAction.addValueToOutput)
    }
  }

  dialogBack() {
    this.machineGuiExecutor.stopAndClear()
    this.finishedDialog.nativeElement.close()
  }

  dialogNext() {
    this.route.paramMap.subscribe(paramMap => {
      const levelId = paramMap.get('id')
      if (levelId == null) {
        throw Error('Level could not be found after finishing, this should not happen!')
      }
      const nextLevel: number = 1 + +levelId

      // If we navigate normally, we don't re-initialise the entire level. If we refresh the page, it does.
      // To mimic this, we use a trick to reload the level page.
      // See https://stackoverflow.com/questions/40983055/how-to-reload-the-current-route-with-the-angular-2-router.
      // We are not actually reloading the page, so we have to reset the executor though.
      this.machineGuiExecutor.stopAndClear()
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => this.router.navigate(['/levels/' + nextLevel]));
    })
  }
}
