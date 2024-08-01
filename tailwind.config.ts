import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      transparent: "transparent",
      current:"currentColor",
      white:"#ffffff",
      color:"#000000",
      lightgrey:"#444245",
      grey:"rgba(0, 0, 0, 0.55)",
      lightpink:"#F8F7F7",
      darkpink:"#FEEDEA",
      lightblack:"#333333",
      textbl:"#363636",
      footerlinks:"rgba(54, 54, 54, 0.9)",
      bordertop:"rgba(105, 120, 131, 0.16)",
      darkgrey:"rgba(44, 9, 11, 0.8)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
