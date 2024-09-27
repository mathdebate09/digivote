import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettierPlugin,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: ["**/*.{js,jsx}"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...prettier.rules,
      ...tailwind.configs.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prefer-const": "error",
      "prettier/prettier": ["warn", {}],
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react/self-closing-comp": ["warn", { component: true, html: true }],
      "tailwindcss/no-custom-classname": "warn",
      "tailwindcss/classnames-order": "warn",
    },
    settings: {
      tailwindcss: { callees: ["cn", "cva"] },
      react: { version: "detect" },
    },
    ignores: [
      "dist",
      "node_modules",
      ".cache",
      "public",
      "coverage",
      "eslint.config.js",
      "*.esm.js",
    ],
  },
];
