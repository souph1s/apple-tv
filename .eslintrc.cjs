const config = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-wrap-multilines": ["error", { "declaration": "parens-new-line", "assignment": "parens-new-line" }],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "max-len": ["error", { "code": 80, "ignoreUrls": true }],
  },
};

module.exports = config;
