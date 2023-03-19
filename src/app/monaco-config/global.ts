import {EventEmitter} from "@angular/core";
import {MONACO_CUSTOM_LANGUAGE_NAME, MONACO_CUSTOM_THEME_NAME} from "./monacoEditorConfig";

export let GLOBAL_MONACO: any = null;

/*
* Emits an event when monacoEditor is set.
* In terms of lifecycle hooks: this is after AfterViewChecked. So we need this emitter.
*/
export const MONACO_EDITOR_VARIABLE_SET: EventEmitter<void> = new EventEmitter<void>()

export function setMonacoVariables(monaco: any) {
  GLOBAL_MONACO = monaco;

  // The monaco editor is not really loaded when this function is called.
  // We need to wait for the entire page to be loaded.
  // We do this in a very stupid way, but it works.
  setTimeout(() => MONACO_EDITOR_VARIABLE_SET.emit(), 500);
}

// It is difficult to get the right editor if we have multiple on screen, since they are all part of a long list.
// To make sure we can get the right editor, we add a non-existing option that we can use to identify the editor.
// We can just use something simple as an incrementing number.
let identifier = 0;
export function createMonacoEditorOptions() {
  return {
    ...MONACO_EDITOR_OPTIONS,
    ...{
      myIdentifier: identifier++,
    }
  }
}

export function getMonacoEditor(options: any) {
  return GLOBAL_MONACO.editor.getEditors()
    .find((editor: any) =>
      editor.getRawOptions().myIdentifier === options.myIdentifier)
}

const MONACO_EDITOR_OPTIONS = {
  theme: MONACO_CUSTOM_THEME_NAME,
  language: MONACO_CUSTOM_LANGUAGE_NAME,
  scrollBeyondLastLine: false,
  minimap: {enabled: false},
  fontFamily: "Consolas, monospace",
  fontSize: "16px",
  overviewRulerLanes: 0,
  // I am not sure whether we should enable or disable this. I had issues with hover/suggestion boxes that would not show
  // properly when hovering at the top of the editor. Though now it seems fixed.
  // We also need it false specifically for the demo overview screen, because scrolling should keep the hover/suggestion
  // boxes inside the editor. If we set this to true, it will stay fixed on the screen.
  // fixedOverflowWidgets: true,
};
