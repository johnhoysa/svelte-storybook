<script>
	import Header from './partials/Header.svelte';
	import Footer from './partials/Footer.svelte';
	import '../app.css';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main class="container m-auto">
		<div>
			<slot />
		</div>
	</main>
	<Footer />
</div>

<style>
</style>
