import module from "module"

module.exports = {
  // Specify the environments where your code is designed to run
  env: {
    browser: true, // Browser global variables
    es2020: true, // Enables all ECMAScript 2020 globals and sets the 'parserOptions.ecmaVersion' option to 11
  },
  // Extend the base configurations
  extends: [
    "eslint:recommended", // The recommended ESLint rules
    "plugin:@typescript-eslint/recommended", // Recommended rules from '@typescript-eslint/eslint-plugin'
    "plugin:react-hooks/recommended", // Recommended rules for React hooks
    "plugin:prettier/recommended", // Enables 'eslint-plugin-prettier' and 'eslint-config-prettier'
  ],
  // Specify the parser to be used
  parser: "@typescript-eslint/parser",
  // Specify the parser options
  parserOptions: {
    ecmaVersion: "latest", // Latest ECMAScript version
    sourceType: "module", // Code is in ECMAScript modules
  },
  // Specify the plugins to be used
  plugins: ["react-refresh", "eslint-plugin-react-hooks"],
  // Specify the rules to be used
  rules: {
    "react-refresh/only-export-components": "warn", // Warn if non-component is exported from a file that has a React component
    "react-hooks/rules-of-hooks": "error", // Error if a rule of Hooks is violated
    "react-hooks/exhaustive-deps": "warn", // Warn if effect dependencies are specified incorrectly
  },
}
