import Headline from './Headline.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
	title: 'Atoms/Headline',
	component: Headline,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const HeadlinePrimary = {
	args: {
		primary: true,
		label: 'Headline'
	}
};

export const HeadlineSecondary = {
	args: {
		label: 'Headline'
	}
};

export const HeadlineLarge = {
	args: {
		size: 'large',
		label: 'Headline'
	}
};

export const HeadlineSmall = {
	args: {
		size: 'small',
		label: 'Headline'
	}
};
