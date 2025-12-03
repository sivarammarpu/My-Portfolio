import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "sivin-bg": "#050816",
        "sivin-card": "#0f172a",
        "sivin-accent": "#38bdf8",
        "sivin-accent-soft": "#0ea5e9",
        "sivin-muted": "#64748b"
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.35)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(56,189,248,0.25), transparent 60%), radial-gradient(circle at bottom, rgba(59,130,246,0.25), transparent 55%)"
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee 25s linear infinite reverse",
        "fade-up": "fadeUp 0.7s ease-out both",
        "gradient-xy": "gradient-xy 15s ease infinite",
        blob: "blob 7s infinite"
      }
    }
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".animation-delay-2000": {
          "animation-delay": "2s"
        },
        ".animation-delay-4000": {
          "animation-delay": "4s"
        }
      });
    }
  ]
};

export default config;


