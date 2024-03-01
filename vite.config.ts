/// <reference types="vitest" />
// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    test: {},
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "type-mate",
            fileName: "type-mate",
        },
    },
    plugins: [dts()],
});
