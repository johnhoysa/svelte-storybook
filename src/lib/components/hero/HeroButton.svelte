<script>
	import Image from '$lib/components/image/Image.svelte';
	import Cta from '$lib/components/cta/Cta.svelte';
	export let heading;
	export let topSubheader;
	export let bottomSubheader;
	//
	export let imageDesktop;
	export let imageMobile;
	export let imageAlt;
	//
	export let ctaLabel;
	export let ctaType;
	export let ctaParameters;
	export let ctaTarget;
	export let ctaUrl;
	export let ctaSize;
</script>

<div class="relative h-[400px] overflow-hidden">
	<div
		class="absolute z-20 text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
	>
		<h1 class="text-5xl">{@html heading}</h1>
		<h2 class="text-2xl">{@html topSubheader}</h2>
		<p class="text-base">{@html bottomSubheader}</p>
		<div class="pt-4">
			<Cta {ctaLabel} {ctaType} {ctaParameters} {ctaTarget} {ctaUrl} {ctaSize} />
		</div>
	</div>
	<div class="z-0 w-full h-full">
		<Image {imageDesktop} {imageMobile} {imageAlt} />
	</div>
</div>

<style>
</style>
