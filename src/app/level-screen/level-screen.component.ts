import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {getLevel, Level} from "../backend/levels";
import {MachineGuiExecutor} from "../backend/machine-gui-executor";
import {MachineScreenComponent} from "./machine-screen/machine-screen.component";

@Component({
  selector: 'app-level-screen',
  templateUrl: './level-screen.component.html',
  styleUrls: ['./level-screen.component.css']
})
export class LevelScreenComponent implements OnInit, AfterViewInit {
  level: Level;
  @ViewChild('machineScreenComponent') machineScreenComponent: MachineScreenComponent;

  constructor(private route: ActivatedRoute, private router: Router, private machineGuiExecutor: MachineGuiExecutor) {
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
    this.machineGuiExecutor.setLevel(this.level)
    this.machineGuiExecutor.setMachineGUI(this.machineScreenComponent)
  }
}
