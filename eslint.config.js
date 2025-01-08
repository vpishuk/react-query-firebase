import { config } from "@laverve/eslint-utils";

export default [...config, { ignores: ["docs/", ".vitepress/dist", ".vitepress/cache"] }];
