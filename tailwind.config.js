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
			},
		},
		colors: {
			primary: '#fa6aae',
			bodyColor: '#6D6D6D',
			bodyBackground: '#F3F3F3',
			secondary: '#cfc6c6',
			borderColor: '#eee',
			'primary-shade-80': ' #321522',
			'primary-shade-60': ' #642a45',
			'primary-shade-40': ' #963f68',
			'primary-shade-20': ' #c8548b',
			'primary-shade-10': ' #e15f9c',
			'primary-tint-10': ' #fa78b6',
			'primary-tint-20': ' #fb87be',
			'primary-tint-40': ' #fca5ce',
			'primary-tint-60': ' #fdc3de',
			'primary-tint-80': ' #fee1ee',
			'primary-tint-90': ' #fef0f6',
		},
	},
	plugins: [],
};
