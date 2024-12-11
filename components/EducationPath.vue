<template>
<<<<<<< HEAD
  <section class="py-12 bg-[#F5E6D3] text-[#004D3D] w-full">
    <div class="max-w-6xl mx-auto px-4">
      <div class="mb-12 text-center reveal-item">
        <h2 class="text-4xl font-bold text-[#264653] mb-3">{{ title }}</h2>
        <p class="text-[#4A4A4A] text-lg">{{ description }}</p>
      </div>

      <div class="space-y-8">
        <div v-for="(item, index) in educationTimeline" :key="index" 
             class="reveal-item hover:transform hover:scale-[1.02] transition-all duration-300">
          <div class="bg-white rounded-2xl shadow-custom hover:shadow-custom-hover transition-all duration-300 p-8 border-l-8 border-[#2A9D8F]">
            <div class="flex flex-wrap items-start gap-6">
              <div class="shrink-0">
                <span class="text-3xl font-bold text-[#2A9D8F]">{{ item.year }}</span>
                <p class="text-sm text-[#4A4A4A] mt-1">{{ item.duration }}</p>
=======
    <section class="min-h-screen bg-[#F5E6D3] text-[#004D3D] py-20 relative overflow-hidden w-full">
      <!-- Background gradient effect -->
      <div class="noise-overlay"></div>
  
      <!-- Floating elements -->
      <div class="floating-elements">
        <div v-for="n in 20" :key="n" 
             class="floating-element"
             :style="{
               '--delay': `${n * 0.5}s`,
               '--size': `${20 + Math.random() * 30}px`,
               '--x': `${Math.random() * 100}vw`,
               '--y': `${Math.random() * 100}vh`
             }">
        </div>
      </div>

      <div class="geometric-pattern fade-in" style="--animation-delay: 0.3s"></div>
      <div class="container-full relative z-10">
        <!-- Section header -->
        <div class="text-center mb-32 reveal-text">
          <h2 class="text-6xl font-bold tracking-tight magical-underline">Parcours Académique</h2>
          <p class="text-xl mt-6 text-[#298B6E] max-w-2xl mx-auto">
            Une progression constante dans le développement web et l'informatique
          </p>
        </div>
  
        <!-- Timeline -->
        <div class="education-timeline">
          <!-- 2023-2024 -->
          <div class="timeline-item reveal-item">
            <div class="timeline-content">
              <div class="time-period">
                <span class="year">2023</span>
                <span class="duration">Présent</span>
>>>>>>> e7c0149071d293602912cc65759c365bc6fc2aeb
              </div>

              <div class="flex-1 min-w-[280px]">
                <div class="flex items-start justify-between mb-2">
                  <h3 class="text-2xl font-semibold text-[#264653]">{{ item.title }}</h3>
                  <div class="flex items-center text-[#2A9D8F] cursor-pointer hover:text-[#264653] transition-colors"
                       @click="toggleMap(index)">
                    <Icon name="mdi:map-marker" class="w-5 h-5 mr-1" />
                    <span class="text-sm">{{ item.location }}</span>
                  </div>
                </div>
                
                <p class="text-[#4A4A4A] text-base mb-4">{{ item.subtitle }}</p>

                <!-- Carte -->
                <div v-if="activeMap === index" 
                     class="w-full h-48 mb-4 rounded-lg overflow-hidden transition-all duration-300">
                  <iframe
                    :src="item.mapUrl"
                    class="w-full h-full border-0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>

                <div class="flex flex-wrap gap-3 mb-6">
                  <span v-for="(skill, skillIndex) in item.skills" :key="skillIndex"
                    class="px-4 py-2 text-sm font-medium bg-[#F5F2EB] text-[#2A9D8F] rounded-lg flex items-center
                    hover:bg-[#2A9D8F] hover:text-white transition-colors duration-300">
                    <img :src="getSkillIcon(skill)" class="w-5 h-5 mr-2" :alt="skill">
                    {{ skill }}
                  </span>
                </div>

                <ul class="space-y-3">
                  <li v-for="(achievement, achievementIndex) in item.achievements" :key="achievementIndex"
                    class="text-base text-[#4A4A4A] flex items-start">
                    <span class="mr-3 text-[#2A9D8F] text-xl">•</span>
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const title = "Academic Journey"
const description = "A constant progression in web development and computer science"
const activeMap = ref(null)

const toggleMap = (index) => {
  activeMap.value = activeMap.value === index ? null : index
}
const educationTimeline = [
  {
    year: "2023",
    duration: "Present",
    title: "Master's Degree in AI Engineering",
    subtitle: "Expert in Artificial Intelligence",
    location: "EPSI Lille",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5544849.817188305!2d2.3522219!3d46.227638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1629890876584!5m2!1sfr!2sfr&markers=color:red%7C50.633386,3.044890",
    skills: ['Machine Learning', 'Clustering', 'Data Science', 'Python', 'Deep Learning', 'Neural Networks'],
    achievements: [
      "AI fundamentals and advanced concepts",
      "Machine learning algorithms implementation",
      "Data analysis and processing"
    ]
  },
  {
    year: "2022",
    duration: "1 year",
    title: "Bachelor's Degree in Application Development",
    subtitle: "Application Designer and Developer",
    location: "EPSI Lille",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5544849.817188305!2d2.3522219!3d46.227638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1629890876584!5m2!1sfr!2sfr&markers=color:red%7C50.633386,3.044890",
    skills: ['JavaScript', 'React', 'Node.js', 'Vue.js', 'REST APIs', 'MongoDB'],
    achievements: [
      "Dynamic web applications development",
      "Modern JavaScript frameworks",
      "Full-stack development"
    ]
  },
  {
    year: "2020",
    duration: "2 years",
    title: "BTS SIO SLAM",
    subtitle: "IT Services for Organizations",
    location: "Lycée Saint Joseph - Boulogne-sur-Mer",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5544849.817188305!2d2.3522219!3d46.227638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1629890876584!5m2!1sfr!2sfr&markers=color:red%7C50.725777,1.608097",
    skills: ['HTML/CSS', 'PHP', 'Java', 'SQL', 'OOP', 'Git'],
    achievements: [
      "Web development fundamentals",
      "Object-oriented programming basics",
      "Database management"
    ]
  }
]
const getSkillIcon = (skill) => {
  const icons = {
    'Machine Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'Clustering': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    'Data Science': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Deep Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Neural Networks': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'OOP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  }
  return icons[skill] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'
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
.reveal-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.shadow-custom {
  box-shadow: 0 4px 6px -1px rgba(42, 157, 143, 0.1), 
              0 2px 4px -1px rgba(42, 157, 143, 0.06);
}

.shadow-custom-hover {
  box-shadow: 0 10px 15px -3px rgba(42, 157, 143, 0.15), 
              0 4px 6px -2px rgba(42, 157, 143, 0.1);
}

@media (max-width: 640px) {
  .education-timeline {
    padding: 0;
  }
  
  div[class*="space-y-8"] {
    margin: 0 -1rem;
  }
  
  div[class*="rounded-2xl"] {
    border-radius: 0;
    padding: 1.5rem;
  }
}
iframe {
  transform-origin: top;
  animation: mapFadeIn 0.3s ease-out;
}

@keyframes mapFadeIn {
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>