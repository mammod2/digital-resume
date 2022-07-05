<script setup>
import { ref, onMounted } from "vue";
import { getBasicInfo } from "./api/gist";
import WorkCard from "./components/WorkCard.vue";
import EducationCard from "./components/EducationCard.vue";
import BasicInfo from "./components/BasicInfo.vue";
import Section from "./components/Section.vue";

const aboutMeContent = ref("");
// const projectsMeSection = ref("");
const skills = ref("");
const works = ref([]);
const educations = ref("");
const languages = ref("");

onMounted(async () => {
  const {
    basicInfo,
    aboutSection,
    projectsSection,
    skillsSection,
    workSection,
    educationSection,
    myLanguages,
  } = await getBasicInfo();

  aboutMeContent.value = aboutSection.content;
  // projectsMeSection.value = projectsSection.keywords;
  skills.value = skillsSection;
  works.value = workSection;
  educations.value = educationSection;
  languages.value = myLanguages;
});
</script>
<template>
  <div>
    <div
      class="min-h-screen md:flex py-12 p- md:px-10 max-w-5xl mx-auto space-x-8"
    >
      <section class="md:w-1/4 bg-opacity-20 p-2 sm:mx-auto">
        <BasicInfo />
      </section>
      <main class="min-w-full md:w-3/4 bg-opacity-20 pr-6">
        <Section title="About">
          <p class="text-sm">
            {{ aboutMeContent }}
          </p>
        </Section>
        <!-- <Section title="title" content="content">1</Section> -->
        <Section title="Work Experience">
          <div class="space-y-8">
            <div v-for="(work, index) in works" :key="index">
              <WorkCard :work-section="work" />
            </div>
          </div>
        </Section>
        <Section title="Stacks">
          <div class="grid grid-cols-[max-content_auto] gap-4">
            <div class="grid grid-cols-[max-content_auto] gap-4">
              <template v-for="(skill, index) in skills" :key="index">
                <h3 class="text-right font-bold">{{ skill.name }}</h3>

                <p>{{ skill.keywords }}</p>
                <h3 class="text-right font-bold">CSS Frameworks</h3>
                <p>{{ skill.cssFrameworks }}</p>
              </template>
            </div>
          </div>
        </Section>
        <Section title="Education">
          <div>
            <div v-for="(education, index) in educations" :key="index">
              <EducationCard :education="education" />
            </div>
          </div>
        </Section>

        <Section title="Languages">
          <div>
            <div
              class="inline"
              v-for="(language, index) in languages"
              :key="index"
            >
              <span class="font-bold">{{ language.language }}</span> (<span>{{
                language.fluency
              }}</span
              >){{ languages.length - 1 === index ? "" : ", " }}
            </div>
          </div>
        </Section>
      </main>
    </div>
  </div>
</template>
