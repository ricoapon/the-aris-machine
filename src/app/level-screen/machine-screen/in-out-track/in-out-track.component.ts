import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-in-out-track',
  templateUrl: './in-out-track.component.html',
  styleUrls: ['./in-out-track.component.css']
})
export class InOutTrackComponent {
  @Input() isIn: boolean;
}
