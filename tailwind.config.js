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
				imageCareer: "url('../../public/images/imageCareer.png')",
				ourstory: "url('../../public/images/ourstory.png')",
			},
			// fontFamily: {
			// 	// sans: ["Playfair Display", ...defaultTheme.fontFamily.sans],
			// },
		},
		screens: {
			'xxsm': '100px',
			// => @media (min-width:200px) { ... }

			'xsm': '300px',
			// => @media (min-width:200px) { ... }

      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '960px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
