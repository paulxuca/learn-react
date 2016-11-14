module.exports = (CodeMirror, eslint) => {
  const defaultConfig = {
    ecmaFeatures: {
      modules: true,
    },
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
      },
    },
    env: {
      browser: true,
      node: false,
      amd: false,
      mocha: false,
      jasmine: false,
    },
    rules: {
      'no-alert': 0,
      'no-array-constructor': 0,
      'no-bitwise': 0,
      'no-caller': 0,
      'no-case-declarations': 2,
      'no-catch-shadow': 0,
      'no-class-assign': 2,
      'no-cond-assign': 2,
      'no-confusing-arrow': 0,
      'no-console': 0,
      'no-const-assign': 2,
      'no-constant-condition': 2,
      'no-continue': 0,
      'no-control-regex': 2,
      'no-debugger': 2,
      'no-delete-var': 2,
      'no-div-regex': 0,
      'no-dupe-class-members': 2,
      'no-dupe-keys': 2,
      'no-dupe-args': 2,
      'no-duplicate-case': 2,
      'no-else-return': 0,
      'no-empty': 2,
      'no-empty-character-class': 2,
      'no-empty-function': 0,
      'no-empty-pattern': 2,
      'no-eq-null': 0,
      'no-eval': 0,
      'no-ex-assign': 2,
      'no-extend-native': 0,
      'no-extra-bind': 0,
      'no-extra-boolean-cast': 2,
      'no-extra-label': 0,
      'no-extra-parens': 0,
      'no-extra-semi': 2,
      'no-fallthrough': 2,
      'no-floating-decimal': 0,
      'no-func-assign': 2,
      'no-implicit-coercion': 0,
      'no-implicit-globals': 0,
      'no-implied-eval': 0,
      'no-inline-comments': 0,
      'no-inner-declarations': 2,
      'no-invalid-regexp': 2,
      'no-invalid-this': 0,
      'no-irregular-whitespace': 2,
      'no-iterator': 0,
      'no-label-var': 0,
      'no-labels': 0,
      'no-lone-blocks': 0,
      'no-lonely-if': 0,
      'no-loop-func': 0,
      'no-mixed-requires': 0,
      'no-mixed-spaces-and-tabs': 2,
      'linebreak-style': 0,
      'no-multi-spaces': 0,
      'no-multi-str': 0,
      'no-multiple-empty-lines': 0,
      'no-native-reassign': 0,
      'no-negated-condition': 0,
      'no-negated-in-lhs': 2,
      'no-nested-ternary': 0,
      'no-new': 0,
      'no-new-func': 0,
      'no-new-object': 0,
      'no-new-require': 0,
      'no-new-symbol': 2,
      'no-new-wrappers': 0,
      'no-obj-calls': 2,
      'no-octal': 2,
      'no-octal-escape': 0,
      'no-param-reassign': 0,
      'no-path-concat': 0,
      'no-plusplus': 0,
      'no-process-env': 0,
      'no-process-exit': 0,
      'no-proto': 0,
      'no-redeclare': 2,
      'no-regex-spaces': 2,
      'no-restricted-imports': 0,
      'no-restricted-modules': 0,
      'no-restricted-syntax': 0,
      'no-return-assign': 0,
      'no-script-url': 0,
      'no-self-assign': 2,
      'no-self-compare': 0,
      'no-sequences': 0,
      'no-shadow': 0,
      'no-shadow-restricted-names': 0,
      'no-whitespace-before-property': 0,
      'no-spaced-func': 0,
      'no-sparse-arrays': 2,
      'no-sync': 0,
      'no-ternary': 0,
      'no-trailing-spaces': 0,
      'no-this-before-super': 2,
      'no-throw-literal': 0,
      'no-undef': 0,
      'no-undef-init': 0,
      'no-undefined': 0,
      'no-unexpected-multiline': 2,
      'no-underscore-dangle': 0,
      'no-unmodified-loop-condition': 0,
      'no-unneeded-ternary': 0,
      'no-unreachable': 2,
      'no-unused-expressions': 0,
      'no-unused-labels': 2,
      'no-unused-vars': 0,
      'no-use-before-define': 0,
      'no-useless-call': 0,
      'no-useless-concat': 0,
      'no-useless-constructor': 0,
      'no-void': 0,
      'no-var': 0,
      'no-warning-comments': 0,
      'no-with': 0,
      'no-magic-numbers': 0,

      'array-bracket-spacing': 0,
      'array-callback-return': 0,
      'arrow-body-style': 0,
      'arrow-parens': 0,
      'arrow-spacing': 0,
      'accessor-pairs': 0,
      'block-scoped-var': 0,
      'block-spacing': 0,
      'brace-style': 0,
      'callback-return': 0,
      camelcase: 0,
      'comma-dangle': 2,
      'comma-spacing': 0,
      'comma-style': 0,
      complexity: [0, 11],
      'computed-property-spacing': 0,
      'consistent-return': 0,
      'consistent-this': 0,
      'constructor-super': 2,
      curly: 0,
      'default-case': 0,
      'dot-location': 0,
      'dot-notation': 0,
      'eol-last': 0,
      eqeqeq: 0,
      'func-names': 0,
      'func-style': 0,
      'generator-star-spacing': 0,
      'global-require': 0,
      'guard-for-in': 0,
      'handle-callback-err': 0,
      'id-length': 0,
      indent: 0,
      'init-declarations': 0,
      'jsx-quotes': 0,
      'key-spacing': 0,
      'keyword-spacing': 0,
      'lines-around-comment': 0,
      'max-depth': 0,
      'max-len': 0,
      'max-nested-callbacks': 0,
      'max-params': 0,
      'max-statements': 0,
      'new-cap': 0,
      'new-parens': 0,
      'newline-after-var': 0,
      'newline-per-chained-call': 0,
      'object-curly-spacing': [0, 'never'],
      'object-shorthand': 0,
      'one-var': 0,
      'one-var-declaration-per-line': 0,
      'operator-assignment': 0,
      'operator-linebreak': 0,
      'padded-blocks': 0,
      'prefer-arrow-callback': 0,
      'prefer-const': 0,
      'prefer-reflect': 0,
      'prefer-rest-params': 0,
      'prefer-spread': 0,
      'prefer-template': 0,
      'quote-props': 0,
      quotes: 0,
      radix: 0,
      'id-match': 0,
      'id-blacklist': 0,
      'require-jsdoc': 0,
      'require-yield': 0,
      semi: 0,
      'semi-spacing': 0,
      'sort-vars': 0,
      'sort-imports': 0,
      'space-before-blocks': 0,
      'space-before-function-paren': 0,
      'space-in-parens': 0,
      'space-infix-ops': 0,
      'space-unary-ops': 0,
      'spaced-comment': 0,
      strict: 0,
      'template-curly-spacing': 0,
      'use-isnan': 2,
      'valid-jsdoc': 0,
      'valid-typeof': 2,
      'vars-on-top': 0,
      'wrap-iife': 0,
      'wrap-regex': 0,
      'yield-star-spacing': 0,
      yoda: 0,
    },
  };

  function getPos(error, from) {
    let line = error.line - 1;
    let ch = from ? error.column : error.column + 1;
    if (error.node && error.node.loc) {
      line = from ? error.node.loc.start.line - 1 : error.node.loc.end.line - 1;
      ch = from ? error.node.loc.start.column : error.node.loc.end.column;
    }
    return CodeMirror.Pos(line, ch);
  }

  function getSeverity(error) {
    switch (error.severity) {
      case 1:
        return 'warning';
      case 2:
        return 'error';
      default:
        return 'error';
    }
  }

  function validator(text) {
    const result = [];
    const config = defaultConfig;
    const errors = eslint.verify(text, config);
    for (let i = 0; i < errors.length; i += 1) {
      const error = errors[i];
      result.push({ message: error.message,
        severity: getSeverity(error),
        from: getPos(error, true),
        to: getPos(error, false),
      });
    }
    return result;
  }

  CodeMirror.registerHelper('lint', 'javascript', validator);
};