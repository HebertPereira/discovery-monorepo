module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'eslint-plugin-import-helpers',
    '@typescript-eslint'
  ],
  rules: {
    'linebreak-style': 'off',
    'prefer-const': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^redux/', '/react/'],
          'module',
          ['/^Services/', '/^Providers/', '/^Utils/'],
          '/^Routes/',
          ['/^Components/', '/^Pages/', '/^Containers/'],
          ['/^pages/', '/^components/'],
          ['parent', 'sibling', 'index'],
          '/styled-components/',
          '/^Styles/',
          '/^.scss/'
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
};
