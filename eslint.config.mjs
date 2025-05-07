// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Obtain current file and directory paths for compatibility
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    // Base Next.js config
    ...compat.extends("next/core-web-vitals", "next/typescript"),

    // Custom rules for TypeScript files
    {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true,
                },
            ],
            "@typescript-eslint/no-explicit-any": [
                "error",
                {
                    ignoreRestArgs: true,
                },
            ],
            "@typescript-eslint/no-require-imports": "off",
        },
    },

    // Disable linting in Prisma generated files
    {
        files: ["lib/generated/prisma/**/*.{js,ts}"],
        rules: {
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-this-alias": "off",
        },
    },

    {
        files: ["app/[locale]/layout.tsx"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off", // Allow usage of `any`
            "@typescript-eslint/no-unused-vars": "off", // Ignore unused variables
            "@typescript-eslint/explicit-module-boundary-types": "off", // Ignore explicit return types
            "@typescript-eslint/explicit-function-return-type": "off", // Ignore explicit function return types
            "@typescript-eslint/no-empty-function": "off", // Ignore empty function checks
        },
    },

    // Optional: ignore Prisma and node_modules
    {
        ignores: ["lib/generated/prisma/**/*", "node_modules/**/*"],
    },
];