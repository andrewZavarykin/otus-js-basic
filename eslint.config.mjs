import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest"

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    ignores: ["**/*.test.js"],
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
  },
  {
    files: ['**/*.test.js'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
]);
