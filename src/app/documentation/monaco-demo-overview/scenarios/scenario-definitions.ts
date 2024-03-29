export type ScenarioEvent = {
  event: (scenarioExecutor: ScenarioExecutor) => void
  delayBeforeInMs: number
}

export interface ScenarioExecutor {

}

export type Scenario = {
  id: number
  scenarioEvents: ScenarioEvent[]
  description: string
  heightInNrOfLines: number
}
