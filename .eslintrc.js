module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint', 'regexp'],
  extends: ['standard', 'prettier', 'plugin:regexp/recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    'multiline-ternary': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    semi: 'off',
    'no-unused-vars': 'off',
  },
}
