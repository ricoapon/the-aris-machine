import {Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {createMonacoEditorOptions, getMonacoEditor, MONACO_EDITOR_VARIABLE_SET} from "../../monaco-config/global";
import {ScenarioEvent} from "../scenarios/scenario-definitions";
import {concatMap, delay, of, Subscription} from "rxjs";
import {getScenario} from "../scenarios/scenarios";

@Component({
  selector: 'app-monaco-demo',
  templateUrl: './monaco-demo.component.html',
  styleUrls: ['./monaco-demo.component.css']
})
export class MonacoDemoComponent implements OnDestroy {
  @Input() scenarioId: number;
  @ViewChild('editor') editor: ElementRef;
  @ViewChild('container') container: ElementRef;
  options = createMonacoEditorOptions();
  content = ''
  currentSubscription: Subscription;

  constructor() {
    MONACO_EDITOR_VARIABLE_SET.subscribe(() => this.play())
  }

  private clearSubscription() {
    if (this.currentSubscription != undefined) {
      this.currentSubscription.unsubscribe()
    }
  }

  play() {
    // If we disable the text area, there is no way for the user to disturb the actions.
    // Since it is deeply nested in the container, we search it like this.
    this.container!.nativeElement!.querySelector('textarea').disabled = true

    this.clearSubscription()

    const actualEditor = getMonacoEditor(this.options)
    // You cannot clear the content of the editor using "this.content = ''". I don't know why.
    // This does work and this.content is updated to the correct value.
    actualEditor.getModel().setValue('')

    const scenario = getScenario(this.scenarioId, actualEditor)
    // We add another event at the end of the list that calls this method again.
    // This way, it loops forever.
    const scenarioEvents = scenario.scenarioEvents.concat({event: () => this.play(), delayAfterInMs: 2000})

    this.currentSubscription = of(...scenarioEvents)
      .pipe(concatMap(scenarioEvent => of(scenarioEvent).pipe(delay(scenarioEvent.delayAfterInMs))))
      .subscribe((scenarioEvent: ScenarioEvent) => {
        scenarioEvent.event.call(this, this)
      });
  }

  ngOnDestroy(): void {
    this.clearSubscription()
  }
}
