import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {getLevel, Level} from "../backend/levels";
import {Parser} from "../backend/parser";
import {Machine} from "../backend/machine";
import {MachineGuiExecutor} from "../backend/machine-gui-executor";
import {MachineScreenComponent} from "./machine-screen/machine-screen.component";

@Component({
  selector: 'app-level-screen',
  templateUrl: './level-screen.component.html',
  styleUrls: ['./level-screen.component.css']
})
export class LevelScreenComponent implements OnInit, AfterViewInit {
  level: Level;
  machineGuiExecutor: MachineGuiExecutor;
  @ViewChild('machineScreenComponent') machineScreenComponent: MachineScreenComponent;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const levelId = paramMap.get('id')
      try {
        if (levelId == null) {
          // noinspection ExceptionCaughtLocallyJS
          throw Error('No valid level')
        }

        this.level = getLevel(+levelId)
      } catch (e) {
        this.router.navigate(['/'])
      }
    })
  }

  ngAfterViewInit(): void {
    this.machineScreenComponent.initialize(this.level)
    this.machineScreenComponent.detectChanges()
    this.machineGuiExecutor = new MachineGuiExecutor(this.level, this.machineScreenComponent)
  }


  runCode(input: any) {
    const guiActions = new Parser(new Machine(this.level)).parse(input)
    this.machineGuiExecutor.initialize(guiActions)
    this.machineGuiExecutor.execute()
  }
}
