module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
