<script>
  import Headline from "$lib/components/headline/Headline.svelte";
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * @type {'h1' | 'h2' | 'h3'| 'h4' | 'h5'} How large should the button be?
   */
  export let size = "h3";

  /**
   * @type {string} Button contents
   */
  export let label;

</script>

<Headline headline={label} size="h2" classes="text-2xl text-orange-400" />
