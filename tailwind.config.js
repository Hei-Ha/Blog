import { nextui } from '@nextui-org/react'
import Typography from '@tailwindcss/typography';
import TailwindHighlight from 'tailwind-highlightjs';

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        hljs: {
            theme: 'github-dark',
        },
        screens: {
            'sm': { 'max': '767px' },
            // => @media (min-width: 640px and max-width: 767px) { ... }
            
            'md': { 'min': '768px', 'max': '1279px' },
            // => @media (min-width: 768px and max-width: 1023px) { ... }
            
            'lg': { 'min': '1280px' },
        },
        extend: {
            typography: ( { theme } ) => ( {
                DEFAULT: {
                    css: {
                        'invert-color': 'rgba(255, 255, 255, 0.9)',
                        '--tw-prose-invert-headings': '#eaeaea',
                        '--tw-prose-invert-bold': '#e8e8e8',
                    }
                }
            } ),
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
                '#e7e7e7': '#e7e7e7',
                '#4b4b4b': '#4b4b4b',
            },
            height: {
                '32px': '32px',
                '48px': '48px',
                '64px': '64px',
                '500px': '500px',
                '400px': '400px',
                '300px': '300px',
                '200px': '200px',
                '1500px': '1500px',
            },
            minWidth: {
                '375px': '375px',
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
        nextui( {
            themes: {
                light: {
                    colors: {
                        background: '#fff',
                        foreground: '#000',
                        primary: {
                            foreground: "#fff",
                            DEFAULT: "#0052d9",
                        }
                    }
                },
                dark: {
                    colors: {
                        background: '#242424',
                        foreground: '#9c9c9c',
                        primary: {
                            foreground: "#fff",
                            DEFAULT: "#006FEE",
                        }
                    }
                },
            }
        } ),
        Typography(),
        TailwindHighlight,
    
    ],
    safelist: [
        {
            pattern: /hljs+/,
        },
    ],
}