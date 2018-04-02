module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    env: {
        es6: true,
        node: true,
        browser: true
    },
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs', {allowSingleLine: false}],
        'camelcase': 'error',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ["error", { "before": false, "after": true }],
        'comma-style': ['error', 'last'],
        'consistent-this': ['error', '_this'],
        'curly': 'error',
        'eol-last': 'error',
        'eqeqeq': ['error', 'always'],
        'indent': ['error', 4, {SwitchCase: 1}],
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'new-cap': ['error', {capIsNew: false}],
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-console': 'off',
        'no-extend-native': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1, maxBOF: 0}],
        'no-new': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used' }],
        'no-use-before-define': ['error', {functions: false, classes: true }],
        'no-with': 'error',
        'object-curly-spacing': ['error', 'never'],
        'padded-blocks': ['error', 'never'],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'semi': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'wrap-iife': ['error', 'any'],
        'yoda': 'error'
    },
    'parserOptions': {
        sourceType: 'module',
        ecmaVersion: 8
    }
}
