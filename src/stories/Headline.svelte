<script>
	import Headline from '$lib/components/headline/Headline.svelte';
	/**
	 * Is this the principal call to action on the page?
	 */
	export let primary = false;

	/**
	 * @type {'h1' | 'h2' | 'h3'| 'h4' | 'h5'} What H tag should the headline have?
	 */
	export let hTag = 'h3';

	/**
	 * @type {string} headline contents
	 */
	export let label;
	export let styled;
</script>

<Headline headline={label} {hTag} styles={styled} />
