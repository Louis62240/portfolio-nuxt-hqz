<!-- components/HeroSection.vue -->
<template>
  <section class="w-full min-h-[calc(100vh-80px)] relative flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-[#0F172A]">
    <!-- Subtle Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#131B2E] to-[#0F172A] opacity-50"></div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <!-- Introduction -->
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
        <span class="block">Bonjour, je suis</span>
        <span class="block mt-3 bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">
          [Votre Nom]
        </span>
      </h1>

      <!-- Role with Typing Effect -->
      <div class="h-8 mb-8">
        <p class="text-xl text-gray-300">
          {{ currentRole }}
        </p>
      </div>

      <!-- Brief Description -->
      <p class="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        Spécialisé dans la création d'applications web modernes et performantes,
        je transforme vos idées en expériences numériques uniques.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a href="#projects" class="px-8 py-3 bg-[#3B82F6] text-white rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30">
          Voir mes projets
        </a>
        <a href="#contact" class="px-8 py-3 border border-[#3B82F6] text-[#3B82F6] rounded-lg transition-all hover:-translate-y-0.5 hover:bg-[#3B82F6]/10">
          Me contacter
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const roles = [
  'Développeur Front-end',
  'Développeur Back-end',
  'Développeur Full Stack'
]

const currentRole = ref(roles[0])
let currentIndex = 0

onMounted(() => {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % roles.length
    currentRole.value = roles[currentIndex]
  }, 3000)
})
</script>

<style scoped>
section {
  /* Assuming header height is 80px */
  margin-top: 40px;
}

/* Simple slide up animation for initial load */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1, .description, .cta-buttons {
  animation: slideUp 0.5s ease-out forwards;
}
</style>