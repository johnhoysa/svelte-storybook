<script>
	import Card from '$lib/components/card/Card.svelte';
	import data from '$lib/components/card/json/card.json';
</script>

<svelte:head>
	<title>Card Component Examples</title>
	<meta name="description" content="Card Component Examples" />
</svelte:head>

<h4 class="pt-3 text-1xl text-stone-400">Card Component - JSON Data</h4>
<Card {...data} />

<h4 class="pt-3 text-1xl text-stone-400">Card Component - 3 side by Side</h4>
<div class="flex items-stretch mt-5 place-content-evenly">
	<div class="mr-4"><Card {...data} /></div>
	<div class="mr-4">
		<Card
			imageDesktop="https://picsum.photos/1284/724"
			imageMobile="https://picsum.photos/644/364"
			imageAlt="Custom Alt Tag"
			heading="Cool heading"
			text="some text from local"
			ctaLabel="Custom"
			ctaType="internal"
			ctaParameters="#"
			ctaTarget="_self"
			ctaUrl="../"
			ctaSize="small"
		/>
	</div>
	<div class="mr-0"><Card {...data} /></div>
</div>
