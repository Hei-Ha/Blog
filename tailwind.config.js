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
            'mdScreens': {'min': '640px', 'max': '1200px'},
            'lgScreens': {'min': '1201px' },
        },
        
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        // code: {
                        //     fontWeight: '600',
                        //     '&:hover': {
                        //         color: '#3182ce',
                        //     },
                        // },
                    },
                },
            },
            maxWidth: {
                '8xl': '1500px',
                '1200px': '1200px',
                '370px': '370px',
            },
            minWidth: {
                '500px': '500px',
                '300px': '300px',
                '800px': '800px',
            },
            width: {
            
            },
            height: {
                '500px': '500px',
                '400px': '400px',
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
                '#c4c5c6': '#c4c5c6',
                '#f6f6f7': '#f6f6f7',
                '#ffffff': '#ffffff',
                '#707077': '#707077',
                '#3c3c43': '#3c3c43',
                '#3b3c43': '#3b3c43',
                '#d4d4d9': '#d4d4d9',
                '#F79327': '#F79327',
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
