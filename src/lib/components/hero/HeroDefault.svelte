<script>
  import data from "./json/hero-default.json";
</script>

<div class="flex items-center p-3 m-3 bg-pink-600 hero-default">
  <div class="flex-1 w-32">
    <h1 class="text-5xl">{@html data.heading}</h1>
    <p class="text-base">{@html data.bottomSubheader}</p>
  </div>
  <div class="flex-1 w-64">
    <picture>
      <source media="(min-width: 768px)" srcset={data.imageSrc.mobile.src} />
      <img
        class="w-full h-full"
        src={data.imageSrc.desktop.src}
        alt="alt only needed here"
      />
    </picture>
  </div>
</div>

<style>

</style>