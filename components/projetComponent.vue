<template>
  <section class="bg-amber-50 text-[#004D3D] w-full px-4 min-h-screen">
    <div class="max-w-8xl mx-auto relative z-10 h-full flex flex-col">
      <!-- Section Header avec animation améliorée -->
      <!-- Section Header avec bouton -->
      <div class="flex flex-col md:flex-row justify-center items-center mb-12 reveal-text gap-8 ">
        <div class="text-center md:text-left animate-slide-in reveal-item ">
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-[#004D3D] magical-text">
            Featured Projects
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-[#004D3D] to-[#298B6E] mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        <!-- Show More Button repositionné -->
        <button v-if="!showingAll" @click="showMore"
          class="reveal-item  group relative px-6 py-3 magical-button text-white rounded-xl  transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg">
          <span class="relative z-10 flex items-center text-sm md:text-base whitespace-nowrap">
            View More
            <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <span
            class="absolute inset-0 bg-gradient-to-r from-[#004D3D] to-[#298B6E] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
      </div>

      <!-- Projects Grid avec animation de défilement -->
      <div name="project-list" tag="div" class="grid grid-cols-1 lg:grid-cols-3 gap-8 transition-property: transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms; ">
        <div v-for="(project, index) in displayedProjects" :key="project.name"
          class="group relative bg-[#ffffff] backdrop-blur-lg rounded-xl p-6 border border-[#298B6E]/20 hover:border-[#298B6E]/40 transition-all duration-500 reveal-item  hover:-translate-y-2 flex flex-col scale-95 h-[520px]"
          :class="{ 'appear-animation': index >= 3 }" v-intersection-observer="{ threshold: 0.2 }"
          @intersect="handleIntersect" :style="`--delay: ${index * 0.15}s`">

          <!-- Image Container avec Hover Effect amélioré -->
          <div
            class="relative h-[40%] mb-5 overflow-hidden rounded-lg group-hover:shadow-xl transition-shadow duration-500">
            <img :src="project.image" :alt="project.name"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />

            <!-- Badge Category avec animation -->
            <span
              :class="`absolute top-3 right-3 px-3.5 py-1.5 rounded-full text-sm font-medium ${project.categoryColor} shadow-lg backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300`">
              {{ project.category }}
            </span>
          </div>

          <!-- Project Title avec effet de surlignage -->
          <h3
            class="text-2xl font-bold text-[#004D3D] mb-3 group-hover:text-[#298B6E] transition-colors duration-300 h-[12%] line-clamp-1 relative overflow-hidden">
            <span class="relative z-10">{{ project.name }}</span>
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#298B6E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </h3>

          <!-- Description avec fade effect -->
          <p
            class="text-[#298B6E] text-base mb-5 line-clamp-2 h-[15%] transition-opacity duration-300 group-hover:opacity-90">
            {{ project.description }}
          </p>

          <!-- Technologies avec animation au survol -->
          <div class="flex flex-wrap gap-2.5 mb-5 h-[18%]">
            <div v-for="tech in project.technologies" :key="tech"
              class="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300 hover:scale-105 cursor-pointer">
              <img :src="getTechIcon(tech)" :alt="tech"
                class="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
              <span class="text-sm font-medium text-[#004D3D]">{{ tech }}</span>
            </div>
          </div>

          <!-- Features avec icônes animées -->
          <div class="grid grid-cols-2 gap-x-4 gap-y-2.5 h-[15%]">
            <div v-for="feature in project.features.slice(0, 6)" :key="feature"
              class="flex items-center text-sm text-[#298B6E] group-hover:text-[#004D3D] transition-colors duration-300">
              <span
                class="mr-2 text-[#004D3D] transform group-hover:scale-110 transition-transform duration-300">◆</span>
              <span class="truncate">{{ feature }}</span>
            </div>
          </div>

          <!-- Gradient overlay amélioré -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-[#004D3D]/5 via-transparent to-[#298B6E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl">
          </div>
        </div>
      </div>

    </div>

    <!-- Background Elements améliorés -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="floating-orbs opacity-30">
        <div v-for="n in 5" :key="n" class="orb" :style="{
          '--delay': `${n * 1.5}s`,
          '--size': `${70 + n * 30}px`,
          '--x': `${n * 25}%`,
          '--y': `${n * 15}%`
        }">
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const projects = [
  {
    name: "E-Commerce User Clustering Analysis",
    description: "Advanced customer segmentation system using clustering algorithms to identify user patterns and optimize marketing strategies in e-commerce platforms",
    category: "Data Analytics",
    categoryColor: "bg-blue-100 text-blue-600",
    date: "2024",
    technologies: ['Python', 'Scikit-learn', 'PostgreSQL'],
    image: "/images/amazing.png",
    features: [
      "Customer behavioral segmentation",
      "RFM Analysis (Recency, Frequency, Monetary)",
      "Purchase pattern profiling",
      "Shopping trend prediction",
      "Analytics dashboards",
      "Segment-based personalized recommendations",
      "High-value customer identification",
      "Shopping cart analysis",
      "Customer lifetime value prediction"
    ]
  },
  {
    name: "Interactive Cardiac Therapy",
    description: "Therapeutic application for monitoring and analyzing cardiac exercises with connected sensor",
    category: "Healthcare Application",
    categoryColor: "bg-blue-100 text-blue-600",
    date: "2023-2024",
    technologies: ['Vue.js', 'Node.js', 'Parse Server'],
    image: "/images/symbiocenter.png",
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
    image: "/images/arosaje.png",
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
  },
  {
    name: "MoodAI",
    description: "VueJS platform that creates playlists based on mood detection",
    category: "Web Application",
    categoryColor: "bg-purple-100 text-purple-600",
    date: "2023",
    technologies: ['Vue.js', 'Node.js', 'TensorFlow.js'],
    image: "/images/spotifygenerate.png",
    features: [
      "Mood detection",
      "Playlist generation",
      "Music recommendations",
      "User profiles",
      "Mood history tracking",
      "Playlist sharing"
    ]
  },
  {
    name: "Manga Chapter Tracker",
    description: "Flask application that tracks and notifies about new manga chapter releases",
    category: "Web Application",
    categoryColor: "bg-red-100 text-red-600",
    date: "2023",
    technologies: ['Python', 'Flask', 'BeautifulSoup'],
    image: "/images/mangaplus2.png",
    features: [
      "Chapter notifications",
      "Release tracking",
      "Reading history",
      "Series management",
      "Custom alerts",
      "Web scraping"
    ]
  },
  {
    name: "English Vocabulary Builder",
    description: "VueJS platform for saving and auto-translating unknown English words",
    category: "Educational Tool",
    categoryColor: "bg-yellow-100 text-yellow-600",
    date: "2023",
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    image: "/images/englishlearning2.png",
    features: [
      "Auto translation",
      "Word storage",
      "Progress tracking",
      "Flashcard system",
      "Practice quizzes",
      "Word categorization"
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
    'Parse Server': 'https://parseplatform.org/img/logo.svg',
    'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Tableau': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg',
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    'BeautifulSoup': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', // Utilisation de l'icône Python car BeautifulSoup est une bibliothèque Python
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'TensorFlow.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
  }
  return icons[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' // Icône par défaut si non trouvée
}

const displayLimit = ref(6)
const showingAll = computed(() => displayLimit.value >= projects.length)
const displayedProjects = computed(() => projects.slice(0, displayLimit.value))

const showMore = () => {
  displayLimit.value = Math.min(displayLimit.value + 3, projects.length)
}
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
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
.noise-overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  mix-blend-mode: soft-light;
}

.orb {
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: var(--x);
  top: var(--y);
  background: radial-gradient(circle at 30% 30%, rgba(0, 106, 78, 0.1), transparent);
  border-radius: 50%;
  filter: blur(40px);
  animation: float calc(10s + var(--delay)) ease-in-out infinite;
}

.magical-text {
  background: linear-gradient(45deg, #004D3D, #298B6E);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient-shift 8s ease infinite;
}

.magical-button
{
  background: linear-gradient(45deg, #006A4E, #298B6E, #006A4E);
}
.reveal-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-item.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes gradient-shift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-20px, -20px);
  }
}

/* Responsive adjustments */
@media (max-height: 800px) {

  .text-2xl {
    font-size: 1.25rem;
  }

  .mb-4 {
    margin-bottom: 0.75rem;
  }

  .py-16 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

</style>