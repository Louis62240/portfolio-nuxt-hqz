<template>
  <div>
    <section ref="home" class="flex flex-col items-center min-h-screen bg-[#FEFAE0]">
      <BackgroundElements />
      <IntroBanner />
    </section>
    <section ref="skills">
      <AboutSection />
    </section>
    <section ref="projects">
      <ProjectsSection />
    </section>
    <!--<ContactSection /> -->
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';

// Définir les références pour chaque section
const home = ref(null);
const skills = ref(null);
const projects = ref(null);
const contact = ref(null);

// Propriété passée par le parent
const props = defineProps(['sectionToScroll']);

// Watcher pour réagir lorsque `sectionToScroll` change
watch(() => props.sectionToScroll, (newSection) => {
  console.log("Watch",newSection);
  if (newSection) {
    const sectionMap = {
      home,
      skills,
      projects,
      contact
    };
    const targetSection = sectionMap[newSection];

    if (targetSection && targetSection.value) {
      targetSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
</script>