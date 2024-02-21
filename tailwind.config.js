/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          '50': '#F8FAFC',
          '100': '#F1F5F9',
          '200': '#E2E8F0',
          '300': '#CBD5E1',
          '400': '#94A4B8',
          '500': '#64748B',
          '600': '#475569',
          '700': '#334155',
          '800': '#1E293B',
          '900': '#0F172A',
        },
        baseColor: {
          '50': '#FEFEFE',
          '300': '#FCFCFC',
          '500': '#FAFAFA',
          '700': '#DCDCDC',
          '900': '#BFBFBF',
        },
        primary: {
          '50': '#B89E9E',
          '300': '#8E6F6F',
          '500': '#563131',
          '700': '#341D1D',
          '900': '#1A0F0F',
        },
        secondary: {
          '50': '#A29797',
          '300': '#756A6A',
          '500': '#3A2F2F',
          '700': '#2E2626',
          '900': '#171313',
        },
        success: {
          '50': '#D2EFC7',
          '300': '#B1E4A0',
          '500': '#91D978',
          '700': '#71CD50',
          '900': '#56B734',
        },
        warning: {
          '50': '#FFF7E6',
          '300': '#FFE7B2',
          '500': '#FFD680',
          '700': '#FFC64D',
          '900': '#FFB61A',
        },
        error: {
          '50': '#F2BFBF',
          '300': '#E99595',
          '500': '#E16B6B',
          '700': '#D84040',
          '900': '#BF2727',
        },
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [require("daisyui"),require('flowbite/plugin')],
}

