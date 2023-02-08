/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				image: "url('../../public/images/image.png')",
				image1: "url('../../public/images/image1.png')",
				ourstory: "url('../../public/images/ourstory.png')",
			},
			// fontFamily: {
			// 	// sans: ["Playfair Display", ...defaultTheme.fontFamily.sans],
			// },
		},
	},
	plugins: [],
};
