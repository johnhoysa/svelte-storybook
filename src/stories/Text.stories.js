import Text from './Text.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
	title: 'Atoms/Text',
	component: Text,
	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component: 'Component description needed'
			}
		}
	}
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Paragraph = {
	args: {
		label: 'Example of paragraph text',
		styles: 'text-base'
	}
};

export const Small = {
	args: {
		label: 'Example of small text',

		styles: 'text-sm'
	}
};

export const Large = {
	args: {
		label: 'Example of large text',
		styles: 'text-xl'
	}
};
