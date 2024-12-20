import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        image1: "url('/images/solar-panels-desktop.jpg')",
        image2:
          "url('https://i.postimg.cc/XN13RTRC/Blue-Tech-1-5cfaae031dcfb.avif')",
        image3:
          "url('https://i.postimg.cc/tJ5pHSwn/360-F-830647653-OVhah-RNCu1-U7-WZa-Gwn-W5n-Molsm7-AVk-Md.webp')",
        solarPanels2: "url('/images/solar-panels-sec-2.jpg')",
        image5: "url('/images/lights-stay-on-desktop.webp')",
        image6: "url('/images/powering-on-desktop.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
