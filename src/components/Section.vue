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
    <div class="px-2 py-4">
      <slot />
    </div>
  </section>
</template>
