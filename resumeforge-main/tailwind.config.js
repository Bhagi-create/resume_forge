module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#1a365d", // slate-800
          50: "#f0f4f8", // slate-50
          100: "#d9e2ec", // slate-100
          200: "#bcccdc", // slate-200
          300: "#9fb3c8", // slate-300
          400: "#829ab1", // slate-400
          500: "#627d98", // slate-500
          600: "#486581", // slate-600
          700: "#334e68", // slate-700
          800: "#243b53", // slate-800
          900: "#1a365d", // slate-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#319795", // teal-600
          50: "#e6fffa", // teal-50
          100: "#b2f5ea", // teal-100
          200: "#81e6d9", // teal-200
          300: "#4fd1c7", // teal-300
          400: "#38b2ac", // teal-400
          500: "#319795", // teal-500
          600: "#2c7a7b", // teal-600
          700: "#285e61", // teal-700
          800: "#234e52", // teal-800
          900: "#1d4044", // teal-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          200: "#9ae6b4", // green-200
          300: "#68d391", // green-300
          400: "#48bb78", // green-400
          500: "#38a169", // green-500
          600: "#2f855a", // green-600
          700: "#276749", // green-700
          800: "#22543d", // green-800
          900: "#1c4532", // green-900
        },
        // Background Colors
        background: "#f7fafc", // gray-50
        surface: "#edf2f7", // gray-100
        // Text Colors
        text: {
          primary: "#2d3748", // gray-700
          secondary: "#718096", // gray-500
        },
        // Status Colors
        success: "#38a169", // green-600
        warning: "#d69e2e", // yellow-600
        error: "#e53e3e", // red-600
        // Gray Scale
        gray: {
          50: "#f7fafc", // gray-50
          100: "#edf2f7", // gray-100
          200: "#e2e8f0", // gray-200
          300: "#cbd5e0", // gray-300
          400: "#a0aec0", // gray-400
          500: "#718096", // gray-500
          600: "#4a5568", // gray-600
          700: "#2d3748", // gray-700
          800: "#1a202c", // gray-800
          900: "#171923", // gray-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'elevation': '0 4px 12px rgba(26, 54, 93, 0.15)',
        'elevation-lg': '0 8px 24px rgba(26, 54, 93, 0.15)',
        'elevation-xl': '0 12px 32px rgba(26, 54, 93, 0.15)',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}