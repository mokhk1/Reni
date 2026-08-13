/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f7f3ec',
          300: '#efe7d6',
          400: '#e0d3bb',
        },
        blush: {
          50: '#fff5f7',
          100: '#ffe9ee',
          200: '#ffd3dc',
          300: '#ffb3c1',
          400: '#ff8aa0',
          500: '#f06580',
          600: '#d94a68',
        },
        lavender: {
          50: '#f7f5ff',
          100: '#efe9ff',
          200: '#e3d7ff',
          300: '#cdb6ff',
          400: '#b18fff',
          500: '#9a6fff',
          600: '#7d52e6',
        },
        matcha: {
          50: '#f4f8ec',
          100: '#e8f1d4',
          200: '#d3e6ad',
          300: '#b5d67e',
          400: '#97c154',
          500: '#7ba83a',
          600: '#5f8a28',
          700: '#4a6b1f',
        },
        gold: {
          300: '#f0d98c',
          400: '#e6c460',
          500: '#d4ab3c',
          600: '#b8902a',
        },
        ink: {
          700: '#4a4038',
          800: '#38302a',
          900: '#241f1b',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Quicksand', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(120, 100, 90, 0.25)',
        glow: '0 0 40px -5px rgba(255, 180, 200, 0.55)',
        matcha: '0 0 45px -5px rgba(151, 193, 84, 0.55)',
        lavender: '0 0 45px -5px rgba(177, 143, 255, 0.5)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(3deg)' },
        },
        sparkle: {
          '0%,100%': { opacity: '0', transform: 'scale(0.6)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'lid-open': {
          from: { transform: 'translateY(0) rotate(0deg)' },
          to: { transform: 'translateY(-60px) rotate(-18deg)' },
        },
        'shake-x': {
          '0%,100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-6px)' },
          '80%': { transform: 'translateX(6px)' },
        },
        'pulse-soft': {
          '0%,100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.9' },
        },
        'drift-leaf': {
          '0%': { transform: 'translateY(-10%) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'translateY(110vh) translateX(40px) rotate(180deg)', opacity: '0' },
        },
        'glow-pulse': {
          '0%,100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' },
        },
        twinkle: {
          '0%,100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        'rise': {
          from: { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        sparkle: 'sparkle 2.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'lid-open': 'lid-open 0.9s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'shake-x': 'shake-x 0.5s ease',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        'drift-leaf': 'drift-leaf 12s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        rise: 'rise 0.8s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
