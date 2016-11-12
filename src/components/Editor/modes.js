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
};

const setJSXModeAndLinter = () => {

};

const modeMapper = {
  htmlmixed: setHTMLModeAndLinter,
  jsx: setJSXModeAndLinter,
};

export default (mode, CM, instance) => {
  if (loadedModes.indexOf(mode) !== -1) {
    return modeMapper[mode](CM, instance);
  }
  return require.ensure([], () => {
    modeMapper[mode](CM, instance);
  });
};
