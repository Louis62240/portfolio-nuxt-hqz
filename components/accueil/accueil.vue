<template>
  <div>
    <section class="flex flex-col items-center min-h-screen bg-[#FEFAE0]" ref="home">
      <BackgroundElements @scrollToProjects="scrollToSection('projects')" />
      <ProjetComponent ref="projectsSection" id="projects" />
      <ProfilComponent/>
      <EducationPath/>
    </section>
   </div>
</template>
<script setup>
import { ref, watch } from 'vue';

// Propriété passée par le parent
const props = defineProps(['sectionToScroll']);

const projectsSection = ref(null);

const scrollToSection = (sectionId) => {
  if (sectionId === 'projects' && projectsSection.value) {
    projectsSection.value.$el.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

</script>