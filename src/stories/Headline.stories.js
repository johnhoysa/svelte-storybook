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
export const HeadlineH1 = {
	args: {
		primary: true,
		label: 'Headline One H1',
		size: 'h1',
		classes: 'text-3xl'
	}
};

export const HeadlineH2 = {
	args: {
		label: 'Headline Two H2',
		size: 'h2',
		classes: 'text-2xl'
	}
};

export const HeadlineH3 = {
	args: {
		label: 'Headline Three H3',
		size: 'h3',
		classes: 'text-1xl'
	}
};

export const HeadlineH4 = {
	args: {
		label: 'Headline Four H4',
		size: 'h4',
		classes: 'text-xl'
	}
};
