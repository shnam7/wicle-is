import {type FlatXoConfig} from 'xo'

const xoConfig: FlatXoConfig = [
    {
        prettier: true,
        space: 4,
        rules: {
            'capitalized-comments': 'off',
            'unicorn/prevent-abbreviations': 'off',
            'function-paren-newline': 'off',
            'implicit-arrow-linebreak': 'off',
            'arrow-body-style': ['error', 'as-needed'],
            '@typescript-eslint/no-empty-function': 'off',
            // The following rules crash with TypeScript 6.0 due to @typescript-eslint@8.58.2
            // not yet supporting TypeScript 6.0 internal type representations.
            // Re-enable once xo ships a compatible @typescript-eslint version.
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-type-assertion': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/no-unsafe-enum-comparison': 'off',
            '@typescript-eslint/return-await': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/await-thenable': 'off',
            '@typescript-eslint/no-confusing-void-expression': 'off',
            '@typescript-eslint/strict-void-return': 'off',
            'require-unicode-regexp': ['error', {requireFlag: 'u'}],
        },
    },
]

export default xoConfig
