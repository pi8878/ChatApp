
 /** @type {import('tailwindcss').Config} */
 import daisyui from "daisyui";


 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins:[require(daisyui)],
}

