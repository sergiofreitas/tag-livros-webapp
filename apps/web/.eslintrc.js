module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      'node': {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": 0,
    "react/prop-types": 1
  }
}
