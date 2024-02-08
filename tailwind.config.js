import { nextui } from '@nextui-org/react'
import typography from '@tailwindcss/typography';

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        hljs: {
            theme: 'github-dark',
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        // maxWidth: '100%'
                    }
                }
            },
            // #d3e4fc
            colors: {
                '#CCCCCC': '#CCCCCC',
                '#FFFFFF': '#FFFFFF',
                '#000000': '#000000',
                '#f0f0f0': '#f0f0f0',
                '#3c3c43': '#3c3c43',
                'pink': 'pink',
                '#000000': '#000000',
                '#d3e5fc': '#d3e5fc',
                '#2263ef': '#2263ef',
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
                '280px': '280px',
                '300px': '300px',
                '400px': '400px',
                '500px': '500px',
                '1200px': '1200px',
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui(),
        typography(),
        require('tailwind-highlightjs'),
    ],
    safelist: [
        {
            pattern: /hljs+/,
        },
    ],
}