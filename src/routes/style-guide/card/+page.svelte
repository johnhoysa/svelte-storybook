<script>
  import Card from "$lib/components/card/Card.svelte";
  import data from '$lib/components/card/json/card.json';
</script>

<svelte:head>
  <title>Card Component Examples</title>
  <meta name="description" content="Card Component Examples" />
</svelte:head>

<h4 class="pt-3 text-1xl text-stone-400">
  Card Component - JSON Data
</h4>
<Card {...data}/>

<h4 class="pt-3 text-1xl text-stone-400">
  Card Component - 3 side by Side
</h4>
<div class="flex mt-5 place-content-evenly">
 <div class="mr-4"><Card {...data} /></div>
 <div class="mr-4"><Card {...data} /></div>
 <div class="mr-0"><Card {...data} /></div>
</div>


