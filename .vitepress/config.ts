import { defineConfig } from "vitepress";
import sidebar from "../docs/typedoc-sidebar.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "react-query-firebase",
    description: "This module offers react hooks to work with Firebase",
    srcDir: "./docs",
    themeConfig: {
        nav: [{ text: "Home", link: "/" }],

        sidebar: sidebar,

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }]
    }
});
