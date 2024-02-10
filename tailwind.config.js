import { nextui } from '@nextui-org/react'
import typography from '@tailwindcss/typography';
import TailwindHighlight from 'tailwind-highlightjs';
// import darkStyle from './src/style/theme/dark.scss'
// import lightStyle from './src/style/theme/light.scss'



export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        hljs: {
            theme: 'github-dark',
        },
        extend: {
            colors: {
                '#CCCCCC': '#CCCCCC',
                '#FFFFFF': '#FFFFFF',
                '#f0f0f0': '#f0f0f0',
                '#3c3c43': '#3c3c43',
                'pink': 'pink',
                '#000000': '#000000',
                '#d3e5fc': '#d3e5fc',
                '#2263ef': '#2263ef',
                '#70717a': '#70717a',
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
        nextui({
            // addCommonColors: true,
            themes: {
                dark: {
                    colors: {
                        background: '#242424',
                        foreground: '#9c9c9c',
                        primary: {
                            foreground: "#FFFFFF",
                            DEFAULT: "#006FEE",
                        }
                    }
                },
                light: {
                    colors: {
                        background: '#fff',
                        foreground: '#666',
                        primary: {
                            foreground: "#fff",
                            DEFAULT: "#0052d9",
                        }
                    }
                }
            }
        }),
        typography(),
        TailwindHighlight,
    ],
    safelist: [
        {
            pattern: /hljs+/,
        },
    ],
}