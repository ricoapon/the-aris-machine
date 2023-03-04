import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-in-out-track',
  templateUrl: './in-out-track.component.html',
  styleUrls: ['./in-out-track.component.css']
})
export class InOutTrackComponent {
  @Input() isIn: boolean;
  @Input() values: number[] = []
  @ViewChild('line') line: ElementRef;

  maxIndex(): number {
    if (this.line == undefined) {
      return 100;
    }

    return (this.line.nativeElement.offsetWidth / 128) - 1;
    // // Each block and gap is 64 pixels,
    // const nrOfBlocksToShow = (+this.line.style.width) / 128;
    // return nrOfBlocksToShow;
  }
}
