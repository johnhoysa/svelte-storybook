<script>
  console.log("Headline Loaded");
  import data from "$lib/components/headline/json/headline.json";
  import Headline from "$lib/components/headline/Headline.svelte";
 
</script>

<svelte:head>
  <title>Headline Component Examples</title>
  <meta name="description" content="Headline Component Examples" />
</svelte:head>

<div class="m-3">
  <h4 class="pt-3 text-1xl text-stone-400">Headline Component - JSON Data</h4>
  <Headline {...data} />
  <h4 class="pt-3 text-1xl text-stone-400">Headline Component - Local Data Example</h4>
  <Headline headline="Headline created within page.svelte" hTag="h4" styles="text-xl text-orange-400" />

</div>

<style>
</style>