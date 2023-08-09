<script>
	//
	export let ctaLabel;
	export let ctaType;
	export let ctaParameters;
	export let ctaTarget;
	export let ctaUrl;
	export let ctaSize;
</script>

<a
	on:click
	data-cta-type={ctaType}
	data-parameters={ctaParameters}
	target={ctaTarget}
	href={ctaUrl}
	class="px-5 py-2 mt-5 leading-5 text-white rounded cursor-pointer bg-sky-400 hover:bg-sky-600"
>
	<span class={ctaSize}>{ctaLabel} </span>
</a>

<style>
</style>
