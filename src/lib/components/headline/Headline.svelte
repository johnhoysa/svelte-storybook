<script>
  export let headline;
  export let size;
  export let classes
</script>

<div>
  {@html `<${size} class="${classes}">${headline}</${size}>`}
</div>

<style>
</style>
