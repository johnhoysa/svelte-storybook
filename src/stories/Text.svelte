<script>
  import Text from "$lib/components/Text/Text.svelte";
  /**
   * Is this the principal call to action on the page?
   */

  /**
   * @type {string} Text contents
   */
  export let label;
  export let styles;
</script>

<Text text={label} styles={styles} />
