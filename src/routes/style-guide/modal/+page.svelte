<script>
  import ModalDefault from "$lib/components/modal/Modal.svelte";
</script>

<svelte:head>
  <title>Modal Components</title>
  <meta name="description" content="Modal Component" />
</svelte:head>
<div class="m-3">
  <h4 class="p-3 text-1xl text-stone-400">Modal Default</h4>
  <p class="p-3 text-stone-600">
    This is now using Svelte event dispatcher to show and hide modal.
  </p>
  <ModalDefault />
</div>

<style>
</style>