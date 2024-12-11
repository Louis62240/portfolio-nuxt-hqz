<template>
  <section class="py-16 bg-gradient-to-b from-[#F5E6D3] to-white text-[#004D3D] w-full">
    <div class="max-w-7xl mx-auto px-4">
      <div class="mb-16 text-center reveal-item">
        <span class="text-[#2A9D8F] font-medium mb-2 block">MY PROJECTS</span>
        <h2 class="text-5xl font-bold text-[#264653] mb-4">Latest Works</h2>
        <p class="text-[#4A4A4A] text-lg max-w-2xl mx-auto">Discover my recent projects showcasing web development, 
          AI integration, and creative problem-solving.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="reveal-item group h-full"
        >
          <div class="relative bg-white rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
            <!-- Project Image -->
            <div class="relative h-64 overflow-hidden flex-shrink-0">
              <img 
                src="/images/illustration_web.jpg"
                :alt="project.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <div class="flex gap-3">
                    <a 
                      v-if="project.demoUrl"
                      :href="project.demoUrl" 
                      target="_blank"
                      class="px-4 py-2 bg-[#2A9D8F] text-white rounded-lg text-sm font-medium hover:bg-[#264653] transition-colors duration-300 flex items-center gap-2"
                    >
                      <Icon name="mdi:web" class="w-5 h-5" />
                      Live Demo
                    </a>
                    <a 
                      v-if="project.githubUrl"
                      :href="project.githubUrl"
                      target="_blank"
                      class="px-4 py-2 bg-white/90 text-[#264653] rounded-lg text-sm font-medium hover:bg-[#264653] hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      <Icon name="mdi:github" class="w-5 h-5" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-8 flex-grow flex flex-col">
              <div class="flex items-center gap-3 mb-4">
                <span 
                  class="px-3 py-1 text-xs font-semibold rounded-full"
                  :class="project.categoryColor"
                >
                  {{ project.category }}
                </span>
                <span class="text-sm text-gray-500">{{ project.date }}</span>
              </div>

              <h3 class="text-2xl font-bold text-[#264653] mb-3 group-hover:text-[#2A9D8F] transition-colors duration-300">
                {{ project.name }}
              </h3>
              
              <p class="text-[#4A4A4A] text-base mb-6 line-clamp-2">{{ project.description }}</p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mt-auto">
                <span
                  v-for="(tech, techIndex) in project.technologies"
                  :key="techIndex"
                  class="inline-flex items-center px-3 py-1 rounded-lg bg-[#F5F2EB] text-xs font-medium text-[#2A9D8F]"
                >
                  <img
                    :src="getTechIcon(tech)"
                    class="w-4 h-4 mr-1.5"
                    :alt="tech"
                  >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Hover Overlay for Key Features -->
            <div class="absolute inset-0 bg-[#264653]/95 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-0">
              <h4 class="text-white font-semibold text-lg mb-4">Key Features</h4>
              <ul class="space-y-3">
                <li
                  v-for="(feature, featureIndex) in project.features"
                  :key="featureIndex"
                  class="text-white/90 text-sm flex items-start"
                >
                  <Icon name="mdi:check-circle" class="w-5 h-5 mr-2 text-[#2A9D8F] shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const projects = [
  {
    name: "Spotify Music Recommendation",
    description: "Personalized music recommendation application using clustering and Spotify API to analyze user preferences",
    category: "AI Application", 
    categoryColor: "bg-purple-100 text-purple-600",
    date: "2024",
    technologies: ['Python', 'FastAPI', 'Vue.js'],
    features: [
      "Music preferences clustering",
      "Spotify API integration",
      "Personalized recommendations", 
      "Music taste analysis",
      "Interactive user interface"
    ]
  },
  {
    name: "Interactive Cardiac Therapy",
    description: "Therapeutic application for monitoring and analyzing cardiac exercises with connected sensor",
    category: "Healthcare Application",
    categoryColor: "bg-blue-100 text-blue-600", 
    date: "2023-2024",
    technologies: ['Vue.js', 'Node.js', 'Parse Server'],
    features: [
      "User management",
      "Therapeutic exercise tracking",
      "Heart sensor integration",
      "Expert monitoring",
      "Unity interface",
      "Results analysis"
    ]
  },
  {
    name: "Plant Care Connect",
    description: "Platform to find people to water your plants while on vacation",
    category: "Web Application",
    categoryColor: "bg-green-100 text-green-600",
    date: "2022", 
    technologies: ['React', 'FastAPI'],
    features: [
      "Interactive map",
      "Listing management",
      "Matching system",
      "Intuitive user interface", 
      "Listing geolocation",
      "CI/CD Testing"
    ]
  }
]

const getTechIcon = (tech) => {
  const icons = {
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', 
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Parse Server': 'https://parseplatform.org/img/logo.svg'
  }
  return icons[tech]
}
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  })

  document.querySelectorAll('.reveal-item').forEach(item => {
    observer.observe(item)
  })

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<style scoped>
.reveal-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-item.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 640px) {
  .grid {
    gap: 1.5rem;
  }
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>