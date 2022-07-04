<template>
  <div>
    <div class="space-x-2">
      <span class="font-bold">
        <a
          class="underline decoration-dashed decoration-gray-300 underline-offset-2"
          :href="workSection.website"
          target="blank"
        >
          {{ workSection.name }}</a
        >
      </span>
      <span class="text-gray-500">{{ workSection.role }}</span>
    </div>

    <div>
      <p class="text-gray-600 font-light text-sm">
        {{ workSection.duration }} | {{ workSection.location }}
      </p>
    </div>

    <ul
      v-if="workSection.highlights.length > 0"
      class="list-[circle] list-inside mt-2 ml-2"
    >
      <li v-for="(highlight, index) in workSection.highlights" :key="index">
        <span>{{ highlight }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  workSection: Object,
});
</script>
