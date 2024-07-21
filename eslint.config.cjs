const globals = require('globals')
const js = require('@eslint/js')

const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

module.exports = [
  {
    ignores: [
      '**/.DS_Store',
      '**/node_modules',
      'build',
      '.svelte-kit',
      'package',
      '**/.env',
      '**/.env.*',
      '!**/.env.example',
      '**/pnpm-lock.yaml',
      '**/package-lock.json',
      '**/yarn.lock'
    ]
  },
  ...compat.extends('eslint:recommended', 'plugin:svelte/recommended', 'prettier'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      ecmaVersion: 2020,
      sourceType: 'module',

      parserOptions: {
        extraFileExtensions: ['.svelte']
      }
    },

    rules: {
      semi: ['error', 'never'],
      'svelte/no-at-html-tags': 'off'
    }
  }
]
