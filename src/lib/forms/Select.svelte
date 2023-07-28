<script>
	export let label;
	export let name;
	export let required;
</script>

<div class="mt-4">
	<label for={name}>{label}</label>
	<select
		{name}
		{required}
		class="block px-3 py-2 mt-2 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400"
	>
		<slot />
	</select>
</div>
