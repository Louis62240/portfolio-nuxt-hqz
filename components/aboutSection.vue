<template>
  <div class="skills-container bg-gradient-to-b from-[#f0f0e0] to-[#fff8e0] min-h-screen py-16 px-4">
    <!-- Section Titre -->
    <div class="max-w-6xl mx-auto text-center mb-16">
      <h2 class="text-4xl font-bold text-amber-800 mb-4 animate-fade-in">
        Compétences Techniques
      </h2>
      <div class="h-1 w-32 bg-amber-500 mx-auto rounded-full"></div>
    </div>

    <!-- Conteneur des sections de compétences -->
    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
      <!-- Frontend -->
      <SkillSection 
        title="Frontend" 
        :skills="skills.frontend"
        class="skill-card bg-gradient-to-br from-amber-50 to-orange-50"
      />
      
      <!-- Backend -->
      <SkillSection 
        title="Backend" 
        :skills="skills.backend"
        class="skill-card bg-gradient-to-br from-amber-50 to-orange-50"
      />
      
      <!-- Other -->
      <SkillSection 
        title="Autres Technologies" 
        :skills="skills.other"
        class="skill-card bg-gradient-to-br from-amber-50 to-orange-50"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const skills = ref({
  frontend: [
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      level: "Expérimenté",
    },
    // ... autres compétences frontend
  ],
  backend: [
    // ... compétences backend
  ],
  other: [
    // ... autres compétences
  ],
})

// Composant pour chaque section de compétences
const SkillSection = {
  props: {
    title: String,
    skills: Array,
  },
  template: `
    <div class="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 class="text-2xl font-semibold text-amber-700 mb-6">{{ title }}</h3>
      <div class="space-y-6">
        <div v-for="skill in skills" :key="skill.name" 
             class="skill-item flex items-center gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300">
          <div class="skill-icon w-12 h-12 flex items-center justify-center">
            <img :src="skill.logo" :alt="skill.name" class="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300">
          </div>
          <div class="flex-grow">
            <h4 class="font-medium text-gray-800">{{ skill.name }}</h4>
            <div class="mt-1 relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="absolute top-0 left-0 h-full rounded-full transition-all duration-1000"
                   :class="getLevelClass(skill.level)"
                   :style="getLevelWidth(skill.level)">
              </div>
            </div>
            <span class="text-sm text-gray-600 mt-1 inline-block">{{ skill.level }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  methods: {
    getLevelClass(level) {
      const classes = {
        'Expérimenté': 'bg-green-500',
        'Intermédiaire': 'bg-blue-500',
        'Notions': 'bg-amber-500'
      }
      return classes[level] || 'bg-gray-500'
    },
    getLevelWidth(level) {
      const widths = {
        'Expérimenté': '90%',
        'Intermédiaire': '65%',
        'Notions': '40%'
      }
      return { width: widths[level] || '0%' }
    }
  }
}
</script>

<style scoped>
.skills-container {
  position: relative;
  overflow: hidden;
}

.skills-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, rgba(250, 250, 250, 0.9), transparent);
  z-index: 1;
}

.skill-card {
  backdrop-filter: blur(8px);
  transition: all 0.3s ease-in-out;
}

.skill-item {
  position: relative;
  overflow: hidden;
}

.skill-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 30%, rgba(255, 255, 255, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.skill-item:hover::after {
  opacity: 1;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
</style>