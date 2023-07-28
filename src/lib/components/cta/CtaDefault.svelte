<script>
  //
  export let ctaLabel;
  export let type;
  export let parameters;
  export let target;
  export let url;
  export let size;
</script>

<a
  on:click
  data-cta-type={type}
  data-parameters={parameters}
  {target}
  href={url}
  class="px-5 py-2 mt-5 leading-5 text-white rounded cursor-pointer bg-sky-400 hover:bg-sky-600"
>
  <span class={size}>{ctaLabel} </span>
</a>

<style>
</style>