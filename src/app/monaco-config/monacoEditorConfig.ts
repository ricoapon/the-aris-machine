import {NgxMonacoEditorConfig} from "ngx-monaco-editor-v2";
import {loadAutoComplete} from "./auto-complete";
import {loadSyntaxHighlighting} from "./syntax-highlighting";
import {setMonacoEditor} from "./global";

declare let monaco: any;
export const MONACO_CUSTOM_LANGUAGE_NAME = 'humans-language'
export const MONACO_CUSTOM_THEME_NAME = 'humans-theme'

export function myMonacoLoad() {
  monaco.languages.register({ id: MONACO_CUSTOM_LANGUAGE_NAME });
  loadAutoComplete(monaco, MONACO_CUSTOM_LANGUAGE_NAME)
  loadSyntaxHighlighting(monaco, MONACO_CUSTOM_LANGUAGE_NAME, MONACO_CUSTOM_THEME_NAME)
  setMonacoEditor(monaco.editor);
}

export const monacoEditorConfig: NgxMonacoEditorConfig = {
  onMonacoLoad: myMonacoLoad,
};
