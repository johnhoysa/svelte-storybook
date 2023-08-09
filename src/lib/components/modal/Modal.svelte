<script>
	import data from '$lib/components/modal/json/modal.json';
	import Cta from '$lib/components/cta/Cta.svelte';
	import Headline from '$lib/components/headline/Headline.svelte';
	import Text from '$lib/components/text/Text.svelte';
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
					class="absolute pt-2 text-4xl cursor-pointer top-4 right-4 text-bold text-sky-400 hover:text-sky-600"
				>
					X
				</span>
				<Headline headline="Headline from Svelte File" hTag="h2" styles="relative text-2xl pt-4" />
				<Text text="Close Modal with button in top right corner" styles="text-base" />
			</div>
		</div>
	{/if}
	<Cta on:click={() => (showModal = true)} {...data} />
</div>

<style>
</style>
