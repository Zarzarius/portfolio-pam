import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Vendored WebGL fluid sim: @ts-nocheck + classes inside useEffect are intentional.
  {
    files: ["src/components/portfolio/Hero/SplashCursor.tsx"],
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "react-hooks/unsupported-syntax": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
