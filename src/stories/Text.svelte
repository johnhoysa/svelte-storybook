<script>
  // Storybook settings are updated here and in Button.stories.js
  import Text from "$lib/components/text/Text.svelte";
  //
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * @type {'text-1' | 'text-2' | 'text-3'} How large should the button be?
   */
  export let size = "text-2";

  /**
   * @type {string} Button contents
   */

  export let label;

  $: mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  // $: style = backgroundColor ? `background-color: ${backgroundColor}` : "";
</script>

<Text text={label} />