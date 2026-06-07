import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        albania: {
          black: "#0B0B0B",
          gold: "#C9A45C",
          red: "#C8102E",
          graphite: "#141414",
          cream: "#F7F0E3"
        }
      },
      boxShadow: {
        premium: "0 24px 80px rgba(200, 16, 46, 0.22)",
        gold: "0 20px 60px rgba(201, 164, 92, 0.18)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 20% 20%, rgba(200, 16, 46, 0.28), transparent 34%), radial-gradient(circle at 80% 10%, rgba(201, 164, 92, 0.20), transparent 30%), linear-gradient(180deg, rgba(11,11,11,0.2), #0B0B0B 92%)"
      }
    }
  },
  plugins: []
};

export default config;
