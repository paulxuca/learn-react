/* eslint global-require: 0 */
const HTMLHint = require('htmlhint').HTMLHint;

const loadedModes = [];

const setHTMLModeAndLinter = (CodeMirror, cmInstance) => {
  loadedModes.push('htmlmixed');
  require('codemirror/mode/htmlmixed/htmlmixed.js');
  require('codemirror/addon/edit/matchtags.js');
  require('codemirror/addon/edit/closetag.js');
  const linter = require('./linters/html.js');

  cmInstance.setOption('lint', {
    getAnnotations: linter(CodeMirror, HTMLHint),
  });

  cmInstance.setOption('mode', 'htmlmixed');
};

const setJSXModeAndLinter = (CodeMirror, cmInstance) => {
  loadedModes.push('jsx');
  require('codemirror/mode/jsx/jsx.js');
  const eslint = require('./jslint');
  const linter = require('./linters/jsx');

  cmInstance.setOption('lint', {
    getAnnotations: linter(CodeMirror, eslint),
  });

  cmInstance.setOption('mode', 'jsx');
};

const modeMapper = {
  htmlmixed: setHTMLModeAndLinter,
  jsx: setJSXModeAndLinter,
};

module.exports = (mode, CM, instance) => {
  modeMapper[mode](CM, instance);
};
