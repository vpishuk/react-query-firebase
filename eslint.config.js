import { config } from "@laverve/eslint-utils";

import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [...config, includeIgnoreFile(gitignorePath), { ignores: ["docs/"] }];
