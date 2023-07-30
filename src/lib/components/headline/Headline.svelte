<script>
  export let headline;
  export let size;
  export let styles
</script>

<div>
  {@html `<${size} class="${styles}">${headline}</${size}>`}
</div>

<style>
</style>
