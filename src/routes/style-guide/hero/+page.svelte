<script>
  console.log("hero style guide page loaded");
  import HeroDefault from "$lib/components/hero/Hero.svelte";
  import HeroVariantButton from "$lib/components/hero/HeroButton.svelte";
</script>

<svelte:head>
  <title>Hero Components</title>
  <meta name="description" content="Hero Component" />
</svelte:head>

<h4 class="pt-3 text-1xl text-stone-400">Default Component</h4>
<HeroDefault />

<h4 class="pt-3 text-1xl text-stone-400">Variant with Button Component</h4>
<HeroVariantButton />

<style>
</style>