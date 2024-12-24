/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mavi: "#4335A7",
        turkuaz: "#80C4E9",
        beyaz: "#FFF6E9",
        turuncu: "#FF7F3E",
      },
    },
  },
  plugins: [],
};
