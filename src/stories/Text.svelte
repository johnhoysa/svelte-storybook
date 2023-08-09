<script>
	import Text from '$lib/components/Text/Text.svelte';

	/**
	 * @type {string} Text contents
	 */
	export let label;
	export let styles;
</script>

<Text text={label} {styles} />
