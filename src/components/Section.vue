<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <section>
    <h1 class="text-white text-sm bg-black w-fit pl-1 pr-2 font-semibold">
      {{ title }}
    </h1>
    <p class="text-sm px-2 py-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
      molestiae explicabo modi facere deleniti voluptatum repellendus earum.
      Quaerat dolores quasi ducimus mollitia? Quibusdam vel odit eius laudantium
      sit corporis explicabo corrupti dolorum blanditiis molestiae sequi modi
      dignissimos fuga deleniti, inventore dolorem placeat nesciunt quam, natus
      facere! Suscipit fuga dolores illo labore deleniti quibusdam porro
      necessitatibus, cupiditate temporibus illum minus voluptatum est aliquid
      velit molestiae id. Veniam labore libero natus totam. Ut tempore maiores
      corporis atque dolorem quas nam consectetur doloremque omnis libero?
      Minima quam iste vitae sed et veritatis vel ducimus. Architecto excepturi
      labore voluptatem ratione perferendis eaque non ad!
    </p>
    <slot />
  </section>
</template>
