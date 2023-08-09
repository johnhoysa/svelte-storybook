<script>
	import Text from '$lib/components/text/Text.svelte';
	import data from '$lib/components/text/json/text.json';
</script>

<svelte:head>
	<title>Text Component Examples</title>
	<meta name="description" content="Text Component Examples" />
</svelte:head>

<div class="m-3">
	<h4 class="pt-3 text-1xl text-stone-400">Text Component - JSON Data</h4>
	<Text {...data} />
	<h4 class="pt-3 text-1xl text-stone-400">Text Component - Local Data Example</h4>
	<Text
		styles="text-base"
		text="This text is from within page.svelte. <a class='text-sky-400 hover:text-sky-600' href='/'>Links to Home</a>"
	/>
</div>

<style>
</style>
