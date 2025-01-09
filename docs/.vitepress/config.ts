import { defineConfig } from "vitepress";
import sidebar from "../typedoc-sidebar.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "react-query-firebase",
    description: "This module offers react hooks to work with Firebase",
    srcDir: "./",
    base: "/react-query-firebase",
    themeConfig: {
        nav: [{ text: "Home", link: "/" }],

        sidebar: sidebar,

        socialLinks: [{ icon: "github", link: "https://github.com/vpishuk/react-query-firebase/" }],
        footer: { message: "Released under the MIT License.", copyright: "Copyright © 2025-present Viktor Pishuk" }
    }
});
