/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'fontFamily':['Khand-Bold','BespokeStencil-Variable','BespokeStencil-Light','BespokeStencil-Regular','BespokeStencil-Medium','BespokeStencil-Bold','BespokeStencil-BoldItalic','BespokeStencil-Extrabold','BespokeStencil-ExtraboldItalic','BespokeStencil-Light']
    },
  },
  plugins: [],
}

