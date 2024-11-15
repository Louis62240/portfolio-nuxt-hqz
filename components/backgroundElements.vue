<template>
  <section class="w-full min-h-[calc(100vh-80px)] relative flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-[#55423d]">
    <!-- Subtle Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#55423d] via-[#3f2d28] to-[#271c19] opacity-60"></div>

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute w-96 h-96 bg-[#ffc0ad]/10 rounded-full blur-3xl -top-48 -left-48 animate-blob"></div>
      <div class="absolute w-96 h-96 bg-[#fff3ec]/10 rounded-full blur-3xl -bottom-48 -right-48 animate-blob animation-delay-2000"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <!-- Introduction -->
      <h1 class="text-4xl md:text-6xl font-bold text-[#fff3ec] mb-6">
        <span class="block">Bonjour, je suis</span>
        <span class="block mt-3 bg-gradient-to-r from-[#ffc0ad] to-[#fff3ec] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          [Votre Nom]
        </span>
      </h1>

      <!-- Role with Typing Effect -->
      <div class="h-8 mb-8">
        <p class="text-xl text-[#e6e6e6] animate-fade-in">
          {{ currentRole }}
        </p>
      </div>

      <!-- Brief Description -->
      <p class="text-lg text-[#e6e6e6]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
        Spécialisé dans la création d'applications web modernes et performantes,
        je transforme vos idées en expériences numériques uniques.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a 
          href="#projects" 
          class="group relative px-8 py-3 bg-[#ffc0ad] text-[#271c19] rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#ffc0ad]/30 overflow-hidden"
        >
          <span class="relative z-10 group-hover:scale-105 transition-transform duration-300">Voir mes projets</span>
          <div class="absolute inset-0 bg-gradient-to-r from-[#ffc0ad] to-[#fff3ec] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        <a 
          href="#contact" 
          class="group relative px-8 py-3 border-2 border-[#ffc0ad] text-[#ffc0ad] rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffc0ad]/10 overflow-hidden"
        >
          <span class="relative z-10 group-hover:scale-105 transition-transform duration-300">Me contacter</span>
          <div class="absolute inset-0 bg-[#ffc0ad]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-[#fff3ec]/60 hover:text-[#fff3ec] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  margin-top: 40px;
}

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

@keyframes blob {
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

h1, .description, .cta-buttons {
  animation: slideUp 0.5s ease-out forwards;
}
</style>
