/** @type {import('tailwindcss').Config} */
        export default {
          content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
            extend: {
              colors: {
                'primary': '#000000',
                'accent': {
                  'neon-yellow': '#F3F315',
                  'neon-orange': '#FF7A00',
                  'cyan': '#00FFFF',
                },
                'light-gray': '#A3A3A3',
              },
              fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
              },
            },
          },
          plugins: [],
        }
