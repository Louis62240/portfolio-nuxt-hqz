<template>
  <div>
    <section class="flex flex-col items-center min-h-screen bg-[#FEFAE0]" ref="home">
      <BackgroundElements />
      <EducationPath/>
      <SkillComponent />
      <ProjetComponent />
      <!-- <CvBanner /> -->
      
    </section>
   </div>
</template>
<script setup>
import { ref, watch } from 'vue';

// Propriété passée par le parent
const props = defineProps(['sectionToScroll']);

// Watcher pour réagir lorsque `sectionToScroll` change
watch(() => props.sectionToScroll, (newSection) => {
  console.log('Scrolling to:', newSection);
  
});
</script>