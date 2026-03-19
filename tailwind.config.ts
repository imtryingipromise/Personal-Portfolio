import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#F5F5F2',
                primary: {
                    DEFAULT: '#1F7A4F',
                    hover: '#176A44',
                },
                text: {
                    primary: '#111111',
                    muted: '#4B4B4B',
                },
                border: '#DADADA',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['"IBM Plex Mono"', 'monospace'],
            },
            spacing: {
                '2': '8px',
                '4': '16px',
                '6': '24px',
                '8': '32px',
                '12': '48px',
                '16': '64px',
                '24': '96px',
            },
            maxWidth: {
                'container': '1200px',
            },
            borderRadius: {
                DEFAULT: '2px',
            },
            borderWidth: {
                DEFAULT: '1px',
            },
            boxShadow: {
                none: 'none',
            },
        },
    },
    plugins: [],
}

export default config;
