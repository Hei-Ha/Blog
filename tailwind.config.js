/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            color: {
                '#CCCCCC': '#CCCCCC'
            }
        },
    },
    darkMode: "class",
    plugins: [
        nextui(),
    ],
}