<script>
  import data from "$lib/components/cta/json/modal.json";
  import CtaDefault from "$lib/components/cta/CtaDefault.svelte";
  import { fade } from "svelte/transition";

  let modalDefault;
  let showModal = false;

  function closeModalDefault(event) {
    showModal = false;
  }
</script>

<div class="w-1/2 p-3">
  {#if showModal}
    <div
      bind:this={modalDefault}
      transition:fade={{ delay: 0, duration: 250 }}
      class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-amber-400"
    >
      <!-- Modal content -->
      <div class="relative items-center justify-center text-center">
        <span
          on:click={closeModalDefault}
          role="button"
          class="absolute text-4xl cursor-default cursor-pointer text-bold top-4 right-4 hover:text-amber-700"
        >
          X
        </span>
        <p class="pt-8">Some text in the Modal...</p>
        <p>click close btn in right top corner</p>
      </div>
    </div>
  {/if}
  <CtaDefault
    on:click={() => {
      showModal = true;
    }}
    ctaLabel={data.ctaItem.ctaLabel}
  />
</div>

<style>
</style>
