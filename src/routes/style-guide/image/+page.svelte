<script>
	import Image from '$lib/components/image/Image.svelte';
	import data from '$lib/components/image/json/image.json';
</script>

<svelte:head>
	<title>Image Component Examples</title>
	<meta name="description" content="Text Component Examples" />
</svelte:head>

<div class="m-3">
	<h4 class="pt-3 text-1xl text-stone-400">Image Component - JSON Data</h4>
	<Image {...data} />
	<h4 class="pt-3 text-1xl text-stone-400">Image Component - Local Data Example</h4>
	<Image
		imageDesktop="https://picsum.photos/1282/722"
		imageMobile="https://picsum.photos/642/362"
		imageAlt="From Svelte file"
	/>
</div>

<style>
</style>
