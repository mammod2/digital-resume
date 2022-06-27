<script setup>
import { onMounted } from "vue";
import { getBasicInfo } from "./api/gist";
import BasicInfo from "./components/BasicInfo.vue";
import Section from "./components/Section.vue";

onMounted(async () => {
  const { data } = await getBasicInfo();
  console.log(data.files["resume.json"].content);
});
</script>
<template>
  <div class="">
    <div
      class="h-screen bg-blue-200 md:flex py-12 px-10 max-w-5xl mx-auto space-x-8 p-10"
    >
      <section
        class="w-1/4 bg-opacity-20 backdrop-blur-sm p-2 text-white sm:mx-auto"
      >
        <BasicInfo />
      </section>
      <main class="w-3/4 bg-opacity-20 backdrop-blur-sm p-2">
        <!-- <section>
          <h1 class="text-white text-sm bg-black w-fit pl-1 pr-2 font-semibold">
            About
          </h1>
          <p class="text-sm px-2 py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            molestiae explicabo modi facere deleniti voluptatum repellendus
            earum. Quaerat dolores quasi ducimus mollitia? Quibusdam vel odit
            eius laudantium sit corporis explicabo corrupti dolorum blanditiis
            molestiae sequi modi dignissimos fuga deleniti, inventore dolorem
            placeat nesciunt quam, natus facere! Suscipit fuga dolores illo
            labore deleniti quibusdam porro necessitatibus, cupiditate
            temporibus illum minus voluptatum est aliquid velit molestiae id.
            Veniam labore libero natus totam. Ut tempore maiores corporis atque
            dolorem quas nam consectetur doloremque omnis libero? Minima quam
            iste vitae sed et veritatis vel ducimus. Architecto excepturi labore
            voluptatem ratione perferendis eaque non ad!
          </p>
        </section> -->
        <Section title="about">1</Section>
        <Section title="Projects">2</Section>
        <Section title="Work Experience">2</Section>
      </main>
    </div>
  </div>
</template>
