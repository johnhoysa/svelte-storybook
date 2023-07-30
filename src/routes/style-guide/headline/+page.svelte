<script>
  console.log("Headline Loaded");
  import data from "$lib/components/headline/json/headline.json";
  import Headline from "$lib/components/headline/Headline.svelte";
 
</script>

<svelte:head>
  <title>Headline Examples</title>
  <meta name="description" content="Headline Examples" />
</svelte:head>

<div class="m-3">

  <Headline {...data} />
  <Headline headline="Headline within page.svelte" size="h4" styles="text-xl text-orange-400" />

</div>

<style>
</style>