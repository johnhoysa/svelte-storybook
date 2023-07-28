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

  <h2 class="text-3xl"><Headline {...data} /></h2>
  <h2 class="text-3xl">
    <Headline headline="Headline within page.svelte" />
  </h2>
</div>

<style>
</style>