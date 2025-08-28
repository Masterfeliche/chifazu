// eslint.config.mts
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: process.cwd() });

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // disable blocking build
      "@typescript-eslint/no-unused-vars": "warn", // just warning
    },
  },
];
