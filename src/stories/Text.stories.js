import Text from './Text.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
	title: 'Atoms/Text',
	component: Text,
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select' },
			options: ['text-1', 'text-2', 'text-3']
		}
	},
	parameters: {
		docs: {
			description: {
				component: 'Description set here, is currently overwritten by Docs.mdx'
			}
		}
	}
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = {
	args: {
		primary: true,
		label: 'Text Primary'
	},
	parameters: {
		docs: {
			description: {
				story: 'Primary Description'
			}
		}
	}
};

export const Secondary = {
	args: {
		label: 'Text Secondary'
	}
};

export const Large = {
	args: {
		size: 'p-3 text-3xl',
		label: 'Text Large'
	}
};

export const Small = {
	args: {
		size: 'p-1 text-3',
		label: 'Text Small'
	}
};
