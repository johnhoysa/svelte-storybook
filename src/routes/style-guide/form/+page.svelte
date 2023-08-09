<script>
	import Form from '$lib/forms/Form.svelte';

	function handleOnSubmit() {
		console.log("I'm the handleOnSubmit() in App.svelte");
	}
</script>

<div class="w-1/2 px-4 pt-0 pb-4 m-4 border rounded-md shadow-sm border-slate-500 bg-slate-100">
	<Form on:submit={handleOnSubmit} />
</div>
