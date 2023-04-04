export type MachineGUIAction = {
  shiftInput?: boolean,
  addValueToOutput?: number,
  // I am not sure how this could be done different (like index: value). This worked.
  memory?: { index: number, value: number | undefined }[]
  error?: string,
  finished?: boolean,
}

export type ParseResult = {
  actions: MachineGUIAction[]
  finishedWithError: boolean
  codeLengthScore: number
}


