/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
theme: {
  extend: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
},
extend: {
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
  animation: {
    fadeIn: "fadeIn 1s ease-out forwards",
  },
},
};
// export const plugins = [];




// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }