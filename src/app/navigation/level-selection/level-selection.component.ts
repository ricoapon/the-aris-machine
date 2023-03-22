import { Component } from '@angular/core';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.css', '../shared.css']
})
export class LevelSelectionComponent {

  levels(): number[] {
    const result = []
    for (let i = 1; i <= 16; i++) {
      result.push(i)
    }
    return result
  }
}
