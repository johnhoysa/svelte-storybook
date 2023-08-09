<script>
	import Cta from '$lib/components/cta/Cta.svelte';
	import data from '$lib/components/cta/json/cta.json';
	let ctaFirst;
	let ctaSecond;

	/** @param {MouseEvent} event */
	function handleClick(event) {
		console.log('the second button was clicked');
	}

	//
</script>

<svelte:head>
	<title>CTA Components</title>
	<meta name="description" content="CTA Component" />
</svelte:head>

<div class="p-3">
	<h4 class="pt-3 text-1xl text-stone-400">CTA Examples</h4>
	<p class="pt-3 text-stone-600">CTA powered by JSON - Links to index of site</p>
	<div class="py-3">
		<Cta bind:value={ctaFirst} {...data} />
	</div>

	<p class="pt-3 text-stone-600">Does not open link but creates console message with on:click</p>
	<div class="py-3">
		<Cta
			on:click={handleClick}
			bind:value={ctaSecond}
			ctaLabel="CTA Two"
			type="internal"
			parameters="#params"
			target=""
			url=""
		/>
	</div>
</div>

<style>
</style>
