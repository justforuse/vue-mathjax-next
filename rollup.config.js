import vue from "rollup-plugin-vue";
import {
    terser
} from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

module.exports = [
    {
        // entrance
        input: "./src/index.js",
        // Export
        output: [{
            file: "lib/index.js",
            // How to configure packaging modularization es: ESM cjs:CommonJS
            format: "cjs",
        }, ],
        // plug-in unit
        plugins: [
            vue({
                // Insert the style in the single file component into the style tag in html
                css: true,
                // Convert component to render function
                compileTemplate: true,
            }),
            // Code compression
            terser(),
            postcss(),
        ],
    }
];
