import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-primary)"],
        mono: ["var(--font-primary)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "rgb(253, 249, 240)",
            foreground: "rgb(25, 38, 85)",
            'Pindigo': 'rgb(122, 120, 255)',
            'Oamber': 'rgb(255, 109, 56)',
            'cream': 'rgb(245, 243, 240)',
            'text-gray': 'rgb(90, 108, 125)',
            'text-dark': 'rgb(44, 62, 80)'
          },
        },
        dark: {
          colors: {
            background: "rgb(10, 10, 10)", 
            foreground: "rgb(253, 249, 240)",
            'Pindigo': 'rgb(0,145,255)',
            'Oamber': 'rgba(214, 243, 31, .9)',
            'cream': 'rgb(245, 243, 240)',
            'text-gray': '#5a6c7d',
            'text-dark': '#2c3e50'
          },
        },
      },
    })
  ],
}

module.exports = config;