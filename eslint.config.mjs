import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js recommended config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ custom rules & overrides
  {
    rules: {
      "react/no-unescaped-entities": "off", // disable quote/apostrophe lint errors
    },
  },
];

export default eslintConfig;
