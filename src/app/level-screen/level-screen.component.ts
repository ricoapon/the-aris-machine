import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

  // Variables for dragging.
  isSplitterDragging = false;
  @ViewChild('container') container: ElementRef;
  @ViewChild('left') left: ElementRef;
  @ViewChild('right') right: ElementRef;

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

  onDragStart(): void {
    this.isSplitterDragging = true;
  }

  onDragEnd(): void {
    this.isSplitterDragging = false;
  }

  onDrag(event: any) {
    if (!this.isSplitterDragging) {
      return
    }

    const minWidthLeft = 400;
    const minWidthRight = 400;

    // Total width available is the total width minus borders and the splitter element.
    const totalWidth = this.container.nativeElement.offsetWidth - 4 - 4 * 2
    const newWidthLeft = event.clientX - this.left.nativeElement.offsetLeft;
    const newWidthRight = totalWidth - newWidthLeft;

    if (newWidthLeft < minWidthLeft || newWidthRight < minWidthRight) {
      return
    }

    this.left.nativeElement.style.width = newWidthLeft + 'px'
    this.right.nativeElement.style.width = newWidthRight + 'px'
    this.left.nativeElement.flexGrow = 0
    this.right.nativeElement.flexGrow = 0
  }
}