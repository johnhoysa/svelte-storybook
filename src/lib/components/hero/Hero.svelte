<script>
	export let heading;
	export let topSubheader;
	export let bottomSubheader;
	export let imageDesktop;
	export let imageMobile;
	export let imageAlt;
</script>

<div class="flex items-center p-3 m-3 bg-pink-600">
	<div class="flex-1 w-32">
		<h1 class="text-5xl">{@html heading}</h1>
		<h2 class="text-2xl">{@html topSubheader}</h2>
		<p class="text-base">{@html bottomSubheader}</p>
	</div>
	<div class="flex-1 w-64">
		<picture class="w-full h-full">
			<source media="(min-width: 768px)" srcset={imageDesktop} />
			<img class="object-cover w-full h-full" src={imageMobile} alt={imageAlt} />
		</picture>
	</div>
</div>

<style>
</style>
