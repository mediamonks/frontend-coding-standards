const typeScriptSettings = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/prefer-readonly': 'error',
    'camelcase': 'off',
  },
};

const reactSettings = {
  extends: ['plugin:react/recommended'],
  rules: {
    'react/button-has-type': 'error',
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-filename-extension': ['error', { "extensions": [".jsx", ".tsx"] }],
    'react/jsx-wrap-multilines': 'off',
    'react/no-array-index-key': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/void-dom-elements-no-children': 'error',

  },
};

module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['import', 'unicorn'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    require: true,
    process: true,
  },
  rules: {
    'default-case': 'error',
    'import/extensions': [
      'error',
      'always',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never', hbs: 'never', vue: 'never' },
    ],
    'import/no-unresolved': 'error',
    'import/order': ['error', { groups: ['external', 'builtin', ['sibling', 'parent']] }],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'max-lines': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-extra-boolean-cast': 'off',
    'no-restricted-properties': [
      'error',
      { object: 'document', property: 'querySelector' },
      { object: 'document', property: 'querySelectorAll' },
    ],
    'no-undef': 'error',
    'no-underscore-dangle': 'error',
    'react/static-property-placement': 'off',
    'unicorn/catch-error-name': 'error',
    'unicorn/custom-error-definition': 'off',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          ref: false,
          refs: false,
          prop: false,
          props: false,
          src: false,
          param: false,
          params: false,
          args: false,
        },
      },
    ],
    'unicorn/throw-new-error': 'error',
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      rules: {
        'prettier/prettier': ['off'],
      },
    },
    {
      files: ['*.ts'],
      ...typeScriptSettings,
    },
    {
      files: ['*.tsx'],
      ...typeScriptSettings,
      extends: [...typeScriptSettings.extends, ...reactSettings.extends],
      rules: {
        ...typeScriptSettings.rules,
        ...reactSettings.rules,
        'react/prop-types': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'variable',
            // Exception for FunctionComponents
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'enumMember',
            format: ['PascalCase'],
          },
        ],
      },
    },
    {
      files: ['*.jsx'],
      ...reactSettings,
    },
  ],
};
