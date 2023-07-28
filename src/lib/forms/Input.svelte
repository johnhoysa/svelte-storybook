<script>
	export let type;
	export let label;
	export let name;
	export let placeHolder;
	export let required;
	export let disabled;
</script>

<div class="mt-4">
	<label for={name}>{label}</label>
	<input
		{name}
		{type}
		{required}
		placeholder={placeHolder}
		{disabled}
		class="block w-full px-3 py-2 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-amber-500 focus:ring-amber-500 sm:text-sm focus:ring-1 disabled:shadow-none"
	/>
</div>
