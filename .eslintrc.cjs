const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["node_modules", ".next", "generated", "apollo.config.js"],
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "es5",
        tabWidth: 2,
        useTabs: false,
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-misused-promises": [
      "off",
      {
        checksVoidReturn: false,
        checksSpreads: false,
      },
    ],
    "@typescript-eslint/no-floating-promises": ["off"], // does not work shitty rule!!!
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};

module.exports = config;
