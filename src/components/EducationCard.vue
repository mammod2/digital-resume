<script setup>
const props = defineProps({
  education: Object,
});
</script>
<template>
  <div>
    <div>
      <span v-if="education.area">{{ education.area }}<span>, </span></span>
      <span class="font-bold">{{ education.studyType }}<span>, </span></span>
      <span>{{ education.institution }}</span>
    </div>
    <div>
      <p class="text-gray-600 font-light text-sm">
        {{ education.duration }}
      </p>
    </div>
    <ul v-if="education.activities">
      <li v-for="(activity, index) in education.activities" :key="index">
        <span>{{ activity }}</span>
      </li>
    </ul>
  </div>
</template>
