/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        olive: '#6B705C',
        sand: '#DDB892',
        brown: '#A68A64',
        terracotta: '#CB997E',
        dark: '#1f1f1f'
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)']
      },
      backgroundImage: {
        'kurdish-pattern': "url('/images/kurdish-pattern.png')"
      }
    }
  },
  plugins: [],
}
