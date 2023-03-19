import {Scenario} from "./scenario-definitions";
import {ScenarioEventsBuilder} from "./scenario-events-builder";

export function getScenario(scenarioId: number, editor: any) {
  return allScenarios(editor).filter(scenario => scenario.id == scenarioId)[0];
}

// We cannot get scenario's without an editor. So we just keep track of a maximum.
export const NR_OF_SCENARIOS = 2;

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
        "<div class='hotkeys'>CTRL + SPACE</div> for showing all possible suggestions. You can press it again to hide " +
        "or show the documentation corresponding to the suggestion."
    },
    {
      id: scenarioId++,
      scenarioEvents: new ScenarioEventsBuilder(editor)
        .typeText('i')
        .openSuggestions()
        .acceptSuggestion()
        .build(),
      description: "Suggestions are automatically made while typing, and you can also press " +
        "<div class='hotkeys'>CTRL + SPACE</div> for showing all possible suggestions. You can press it again to hide " +
        "or show the documentation corresponding to the suggestion."
    },
  ]
}
