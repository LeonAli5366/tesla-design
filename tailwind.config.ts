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
        image1: "url('https://i.postimg.cc/fLBbk2JY/img4.avif')",
        image2: "url('https://i.postimg.cc/Vk7q1jtK/img2.avif')",
        image3: "url('https://i.postimg.cc/VvcGMjDj/img3.avif')",
        image4: "url('https://i.postimg.cc/hjCWWN5Q/img4.avif')",
      },
    },
  },
  plugins: [],
} satisfies Config;
