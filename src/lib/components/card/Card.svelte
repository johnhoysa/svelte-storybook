<script>
	import Cta from '$lib/components/cta/Cta.svelte';
	import Image from '$lib/components/image/Image.svelte';
	export let heading;
	export let text;
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

<div class="flex flex-row h-full bg-slate-100">
	<div class="basis-2/5">
		<Image {imageDesktop} {imageMobile} {imageAlt} />
	</div>

	<div class="flex p-4 basis-3/5 place-items-center">
		<div>
			<h4 class="text-2xl md:text-xl">{@html heading}</h4>
			{@html text}
			<div class="pt-5">
				<Cta {ctaLabel} {ctaType} {ctaParameters} {ctaTarget} {ctaUrl} {ctaSize} />
			</div>
		</div>
	</div>
</div>

<style>
</style>
