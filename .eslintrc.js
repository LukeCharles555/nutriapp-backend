module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 8,
  },
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier'],
};
