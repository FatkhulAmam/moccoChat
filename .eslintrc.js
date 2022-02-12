module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js', '.native.js', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    es6: true,
    node: true,
    jquery: true,
  },
  extends: '@react-native-community',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      legacyDecorators: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
