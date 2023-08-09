<script>
	export let imageDesktop;
	export let imageMobile;
	export let imageAlt;
</script>

<picture class="w-full h-full">
	<source media="(min-width: 768px)" srcset={imageDesktop} />
	<img class="object-cover w-full h-full" src={imageMobile} alt={imageAlt} />
</picture>

<style>
</style>
