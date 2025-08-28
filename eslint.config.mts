import { defineConfig } from "eslint/config";

export default defineConfig({
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "react/no-unescaped-entities": "off", // optional, stop build-blocking
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});


