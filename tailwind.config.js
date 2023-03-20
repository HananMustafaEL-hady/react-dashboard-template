/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'Liberation Mono',
					'Courier New',
					'monospace',
				],
				header: [
					'Heebo',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji',
				],
			},
			keyframes: {
				vote: {
					'0%, 100%': {
						transform: 'translateY(1rem)',
					},
					'50%': {
						transform: 'translateY(0px)',
					},
				},
			},
			animation: {
				vote: 'vote 1s ease-in-out ',
			},
		},
		colors: {
			primary: '#fa6aae',
			bodyColor: '#6D6D6D',
			bodyBackground: '#F3F3F3',
			secondary: '#cfc6c6',
			borderBottomColor: '#eee',
			borderColor: '#f1f1f1',
			textColor: '#161D2B',
			link: '#6d6d6d',
			dropdownColor: '#6D6D6A',
			linkHoverColor: '#6514bb',
			linkHoverBg: '#f1e8fa',
		},
	},
	plugins: [],
};
