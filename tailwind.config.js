/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";
import typography from '@tailwindcss/typography';

export default {
    content: {
        relative: true,
        files: [
            "./src/**/*.{html,js,jsx,ts,tsx}",
            "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx,ts,tsx}",
        ],
    },
    theme: {
        screens: {
            'smScreens': {'min': '0', 'max': '639px'},
            'lgScreens': {'min': '640px'}
        },
        extend: {
            maxWidth: {
                '8xl': '1500px',
            },
            colors: {
                '#CCCCCC': '#CCCCCC',
                '#8294C4': '#8294C4',
                '#f0f0f0': '#f0f0f0',
                '#fbfbfb': '#fbfbfb',
                '#333333': '#333333',
                '#a0a0a0': '#a0a0a0',
                '#0E21A0': '#0E21A0',
                '#CAEDFF': '#CAEDFF',
            }
        },
    },
    darkMode: "class",
    plugins: [
        typography(),
        nextui({
            themes: {
                light: {
                    colors: {},
                },
                dark: {
                    colors: {},
                },
            },
        })
    ],
}
