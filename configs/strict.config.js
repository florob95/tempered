import eslint from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import sonarjs from 'eslint-plugin-sonarjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  perfectionist.configs['recommended-natural'],
  sonarjs.configs.recommended,
  {
    ignores: ['node_modules', 'build'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
        },
      ],
    },
  },
)
