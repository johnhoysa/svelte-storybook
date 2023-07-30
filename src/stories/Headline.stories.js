import Headline from './Headline.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
	title: 'Atoms/Headline',
	component: Headline,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['h1', 'h2', 'h3', 'h4', 'h5']
		}
	}
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Heading1 = {
	args: {
		primary: true,
		label: 'Example of H1 Heading',
		sized: 'h1',
		styled: 'text-3xl'
	}
};

export const Heading2 = {
	args: {
		label: 'Example of H2 Heading',
		sized: 'h2',
		styled: 'text-2xl'
	}
};

export const Heading3 = {
	args: {
		label: 'Example of H3 Heading',
		sized: 'h3',
		styled: 'text-1xl'
	}
};

export const Heading4 = {
	args: {
		label: 'Example of H4 Heading',
		sized: 'h4',
		styled: 'text-lg'
	}
};
