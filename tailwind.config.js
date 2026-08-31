/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E2A4A',
          light: '#2C3E6B',
          dark: '#121B32',
          subtle: '#E8ECF4',
          muted: '#52628B',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          secondary: '#F5F5F7',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        primary: {
          DEFAULT: '#1E2A4A',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F1F5F9',
          foreground: '#1E2A4A',
        },
        muted: {
          DEFAULT: '#F8FAFC',
          foreground: '#64748B',
        },
        accent: {
          DEFAULT: '#1E2A4A',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'clean-md': '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
      },
    },
  },
  plugins: [],
}
