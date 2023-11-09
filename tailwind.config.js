/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '0px 4px 8px 0px rgba(9, 13, 20, 0.16), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 1px 2px 0px rgba(9, 13, 20, 0.24)',
      }
      ,
      fontFamily: {
        sans: ['var(--font-montreal)']
      }
    },
  },
  plugins: [],
}
