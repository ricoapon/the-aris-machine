import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Scenario, ScenarioEvent} from "../scenarios/scenario-definitions";
import {concatMap, delay, of, Subscription} from "rxjs";
import {getEmptyScenario, getScenario} from "../scenarios/scenarios";
import {MonacoVariables, MonacoVariablesFactory} from "../../../monaco-config/global";

@Component({
  selector: 'app-monaco-demo',
  templateUrl: './monaco-demo.component.html',
  styleUrls: ['./monaco-demo.component.css']
})
export class MonacoDemoComponent implements OnInit, OnDestroy {
  readonly monacoVariables: MonacoVariables;
  readonly options: any;

  @Input() scenarioId: number;
  @ViewChild('editor') editor: ElementRef;
  @ViewChild('container') container: ElementRef;
  content = ''
  currentSubscription: Subscription;
  scenario: Scenario;

  constructor(private monacoVariablesFactory: MonacoVariablesFactory) {
    this.monacoVariables = monacoVariablesFactory.get();
    this.monacoVariables.observableMonacoFinishedInitializing().subscribe(() => this.play())
    this.options = this.monacoVariables.createMonacoEditorOptions();
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

    const actualEditor = this.monacoVariables.getMonacoEditor(this.options)
    // You cannot clear the content of the editor using "this.content = ''". I don't know why.
    // This does work and this.content is updated to the correct value.
    actualEditor.getModel().setValue('')

    this.scenario = getScenario(this.scenarioId, actualEditor)
    // We add another event at the end of the list that calls this method again.
    // This way, it loops forever.
    const scenarioEvents = this.scenario.scenarioEvents.concat({event: () => this.play(), delayBeforeInMs: 2000})

    this.currentSubscription = of(...scenarioEvents)
      .pipe(concatMap(scenarioEvent => of(scenarioEvent).pipe(delay(scenarioEvent.delayBeforeInMs))))
      .subscribe((scenarioEvent: ScenarioEvent) => {
        scenarioEvent.event.call(this, this)
      });
  }

  ngOnDestroy(): void {
    this.clearSubscription()
  }

  ngOnInit(): void {
    // We need to initialize, so that we can determine the height.
    this.scenario = getEmptyScenario(this.scenarioId);
  }

  determineHeight(): string {
    if (this.scenario == undefined) {
      return "200px";
    }
    return (this.scenario.heightInNrOfLines * 20) + "px";
  }
}
