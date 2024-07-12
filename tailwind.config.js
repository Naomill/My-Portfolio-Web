/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryPurple: "#8259F9",
        secLightPurple: "#BFB4FE",
        thirdLightPurple: "#4B3E95",
        thirdDarkPurple: "#403877",
        GradientLightPurple: "#A690FC",
        GradientDarktPurple: "#461B97",
        whiteTiltle: "#FFFFFF",
        primaryGray: "#9F9F9F",
        background: "#050516",
      }
    },
  },
  plugins: [],
}
