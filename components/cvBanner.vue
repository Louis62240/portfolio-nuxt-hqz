<template>
    <section class="relative min-h-screen w-full bg-[#626F47] overflow-hidden py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="n in 20" :key="n" 
           class="absolute animate-floating opacity-20"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 5}s`,
             transform: `rotate(${Math.random() * 360}deg)`
           }">
        <svg width="40" height="40" viewBox="0 0 40 40" class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
          <path d="M20 4C12 4 4 12 4 20C4 28 12 36 20 36C28 36 36 28 36 20C36 12 28 4 20 4Z" 
                fill="#EBA603" 
                class="animate-pulse"/>
        </svg>
      </div>
    </div>
  
      <!-- En-tête de section -->
      <div class="relative z-10 max-w-7xl mx-auto mb-12">
        <h2 ref="titleRef" 
            class="text-4xl font-bold text-[#FFF8E8] text-center transform transition-all duration-1000"
            :class="{'opacity-0 translate-y-10': !isTitleVisible, 'opacity-100 translate-y-0': isTitleVisible}">
          Mon Parcours
          <div class="h-1 w-24 bg-[#FFB430] mx-auto mt-4 rounded-full transform transition-all duration-1000 delay-300"
               :class="{'scale-x-0': !isTitleVisible, 'scale-x-100': isTitleVisible}"></div>
        </h2>
      </div>
  
      <!-- Conteneur du CV -->
      <div ref="cvContainer" 
           class="relative z-10 max-w-5xl mx-auto bg-[#4A5A37]/90 backdrop-blur-lg rounded-2xl shadow-xl border border-[#FFB430]/20 transform transition-all duration-1000"
           :class="{'opacity-0 translate-y-16': !isCvVisible, 'opacity-100 translate-y-0': isCvVisible}">
        <div class="p-6 sm:p-8">
          <cvViewer />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import cvViewer from '@/components/accueil/cvViewer'
  
  const isTitleVisible = ref(false)
  const isCvVisible = ref(false)
  const titleRef = ref(null)
  const cvContainer = ref(null)
  
  onMounted(() => {
    // Observer pour le titre
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isTitleVisible.value = true
            titleObserver.unobserve(entry.target)
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    )
  
    // Observer pour le conteneur CV
    const cvObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isCvVisible.value = true
            cvObserver.unobserve(entry.target)
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    )
  
    if (titleRef.value) {
      titleObserver.observe(titleRef.value)
    }
  
    if (cvContainer.value) {
      cvObserver.observe(cvContainer.value)
    }
  })
  </script>
  
  <style scoped>
  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(10px, -10px) rotate(5deg); }
    50% { transform: translate(0, -20px) rotate(0deg); }
    75% { transform: translate(-10px, -10px) rotate(-5deg); }
  }
  
  .animate-float {
    animation: float 12s ease-in-out infinite;
  }
  
  /* Optimisation des animations */
  .transform {
    will-change: transform, opacity;
  }
  
  /* Animation de survol pour le conteneur CV */
  .bg-\[\#4A5A37\]\/90 {
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  }
  
  .bg-\[\#4A5A37\]\/90:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
  }
  </style>