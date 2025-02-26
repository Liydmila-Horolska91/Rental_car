<<<<<<< HEAD
// import js from '@eslint/js';
// import globals from 'globals';
// import react from 'eslint-plugin-react';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';

// export default [
//     { ignores: ['dist'] },
//     {
//         files: ['**/*.{js,jsx}'],
//         languageOptions: {
//             ecmaVersion: 2020,
//             globals: globals.browser,
//             parserOptions: {
//                 ecmaVersion: 'latest',
//                 ecmaFeatures: { jsx: true },
//                 sourceType: 'module',
//             },
//         },
//         settings: { react: { version: '18.3' } }, // Перевірте версію React
//         plugins: {
//             react,
//             'react-hooks': reactHooks,
//             'react-refresh': reactRefresh,
//         },
//         rules: {
//             ...js.configs.recommended.rules,
//             ...react.configs.recommended.rules,
//             ...react.configs['jsx-runtime'].rules,
//             ...reactHooks.configs.recommended.rules,
//             'react/jsx-no-target-blank': 'warn', // Змініть на 'warn' або знайдіть альтернативу
//             'react-refresh/only-export-components': [
//                 'warn',
//                 { allowConstantExport: true },
//             ],
//             'no-unused-vars': 'warn', // Додайте правило no-unused-vars
//             'react/prop-types': 'warn', // Додайте правило react/prop-types (якщо використовуєте PropTypes)
//         },
//     },
// ];


import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
=======
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
>>>>>>> 58520f0ff8b17d85c9878418d36eb6c9ccd8d44d
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
<<<<<<< HEAD
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
=======
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
>>>>>>> 58520f0ff8b17d85c9878418d36eb6c9ccd8d44d
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
<<<<<<< HEAD
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": 0,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
=======
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
>>>>>>> 58520f0ff8b17d85c9878418d36eb6c9ccd8d44d
        { allowConstantExport: true },
      ],
    },
  },
<<<<<<< HEAD
];
=======
]
>>>>>>> 58520f0ff8b17d85c9878418d36eb6c9ccd8d44d
