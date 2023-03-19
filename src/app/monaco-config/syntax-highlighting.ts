export function loadSyntaxHighlighting(monaco: any, languageName: string, themeName: string) {
  monaco.languages.setMonarchTokensProvider(languageName, {
    tokenizer: {
      root: [
        [/(add|copy|move)/, 'function'],
        [/(input|output)/, 'input-output'],
        [/(\d+)/, 'memory-slot'],
        [/loop/, 'loop'],
        [/[{}]/, 'bracket'],
      ]
    }
  });

  // Common colors we use for tokens.
  const black = '#000000'
  const white = '#FFFFFF'
  const purple = '#A600E0';
  const blue = '#00AAE0'
  const green = '#3AE000';
  const red = '#E03600';

  monaco.editor.defineTheme(themeName, {
    base: 'vs-dark',
    inherit: true,
    colors: {
      "editor.foreground": white,
      "editor.background": black,
      "editorCursor.foreground": "#c0c0c0",
      // We cannot hide the highlighting of the line, so we make it the same color as the background.
      "editor.lineHighlightBackground": black,
      "editorLineNumber.foreground": white,
      // We do not want to highlight the line number of the line, so we make it the same color as normal line numbers.
      "editorLineNumber.activeForeground": white,
      "editor.selectionBackground": "#404040",
      "editor.inactiveSelectionBackground": black,
    },
    rules: [
      {token: 'function', foreground: purple, fontStyle: 'bold'},
      {token: 'input-output', foreground: green},
      {token: 'memory-slot', foreground: green},
      {token: 'loop', foreground: blue},
      {token: 'bracket', foreground: blue},
    ]
  });
}
