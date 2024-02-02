/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                '#CCCCCC': '#CCCCCC',
                '#FFFFFF': '#FFFFFF',
                '#000000': '#000000',
                '#f0f0f0': '#f0f0f0',
                '#3c3c43': '#3c3c43',
            },
            height: {
                '50px': '50px',
                '48px': '48px',
                '500px': '500px',
                '300px': '300px',
                '200px': '200px',
            }
        },
    },
    darkMode: "class",
    plugins: [
        nextui(),
    ],
}