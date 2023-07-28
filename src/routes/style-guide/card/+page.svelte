<script>
  import Card from "$lib/components/card/Card.svelte";
</script>

<svelte:head>
  <title>Card Components</title>
  <meta name="description" content="Card Component" />
</svelte:head>

<h4 class="pt-3 text-1xl text-stone-400">
  Card Component, button is an include
</h4>
<Card />

<h4 class="pt-3 text-1xl text-stone-400">Cards, 3 up on a page</h4>
<div class="flex">
  <div class="p-3 pl-0"><Card /></div>
  <div class="p-3"><Card /></div>
  <div class="p-3 pr-0"><Card /></div>
</div>

<style>
</style>
