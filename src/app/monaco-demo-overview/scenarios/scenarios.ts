import {Scenario} from "./scenario-definitions";
import {ScenarioEventsBuilder} from "./scenario-events-builder";

export function getScenario(scenarioId: number, editor: any) {
  return allScenarios(editor).filter(scenario => scenario.id == scenarioId)[0];
}

// We cannot get scenario's without an editor. So we just keep track of a maximum.
export const NR_OF_SCENARIOS = 2;

export function getEmptyScenario(scenarioId: number) {
  return getScenario(scenarioId, null);
}

export function allScenarios(editor: any): Scenario[] {
  // Hardcoding ID's makes it easy to make mistakes. Incrementing variable prevents that.
  let scenarioId = 0
  return [
    {
      id: scenarioId++,
      scenarioEvents: new ScenarioEventsBuilder(editor)
        .typeText('loo')
        .openSuggestions()
        .acceptSuggestion()
        .build(),
      description: "Suggestions are automatically made while typing, and you can also press " +
        "<span class='hotkeys'>CTRL + SPACE</span> for showing all possible suggestions. You can press " +
        "<span class='hotkeys'>TAB</span> or <span class='hotkeys'>ENTER</span> keys to choose the suggestion.",
      heightInNrOfLines: 4,
    },
    {
      id: scenarioId++,
      scenarioEvents: new ScenarioEventsBuilder(editor)
        .typeText('m')
        .openSuggestions()
        .acceptSuggestion()
        .typeText("input")
        .nextSnippetPlaceholder()
        .typeText("0")
        .nextSnippetPlaceholder()
        .build(),
      description: "Some functions are filled in using a snippet that uses placeholders. After By pressing " +
        "<span class='hotkeys'>TAB</span> you can go to the next placeholder. After the last placeholder, you can press " +
        "<span class='hotkeys'>TAB</span> again to finish filling in the snippet. After finishing, you can see that the " +
        "highlighting of the placeholders is removed.",
      heightInNrOfLines: 2,
    },
  ]
}
