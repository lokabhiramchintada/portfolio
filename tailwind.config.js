/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F3F4F6', // softer off-white
          dark: '#0A0A0F',
        },
        surface: {
          DEFAULT: '#E2E6EA', // slightly darker, less bright
          dark: '#121218',
        },
        'surface-light': {
          DEFAULT: '#E9ECEF', // less bright
          dark: '#1E1E26',
        },
        primary: {
          DEFAULT: '#00FFDD',
          hover: '#00E6C5',
        },
        secondary: {
          DEFAULT: '#FF2CDF',
          hover: '#E61AC7',
        },
        accent: {
          DEFAULT: '#0099FF', // blue
          hover: '#0077CC',   // darker blue
        },
        success: {
          DEFAULT: '#00FF9D',
          hover: '#00E68D',
        },
        warning: {
          DEFAULT: '#FFD600',
          hover: '#E6C100',
        },
        error: {
          DEFAULT: '#FF4B4B',
          hover: '#E62E2E',
        },
        neutral: {
          100: '#E2E6EA', // lighter gray for backgrounds
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#4B5563', // darker for text
          500: '#374151', // darker for text
          600: '#1F2937',
          700: '#111827',
          800: '#0A0A0F',
          900: '#030712',
          950: '#000000',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          }
        }
      },
      boxShadow: {
        neon: '0 0 5px theme(colors.primary.DEFAULT), 0 0 20px theme(colors.primary.DEFAULT)',
        'neon-secondary': '0 0 5px theme(colors.secondary.DEFAULT), 0 0 20px theme(colors.secondary.DEFAULT)',
        'neon-accent': '0 0 5px theme(colors.accent.DEFAULT), 0 0 20px theme(colors.accent.DEFAULT)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};