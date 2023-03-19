import {EventEmitter} from "@angular/core";

/* Global variable that can be used */
export let MONACO_EDITOR: any = null;

/*
* Emits an event when monacoEditor is set.
* In terms of lifecycle hooks: this is after AfterViewChecked. So we need this emitter.
*/
export const MONACO_EDITOR_VARIABLE_SET: EventEmitter<void> = new EventEmitter<void>()

export function setMonacoEditor(editor: any) {
  MONACO_EDITOR = editor;

  // The monaco editor is not really loaded when this function is called.
  // We need to wait for the entire page to be loaded.
  // We do this in a very stupid way, but it works.
  setTimeout(() => MONACO_EDITOR_VARIABLE_SET.emit(), 500);
}
