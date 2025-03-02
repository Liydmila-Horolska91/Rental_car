module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'eqeqeq': 'error',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};