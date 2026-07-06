/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 40px rgba(56, 189, 248, 0.18)',
        glass: '0 24px 80px rgba(4, 23, 55, 0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(56,189,248,0.2), transparent 35%), radial-gradient(circle at bottom right, rgba(168,85,247,0.18), transparent 25%)',
      },
    },
  },
  plugins: [],
}
