/* eslint-disable */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  ignorePatterns: ['i18n'],
  globals: {
    page: true,
  },

  rules: {
    // your rules
    '@typescript-eslint/consistent-type-imports': 0,
    '@typescript-eslint/no-unused-expressions': 0,
  },
};
