/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        screens: {
            'smScreens': { 'min': '0', 'max': '639px' },
            'lgScreens': { 'min': '640px' }
        },
        extend: {
            colors: {
                '#CCCCCC': '#CCCCCC',
                '#8294C4': '#8294C4'
            }
        },
    },
    plugins: [nextui()],
    darkMode: "class"
}

