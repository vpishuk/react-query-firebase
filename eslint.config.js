import eslintJs from "@eslint/js";
import globals from "globals";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import eslintTs from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginCommentsRecommended from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import eslintPluginJest from "eslint-plugin-jest";
import importPlugin from "eslint-plugin-import";

export const config = eslintTs.config(
    {
        files: ["**/*.{ts,tsx}"],
        extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
        rules: {
            "import/order": [
                "error",
                { groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"] }
            ],
            "import/no-unresolved": "off",
            "import/no-named-as-default": "off"
        }
    },
    eslintPluginCommentsRecommended.recommended,
    eslintPluginReactHooks.configs.flat["recommended-latest"],

    eslintJs.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
        languageOptions: {
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
                ...globals.node,
                ...globals.es2025
            }
        }
    },
    ...eslintTs.configs.recommended.map((config) => ({
        ...config,
        files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"]
    })),
    // START: prettier
    {
        ...eslintPluginPrettierRecommended
    },
    // END: prettier
    // START: react
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
        ...reactPlugin.configs.flat.recommended,
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            ...reactPlugin.configs.flat.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react-hooks/immutability": "off",
            "react/require-default-props": 0,
            "react/function-component-definition": [
                2,
                { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }
            ]
        }
    },
    // END: react
    // START: jsonc
    ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
    {
        rules: {
            "jsonc/sort-keys": "error",
            "no-plusplus": 0
        }
    },
    {
        files: ["package.json", "package-lock.json"],
        rules: {
            "jsonc/sort-keys": "off"
        }
    },
    // END: jsonc
    // START: Jest
    {
        ...eslintPluginJest.configs["flat/recommended"],
        files: ["**/*.spec.ts", "**/*.spec.tsx", "**/*.spec.js", "**/*.spec.jsx"]
    },
    // END: Jest
    {
        ignores: [
            "dist/",
            "docs/.vitepress/cache/",
            "node_modules/",
            "package-lock.json",
            "**/*.snap",
            "**/*.svg",
            "**/*.png",
            "**/*.jpg",
            "**/*.jpeg",
            "**/*.css",
            "react-native/**/*.d.ts",
            "react-native/**/*.js",
            "web/**/*.d.ts",
            "web/**/*.js",
            "types/**/*.d.ts",
            "types/**/*.js"
        ]
    }
);

export default config;
