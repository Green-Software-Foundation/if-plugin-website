/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
		  sans: ["Nunito", "sans-serif"],
		},
		extend: {
		  colors: {
			primary: {
			  "darkest-2": "#002625",
			  darkest: "#002c2a",
			  darker: "#003734",
			  dark: "#00524f",
			  default: "#006d69",
			  light: "#80b6b4",
			  lighter: "#bfdbd9",
			  "lightest-2": "#e5f0f0",
			  "lightest-1": "#f2f8f7",
			  "gradient-dark": "#006D69",
			  "gradient-light": "#A1C145",
			  "contact-us": "#006D68",
			},
			accent: {
			  darkest: "#62732E",
			  darker: "#576629",
			  dark: "#83993e",
			  default: "#aecc53",
			  light: "#d7e6a9",
			  lighter: "#ebf2d4",
			  "lightest-2": "#f7faee",
			  "lightest-1": "#fbfcf6",
			},
			gray: {
			  darker: "#777777",
			  dark: "#b2b2b2",
			  default: "#ededed",
			  light: "#f6f6f6",
			  lighter: "#fbfbfb",
			  "lightest-2": "#fdfdfd",
			  "lightest-1": "#fefefe",
			  input: "#999999",
			  timeline: "#1C1D221A",
			  separator: "#0000001A",
			},
			black: {
			  normal: "#000000",
			  default: "#3c3c3c",
			  light: "rgba(60, 60, 60, 0.8)",
			  lighter: "rgba(60, 60, 60, 0.25)",
			  "lightest-2": "rgba(60, 60, 60, 0.1)",
			  "lightest-1": "rgba(60, 60, 60, 0.05)",
			  darkest: "rgba(0, 0, 0, 0.50);",
			},
			danger: {
			  dark: "#a61d15",
			  default: "#dd261c",
			  light: "#ee938d",
			},
		  },
		},
	  },
	plugins: [],
}
