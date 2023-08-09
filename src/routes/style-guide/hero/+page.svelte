<script>
	// Import Components
	import HeroDefault from '$lib/components/hero/Hero.svelte';
	import HeroButton from '$lib/components/hero/HeroButton.svelte';
	// Import Data
	import dataHero from '$lib/components/hero/json/hero.json';
	import dataHeroButton from '$lib/components/hero/json/hero-button.json';
</script>

<svelte:head>
	<title>Hero Components</title>
	<meta name="description" content="Hero Component" />
</svelte:head>

<h4 class="pt-3 text-1xl text-stone-400">Default Component</h4>
<HeroDefault {...dataHero} />

<h4 class="pt-3 text-1xl text-stone-400">Default Component with Button</h4>
<HeroButton {...dataHeroButton} />

<style>
</style>
