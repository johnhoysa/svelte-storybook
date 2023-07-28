/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1024px'
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				pink: {
					100: '#fce4ef',
					200: '#f9c8df',
					300: '#f6b1d2',
					400: '#f183b8',
					500: '#ec559e',
					600: '#e72582'
				}
			}
		}
	},
	plugins: []
};
