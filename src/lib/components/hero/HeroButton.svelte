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

<div class="flex items-center p-3 m-3 bg-pink-600">
	<div class="flex-1 w-32">
		<h1 class="text-5xl">{@html heading}</h1>
		<h2 class="text-2xl">{@html topSubheader}</h2>
		<p class="text-base">{@html bottomSubheader}</p>
		<div class="pt-4">
			<Cta {ctaLabel} {ctaType} {ctaParameters} {ctaTarget} {ctaUrl} {ctaSize} />
		</div>
	</div>
	<div class="flex-1 w-64">
		<Image {imageDesktop} {imageMobile} {imageAlt} />
	</div>
</div>

<style>
</style>
