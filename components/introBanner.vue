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

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Experience Timeline -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        <!-- Left Column: Experience -->
        <div class="space-y-6 sm:space-y-8">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FEFAE0] mb-6 sm:mb-8">
            Mon Parcours
            <div class="h-1 w-16 sm:w-24 bg-[#EBA603] mt-2 rounded-full"></div>
          </h2>
          
          <div class="space-y-6 sm:space-y-8">
            <div v-for="(exp, index) in experience" 
                 :key="index"
                 class="relative pl-6 sm:pl-8 pb-6 sm:pb-8 group cursor-pointer"
                 :class="{'opacity-0 translate-y-8': !isVisible}"
                 :style="{
                   transition: `all 0.8s ease-out ${index * 0.2}s`,
                   opacity: isVisible ? 1 : 0,
                   transform: isVisible ? 'translateY(0)' : 'translateY(2rem)'
                 }">
              <div class="absolute left-0 top-0 h-full w-0.5 bg-[#EBA603] group-hover:scale-y-110 transition-transform duration-300"></div>
              <div class="absolute left-0 top-0 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#EBA603] -translate-x-[5px] sm:-translate-x-1.5 group-hover:scale-125 transition-transform duration-300"></div>
              <div class="space-y-2">
                <h3 class="text-lg sm:text-xl font-semibold text-[#FEFAE0]">{{ exp.title }}</h3>
                <p class="text-sm sm:text-base text-[#FEFAE0] opacity-80">{{ exp.period }}</p>
                <p class="text-sm sm:text-base text-[#FEFAE0] mt-2">{{ exp.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Skills & Stats -->
        <div class="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          <!-- Skills Section -->
          <div class="bg-[#FEFAE0]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <h3 class="text-xl sm:text-2xl font-bold text-[#FEFAE0] mb-4 sm:mb-6">Expertise Technique</h3>
            <div class="space-y-3 sm:space-y-4">
              <div v-for="skill in technicalSkills" 
                   :key="skill.name"
                   class="relative">
                <div class="flex justify-between mb-1 text-sm sm:text-base">
                  <span class="text-[#FEFAE0]">{{ skill.name }}</span>
                  <span class="text-[#EBA603]">{{ skill.level }}%</span>
                </div>
                <div class="h-1.5 sm:h-2 bg-[#FEFAE0]/20 rounded-full overflow-hidden">
                  <div class="h-full bg-[#EBA603] rounded-full transition-all duration-1000"
                       :style="{ width: isVisible ? `${skill.level}%` : '0%' }"></div>
                </div>
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

const experience = ref([
  {
    title: 'Master in Artificial Intelligence Expertise',
    period: '2023 - 2025',
    description: 'Advanced training in Artificial Intelligence, specializing in user clustering using K-means and other machine learning algorithms. Focus on project management, development of innovative AI-driven solutions, and conducting research in deep learning techniques.'
  },
  {
    title: 'Bachelor in Application Development and Design',
    period: '2022 - 2023',
    description: 'Comprehensive experience in dynamic application development, including web and mobile solutions. Learned project management principles and implemented full-stack development practices for creating robust, scalable applications.'
  },
  {
    title: 'BTS in IT Services for Organizations',
    period: '2020 - 2022',
    description: 'Acquired foundational skills in web development, system administration, and network management. Provided technical support and gained practical experience in IT infrastructure and troubleshooting.'
  }
])

const technicalSkills = ref([
  { name: 'Vue.js / Nuxt.js (Frontend)', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Responsive Design', level: 85 },
  { name: 'Frontend Architecture (Components, State Management)', level: 85 },
  { name: 'Web Performance Optimization', level: 80 },
  { name: 'Database Management (SQL & NoSQL)', level: 75 },
  { name: 'React', level: 75 },
  { name: 'Responsive Design', level: 85 },
  { name: 'UI/UX Design', level: 75 }
])


onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 }
  )

  const section = document.querySelector('section')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
@keyframes floating {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, 10px) rotate(5deg); }
  50% { transform: translate(0, 20px) rotate(0deg); }
  75% { transform: translate(-10px, 10px) rotate(-5deg); }
}

.animate-floating {
  animation: floating 8s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Responsive adjustments for very small screens */
@media (max-width: 360px) {
  .text-2xl {
    font-size: 1.25rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
  
  .p-4 {
    padding: 0.75rem;
  }
}
</style>