module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'off',
    'semi': [2, 'never'],
    'import/no-dynamic-require': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': [0, 'error', 'windows'],
  },
};
