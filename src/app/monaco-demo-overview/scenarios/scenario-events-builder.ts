import {ScenarioEvent, ScenarioExecutor} from "./scenario-definitions";

export class ScenarioEventsBuilder {
  private readonly editor: any;
  private readonly events: ScenarioEvent[] = []

  constructor(editor: any) {
    this.editor = editor
  }

  private createAndAddScenarioEvent(event: (scenarioExecutor: ScenarioExecutor) => void, delayAfterInMs: number = 800) {
    this.events.push({
      event, delayBeforeInMs: delayAfterInMs
    })
  }

  typeText(text: string): ScenarioEventsBuilder {
    text.split('').forEach(c => this.createAndAddScenarioEvent(
      () => this.editor.trigger('editor', 'type', {text: c}), 200
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

  showHover(): ScenarioEventsBuilder {
    this.createAndAddScenarioEvent(() => this.editor.trigger('', 'editor.action.showHover'))
    return this;
  }

  hideHover(): ScenarioEventsBuilder {
    // There is no function to hide the hover, so we do work around this with a sneaky trick.
    this.createAndAddScenarioEvent(() => {
      this.editor.trigger('keyboard', 'undo')
      this.editor.trigger('', 'editor.action.showHover')
      this.editor.trigger('keyboard', 'redo')
    })
    return this;
  }

  wait(delayInMs: number): ScenarioEventsBuilder {
    this.createAndAddScenarioEvent(() => {}, delayInMs)
    return this
  }

  build(): ScenarioEvent[] {
    return this.events;
  }
}

