<template>
  <section class="bg-[#F5E6D3] text-[#004D3D] w-full px-4">
    <div class="noise-overlay"></div>
    <div class="max-w-8xl mx-auto relative z-10 h-full flex flex-col">
      <!-- Section Header -->
      <div class="text-center mb-8">
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-[#004D3D] magical-text">
          Featured Projects
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" 
             :key="project.name"
             class="group relative bg-[#ffffff] backdrop-blur-lg rounded-xl p-6 border border-[#298B6E]/20 hover:border-[#298B6E]/40 transition-all duration-300 hover:-translate-y-2 flex flex-col scale-95 h-[520px]"
             :style="`--delay: ${index * 0.2}s`">
          
          <!-- Project Image (40% of card height) -->
          <div class="relative h-[40%] mb-5 overflow-hidden rounded-lg">
            <img :src="project.image" 
                 :alt="project.name"
                 class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            
            <!-- Category Badge -->
            <span :class="`absolute top-3 right-3 px-3.5 py-1.5 rounded-full text-sm font-medium ${project.categoryColor} shadow-lg backdrop-blur-sm`">
              {{ project.category }}
            </span>
          </div>

          <!-- Project Header (12% of card height) -->
          <h3 class="text-2xl font-bold text-[#004D3D] mb-3 group-hover:text-[#298B6E] transition-colors h-[12%] line-clamp-1">
            {{ project.name }}
          </h3>

          <!-- Project Description (15% of card height) -->
          <p class="text-[#298B6E] text-base mb-5 line-clamp-2 h-[15%]">
            {{ project.description }}
          </p>

          <!-- Technologies (18% of card height) -->
          <div class="flex flex-wrap gap-2.5 mb-5 h-[18%]">
            <div v-for="tech in project.technologies" 
                 :key="tech"
                 class="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-colors">
              <img :src="getTechIcon(tech)" 
                   :alt="tech"
                   class="w-5 h-5" />
              <span class="text-sm font-medium text-[#004D3D]">{{ tech }}</span>
            </div>
          </div>

          <!-- Features (15% of card height) -->
          <div class="grid grid-cols-2 gap-x-4 gap-y-2.5 h-[15%]">
            <div v-for="feature in project.features.slice(0, 6)" 
                 :key="feature"
                 class="flex items-center text-sm text-[#298B6E] group-hover:text-[#004D3D] transition-colors">
              <span class="mr-2 text-[#004D3D]">◆</span>
              <span class="truncate">{{ feature }}</span>
            </div>
          </div>

          <!-- Hover Effect Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-[#004D3D]/0 via-transparent to-[#298B6E]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="floating-orbs opacity-50">
        <div v-for="n in 3" :key="n" 
             class="orb" 
             :style="{
               '--delay': `${n * 2}s`,
               '--size': `${90 + n * 35}px`,
               '--x': `${n * 30}%`,
               '--y': `${n * 20}%`
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
    technologies: ['Python', 'Scikit-learn', 'PostgreSQL', 'Tableau'],
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

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {
  0%, 100% {
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