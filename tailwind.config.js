/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths as needed for your project
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF',      // Custom color example
          secondary: '#F43F5E',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  