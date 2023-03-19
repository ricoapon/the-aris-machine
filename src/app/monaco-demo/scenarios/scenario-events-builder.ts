import {ScenarioEvent, ScenarioExecutor} from "./scenario-definitions";

export class ScenarioEventsBuilder {
  private readonly editor: any;
  private readonly events: ScenarioEvent[] = []

  constructor(editor: any) {
    this.editor = editor
  }

  private createAndAddScenarioEvent(event: (scenarioExecutor: ScenarioExecutor) => void, delayAfterInMs: number = 500) {
    this.events.push({
      event, delayAfterInMs
    })
  }

  typeText(text: string): ScenarioEventsBuilder {
    text.split('').forEach(c => this.createAndAddScenarioEvent(
      () => this.editor.trigger('editor', 'type', {text: c}), 100
    ))

    return this
  }

  nextSnippetPlaceholder(): ScenarioEventsBuilder {
    this.createAndAddScenarioEvent(() => this.editor.trigger('editor', 'jumpToNextSnippetPlaceholder'))
    return this;
  }

  openSuggestions(): ScenarioEventsBuilder {
    this.createAndAddScenarioEvent(() => this.editor.trigger('editor', 'editor.action.triggerSuggest'))
    return this;
  }

  nextSuggestion(): ScenarioEventsBuilder {
    this.createAndAddScenarioEvent(() => this.editor.trigger('', 'selectNextSuggestion'))
    return this;
  }

  acceptSuggestion(): ScenarioEventsBuilder {
    this.createAndAddScenarioEvent(() => this.editor.trigger('', 'acceptSelectedSuggestionOnEnter'))
    return this;
  }

  build(): ScenarioEvent[] {
    return this.events;
  }
}

