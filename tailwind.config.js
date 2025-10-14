/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,jsx,ts,tsx,mdx}",
		"./app/**/*.{js,jsx,ts,tsx,mdx}",
		"./pages/**/*.{js,jsx,ts,tsx,mdx}",
		"./components/**/*.{js,jsx,ts,tsx,mdx}",
		"./public/**/*.html",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "1.5rem",
				lg: "2rem",
				xl: "2rem",
				"2xl": "2.5rem",
			},
		},
		extend: {
			fontFamily: {
				sans: [
					"var(--font-inter)",
					"ui-sans-serif",
					"system-ui",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
			},
			colors: {
				brand: {
					50: "#eef2ff",
					100: "#e0e7ff",
					200: "#c7d2fe",
					300: "#a5b4fc",
					400: "#818cf8",
					500: "#6366f1",
					600: "#4f46e5",
					700: "#4338ca",
					800: "#3730a3",
					900: "#312e81",
				},
			},
			boxShadow: {
				card: "0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.06)",
			},
			borderRadius: {
				xl: "1rem",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
