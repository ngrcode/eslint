module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  plugins: ['awwfrontend-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'awwfrontend-eslint/no-old-method': 2,
    'awwfrontend-eslint/no-persian-jsx': 2,
    'awwfrontend-eslint/no-persian-var': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
