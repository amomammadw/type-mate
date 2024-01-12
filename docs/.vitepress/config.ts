import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "TypeMate",
    description: "a lightweight and typesafe javascript utility functions",
    base: "/type-mate/",
    themeConfig: {
        logo: "/logo.png",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Get Started", link: "/get-started" },
            { text: "Examples", link: "/markdown-examples" },
        ],
        search: {
            provider: "local",
        },
        sidebar: [
            {
                text: "Introduction",
                collapsed: false,
                items: [
                    { text: "What is TypeMate", link: "/introduction" },
                    { text: "Get Started", link: "/get-started" },
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        footer: { copyright: "amomammadw", message: "Made with ❤️" },

        socialLinks: [
            { icon: "github", link: "https://github.com/amomammadw/type-mate" },
            { icon: "linkedin", link: "https://www.linkedin.com/in/mohammad-ranjbar-15408518b/" },
        ],
    },
});
