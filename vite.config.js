import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.js"),
            name: "FlashConsole",
            fileName: (format) => `flash-console.${format}.js`
        }
    }
})