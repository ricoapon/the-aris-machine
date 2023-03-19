import {EventEmitter} from "@angular/core";
import {MONACO_CUSTOM_LANGUAGE_NAME, MONACO_CUSTOM_THEME_NAME} from "./monacoEditorConfig";

export let GLOBAL_MONACO: any = null;

/* Global variable that can be used */
export let MONACO_EDITOR: any = null;

/*
* Emits an event when monacoEditor is set.
* In terms of lifecycle hooks: this is after AfterViewChecked. So we need this emitter.
*/
export const MONACO_EDITOR_VARIABLE_SET: EventEmitter<void> = new EventEmitter<void>()

export function setMonacoVariables(monaco: any) {
  GLOBAL_MONACO = monaco;
  MONACO_EDITOR = monaco.editor;

  // The monaco editor is not really loaded when this function is called.
  // We need to wait for the entire page to be loaded.
  // We do this in a very stupid way, but it works.
  setTimeout(() => MONACO_EDITOR_VARIABLE_SET.emit(), 500);
}

export const MONACO_EDITOR_OPTIONS = {
  theme: MONACO_CUSTOM_THEME_NAME,
  language: MONACO_CUSTOM_LANGUAGE_NAME,
  scrollBeyondLastLine: false,
  minimap: {enabled: false},
  fontFamily: "Consolas, monospace",
  fontSize: "16px",
  overviewRulerLanes: 0,
  fixedOverflowWidgets: true
};
