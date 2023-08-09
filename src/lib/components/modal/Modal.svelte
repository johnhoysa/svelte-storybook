<script>
	import data from '$lib/components/modal/json/modal.json';
	import Cta from '$lib/components/cta/Cta.svelte';
	import { fade } from 'svelte/transition';

	let modalDefault;
	let showModal = false;

	function closeModalDefault(event) {
		showModal = false;
	}
</script>

<div class="w-1/2">
	{#if showModal}
		<div
			bind:this={modalDefault}
			transition:fade={{ delay: 0, duration: 250 }}
			class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-slate-100"
		>
			<!-- Modal content -->
			<div class="relative items-center justify-center text-center">
				<span
					on:click={closeModalDefault}
					role="button"
					tabindex="0"
					aria-hidden="false"
					class="absolute text-4xl cursor-pointer text-bold top-4 right-4 text-sky-400 hover:text-sky-600"
				>
					X
				</span>
				<p class="pt-8">Some text in the Modal...</p>
				<p>click close btn in right top corner</p>
			</div>
		</div>
	{/if}
	<Cta on:click={() => (showModal = true)} {...data} />
</div>

<style>
</style>
