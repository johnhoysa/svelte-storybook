<script>
	export let headline;
	export let hTag;
	export let styles;
</script>

<div>
	{@html `<${hTag} class="${styles}">${headline}</${hTag}>`}
</div>

<style>
</style>
