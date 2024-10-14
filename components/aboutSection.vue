<template>
  <div class="bg-gradient-to-br from-[#F2EED7] to-[#FEFAE0]">
    <div class="transition-bar bg-[#798645]"></div>
    <section ref="skillsRef" class="py-24  relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="i in 10" :key="i" class="absolute rounded-full opacity-10 animate-float" :style="{
          width: `${Math.random() * 300 + 50}px`,
          height: `${Math.random() * 300 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          backgroundColor: ['#798645', '#626F47', '#FFBF47'][Math.floor(Math.random() * 3)]
        }"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-5xl font-bold text-center text-[#626F47] mb-16">Mes Compétences</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div v-for="(categorySkills, category) in skills" :key="category" class="skill-category">
            <h3 class="text-3xl font-semibold text-[#798645] mb-8 capitalize relative">
              {{ category }}
              <span class="absolute bottom-0 left-0 w-16 h-1 bg-[#FFBF47] rounded-full"></span>
            </h3>
            <div
              class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <ul class="space-y-6">
                <li v-for="skill in categorySkills" :key="skill.name" class="group">
                  <div class="flex items-center space-x-4 mb-2">
                    <div
                      class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                      <img :src="skill.logo" :alt="skill.name"
                        class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p class="font-medium text-[#626F47] text-lg">{{ skill.name }}</p>
                      <p class="text-sm text-[#798645]">{{ skill.level }}</p>
                    </div>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
                    <div class="bg-[#FFBF47] h-2.5 rounded-full" :style="{ width: getSkillLevelWidth(skill.level) }">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'SkillsSection',
  setup() {
    const skillsRef = ref(null);

    const skills = ref({
      frontend: [
        { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 'Expérimenté' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Expérimenté' },
        { name: 'Nuxt', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg', level: 'Expérimenté' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 'Intermédiaire' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 'Expérimenté' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Expérimenté' },
      ],
      backend: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Expérimenté' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 'Intermédiaire' },
        { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', level: 'Intermédiaire' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 'Intermédiaire' },
      ],
      dataScience: [
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', level: 'Intermédiaire' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', level: 'Intermédiaire' },
        { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', level: 'Intermédiaire' },
      ],
      other: [
        { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', level: 'Notions' },
        { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', level: 'Notions' },
      ]
    });


    const getSkillLevelWidth = (level) => {
      switch (level) {
        case 'Expérimenté': return '90%';
        case 'Intermédiaire': return '60%';
        case 'Débutant': return '30%';
        default: return '50%';
      }
    };

    onMounted(() => {
      const skillCategories = skillsRef.value.querySelectorAll('.skill-category');

      skillCategories.forEach((category, index) => {
        gsap.from(category, {
          x: 100, // Commencer à 100px à droite de la position finale
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: category,
            start: 'top 80%',
          },
          delay: index * 0.2 // Ajouter un délai pour chaque catégorie
        });
      });
    });

    return {
      skills,
      skillsRef,
      getSkillLevelWidth,
    };
  },
};
</script>

<style scoped>
.skill-category {
  transition: transform 0.3s ease-in-out;
}

.skill-category:hover {
  transform: translateY(-5px);
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float linear infinite;
}

.transition-bar {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 4px;
  /* Adjust thickness here */
  border-radius: 2px;
  position: relative;
}
</style>