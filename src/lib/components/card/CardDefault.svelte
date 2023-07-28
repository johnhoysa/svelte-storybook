<script>
	import data from '$lib/components/card/json/card.json';
	import CtaDefault from '$lib/components/cta/CtaDefault.svelte';
</script>

<div class="flex flex-row bg-green-50">
	<div class="basis-3/5">
		<picture class="w-full h-full">
			<source media="(min-width: 768px)" srcset={data.image.imageSrc.desktop.src} />
			<img
				class="object-cover w-full h-full"
				src={data.image.imageSrc.mobile.src}
				alt="alt only needed here"
			/>
		</picture>
	</div>

	<div class="flex p-3 basis-2/5 place-items-center">
		<div>
			<h4>{@html data.heading}</h4>
			{@html data.text}
			<div class="pt-5">
				<CtaDefault ctaLabel={data.ctaItem.ctaLabel} url={data.ctaItem.url} />
			</div>
		</div>
	</div>
</div>

<style>
</style>
