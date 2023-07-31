<script>
  // Storybook settings are updated here and in Text.stories.js
  import Text from "$lib/components/text/Text.svelte";
  //


  /**
   * @type {'small' | 'paragraph' | 'large'} How large should the button be?
   */
  export let size = "paragraph";

  /**
   * @type {string} Text contents
   */

  export let label;

  $: mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  // $: style = backgroundColor ? `background-color: ${backgroundColor}` : "";
</script>

<Text text={label} />