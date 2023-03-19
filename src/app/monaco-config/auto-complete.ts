import {editor, IRange, languages, Position} from "monaco-editor";
import HoverProvider = languages.HoverProvider;
import CompletionItemProvider = languages.CompletionItemProvider;
import ITextModel = editor.ITextModel;

export function createRange(model: ITextModel, position: Position): IRange {
  const currentWord = model.getWordAtPosition(position);
  let startColumn, endColumn;
  if (currentWord == undefined) {
    startColumn = 0;
    endColumn = 0;
  } else {
    startColumn = currentWord.startColumn
    endColumn = currentWord.endColumn
  }
  return {
    startLineNumber: position.lineNumber,
    endLineNumber: position.lineNumber,
    startColumn: startColumn,
    endColumn: endColumn,
  }
}

export function loadAutoComplete(monaco: any, languageName: string) {
  const completionItemProvider: CompletionItemProvider = {
    provideCompletionItems: (model: ITextModel, position: Position) => {
      // The range must be given, as the typescript definition indicates this.
      // However, it works fine without. Documentation even says it defaults to the word at the position.
      // To have compilation checks, we will just fill in the range anyway.
      const range = createRange(model, position)

      const suggestions = [
        {
          label: 'simpleText',
          kind: monaco.languages.CompletionItemKind.Text,
          insertText: 'simpleText',
          range
        },
        {
          label: 'inbox2',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'testing(${1:condition})',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range,
        },
        {
          label: 'loop',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: 'loop {\n  $0\n}',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: {
            value: `Look at this cool markdown!`,
            isTrusted: true
          },
          detail: "this is just a loop",
          range,
        },
        {
          label: 'inbox',
          kind: monaco.languages.CompletionItemKind.Text,
          insertText: 'inbox',
          documentation: {
            value: `That thing on the left with all the boxes!`,
            isTrusted: true
          },
          detail: "the thingie on the left",
          range,
        },
        {
          label: 'CityJS',
          kind: monaco.languages.CompletionItemKind.Constant,
          insertText: 'CityJS',
          documentation: {
            value: `Look at this cool markdown!`,
            isTrusted: true
          },
          range,
        }
      ];
      return { suggestions: suggestions };
    }
  }
  monaco.languages.registerCompletionItemProvider(languageName, completionItemProvider);

  // Wherever you hover, you now see some documentation!
  const hoverProvider: HoverProvider = {
    provideHover: (model: ITextModel, position: Position) => {
      const range = createRange(model, position)
      return {
        range,
        contents: [
          {
            value: `Look at this documentation!`,
            isTrusted: true
          }
        ]
      }
    }
  }
  monaco.languages.registerHoverProvider(languageName, hoverProvider)
}
