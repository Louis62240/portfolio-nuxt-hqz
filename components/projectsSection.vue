<template>
  <section class="relative min-h-screen w-full bg-[#3D4A2D] overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
    <!-- Particules d'arrière-plan -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="n in 30" :key="n" 
           class="absolute animate-float opacity-20"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 8}s`,
             transform: `scale(${0.5 + Math.random()})`
           }">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2L2 19H22L12 2Z" fill="#FFB430"/>
        </svg>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-7xl mx-auto">
      <h2 ref="titleRef" 
          class="text-4xl font-bold text-[#FFF8E8] mb-12 text-center transform transition-all duration-1000"
          :class="{'opacity-0 translate-y-10': !isTitleVisible, 'opacity-100 translate-y-0': isTitleVisible}">
        Mes Projets
        <div class="h-1 w-24 bg-[#FFB430] mx-auto mt-4 rounded-full transform transition-all duration-1000 delay-300"
             :class="{'scale-x-0': !isTitleVisible, 'scale-x-100': isTitleVisible}"></div>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" 
             :key="project.id"
             class="group transform transition-all duration-700"
             :class="{'opacity-0 translate-y-16': !isVisible, 'opacity-100 translate-y-0': isVisible}"
             :style="{
               transitionDelay: `${index * 150}ms`
             }">
          
          <!-- Carte de projet -->
          <div class="bg-[#4A5A37]/90 backdrop-blur-lg rounded-2xl overflow-hidden transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-[#FFB430]/20">
            <!-- Le reste du contenu de la carte reste identique -->
            <div class="relative h-48 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-[#3D4A2D] to-[#4A5A37]">
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-5xl text-[#FFF8E8]/80">{{ project.icon }}</span>
                </div>
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold text-[#FFF8E8] mb-2">{{ project.name }}</h3>
              <p class="text-[#FFF8E8]/80 text-sm mb-4">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" 
                      :key="tech"
                      class="px-3 py-1 text-xs rounded-full bg-[#FFB430]/10 text-[#FFD47F] border border-[#FFB430]/30 hover:bg-[#FFB430]/20 transition-colors duration-300">
                  {{ tech }}
                </span>
              </div>

              <div class="flex justify-between items-center mt-6">
                <a v-if="project.demoLink" 
                   :href="project.demoLink" 
                   target="_blank"
                   class="flex items-center gap-2 text-[#FFB430] hover:text-[#FFD47F] transition-colors">
                  <span>Voir le projet</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a v-if="project.githubLink" 
                   :href="project.githubLink" 
                   target="_blank"
                   class="text-[#FFF8E8]/70 hover:text-[#FFB430] transition-colors">
                  <i class="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const isTitleVisible = ref(false)
const titleRef = ref(null)

onMounted(() => {
  // Observer pour les cartes de projets
  const cardsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
          cardsObserver.unobserve(entry.target)
        }
      })
    },
    { 
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    }
  )

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

  const section = document.querySelector('section')
  if (section) {
    cardsObserver.observe(section)
  }

  if (titleRef.value) {
    titleObserver.observe(titleRef.value)
  }
})

const projects = ref([
  {
    id: 1,
    name: "E-commerce Platform",
    description: "Plateforme e-commerce complète avec système de panier, paiement intégré et gestion des commandes en temps réel",
    icon: "🛍️",
    technologies: ['Nuxt 3', 'Vue', 'TailwindCSS', 'Stripe', 'Node.js'],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 2,
    name: "Dashboard Analytics",
    description: "Tableau de bord analytique avec visualisations de données dynamiques et rapports personnalisables",
    icon: "📊",
    technologies: ['Nuxt 3', 'TypeScript', 'D3.js', 'Socket.io'],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 3,
    name: "Task Management",
    description: "Application collaborative de gestion de projets avec fonctionnalités en temps réel",
    icon: "✅",
    technologies: ['Nuxt 3', 'Pinia', 'Firebase', 'TailwindCSS'],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
  },
])
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

@media (hover: hover) and (pointer: fine) {
  .group:hover .group-hover\:scale-\[1\.02\] {
    transform: scale(1.02);
  }
}

/* Optimisation des animations pour réduire la consommation GPU */
.transform {
  will-change: transform, opacity;
}
</style>