<script>
	// Import components
	import Input from '$lib/forms/Input.svelte';
	import Select from '$lib/forms/Select.svelte';
	let form;
	let firstName;
	let email;
	let food;
	//
	function handleSubmit() {
		console.log('Form was submitted ', form.firstName.value, form.food.value);
	}
</script>

<form bind:this={form} on:submit|preventDefault={handleSubmit} class="">
	<div>
		<Input
			bind:value={firstName}
			label="First Name"
			type="text"
			name="firstName"
			placeHolder="First name only"
			disabled=""
			required="required"
		/>
	</div>

	<Input
		bind:value={email}
		type="email"
		label="Email please"
		name="email"
		placeHolder="Email field disabled"
		disabled="disabled"
		required=""
	/>

	<div>
		<Select bind:value={food} label="Favorite food" name="food" required="required">
			<option value="chocolate">Chocolate</option>
			<option value="pizza">Pizza</option>
			<option value="tacos">Tacos</option>
			<option value="fries">French Fries</option>
			<option value="burger">Burger</option>
			<option value="breakfasttacos">Breakfast Tacos</option>
		</Select>
	</div>

	<button
		type="submit"
		class="px-5 py-2 mt-5 text-sm leading-5 text-white rounded bg-sky-500 hover:bg-sky-700"
	>
		Submit Button
	</button>
</form>
