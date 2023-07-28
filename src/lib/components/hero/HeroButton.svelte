<script type="text/javascript">
  import data from "./json/hero-button.json";
  import Cta from "$lib/components/cta/Cta.svelte";

  console.log(data);
</script>

<div class="relative h-[400px] overflow-hidden">
  <div
    class="absolute z-20 text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  >
    <h1 class="text-5xl">{@html data.heading}</h1>
    <p class="text-base">{@html data.bottomSubheader}</p>
    <div class="p-4">
      <Cta {...data.ctaItem} />
    </div>
  </div>
  <div class="z-0 w-full h-full">
    <picture class="w-full h-full">
      <source media="(min-width: 768px)" srcset={data.imageSrc.mobile.src} />
      <img
        class="object-cover w-full h-full"
        src={data.imageSrc.desktop.src}
        alt="alt only needed here"
      />
    </picture>
  </div>
</div>

<style>
</style>
