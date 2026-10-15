/** Tailwind config for synklok.app. Rebuild styles.css after editing index.html:
 *    npx tailwindcss@3.4.19 -i src/input.css -o styles.css --minify
 */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
};
