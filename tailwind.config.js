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
                'pink': 'pink',
                '#000000': '#000000',
            },
            height: {
                '50px': '50px',
                '48px': '48px',
                '64px': '64px',
                '500px': '500px',
                '300px': '300px',
                '200px': '200px',
                '1500px': '1500px',
            },
            width: {
                '300px': '300px',
                '400px': '400px',
                '500px': '500px',
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui(),
    ],
}