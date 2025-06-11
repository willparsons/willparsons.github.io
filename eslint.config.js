import js from "@eslint/js";
import solid from "eslint-plugin-solid/configs/typescript";
import * as tsParser from "@typescript-eslint/parser";
import globals from "globals";

import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(globalIgnores(["dist/"]), [
    js.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        ...solid,
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                project: "tsconfig.json",
            },
        },
    },
]);
