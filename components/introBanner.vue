<template>
  <section
    class="relative flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-br from-[#F2EED7] to-[#FEFAE0] overflow-hidden px-4 sm:px-6 lg:px-8"
    ref="intro"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 10" :key="i" 
           class="absolute rounded-full opacity-10 animate-float"
           :style="{
             width: `${Math.random() * 300 + 50}px`,
             height: `${Math.random() * 300 + 50}px`,
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDuration: `${Math.random() * 10 + 5}s`,
             animationDelay: `${Math.random() * 5}s`,
             backgroundColor: ['#798645', '#626F47', '#FFBF47'][Math.floor(Math.random() * 3)]
           }"
      ></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#626F47] mb-6 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          :class="{ 'opacity-100 translate-y-0': isVisible }">
        Bonjour, je suis <br class="sm:hidden">
        <span class="text-[#798645] relative inline-block mt-2 sm:mt-0">
          {{ fullName }}
          <svg class="absolute left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7" stroke="#FFBF47" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>
        </span>
      </h1>
      
      <p class="text-lg sm:text-xl md:text-2xl text-[#626F47] mb-10 max-w-3xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000 delay-300 ease-out"
         :class="{ 'opacity-100 translate-y-0': isVisible }">
        {{ description }}
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 transform translate-y-8 transition-all duration-1000 delay-600 ease-out"
           :class="{ 'opacity-100 translate-y-0': isVisible }">
        <button
          @click="scrollToProjects"
          class="bg-[#798645] text-[#FEFAE0] px-8 py-4 rounded-full shadow-lg hover:bg-[#626F47] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFBF47] focus:ring-opacity-50"
        >
          Découvrez mes projets
        </button>
        <button
          @click="openContactModal"
          class="border-2 border-[#798645] text-[#798645] px-8 py-4 rounded-full shadow-lg hover:bg-[#798645] hover:text-[#FEFAE0] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFBF47] focus:ring-opacity-50"
        >
          Contactez-moi
        </button>
      </div>

      <!-- Skills carousel with logos -->
    <div class="mt-16 overflow-hidden w-full" v-if="isVisible">
      <div class="flex animate-carousel">
        <div v-for="skill in skills" :key="skill.name" 
             class="flex items-center flex-shrink-0 px-4 py-2 m-2 bg-[#FEFAE0] rounded-full text-[#626F47] font-medium"
             :title="skill.level">
          <img :src="skill.logo" :alt="skill.name" class="w-6 h-6 mr-2" />
          {{ skill.name }}
        </div>
      </div>
    </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <svg class="w-6 h-6 text-[#626F47]" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>

    <!-- Social media links -->
    <div class="absolute bottom-10 right-10 flex space-x-4">
      <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer"
         class="text-[#626F47] hover:text-[#FFBF47] transition duration-300">
        <component :is="social.icon" class="w-6 h-6" />
      </a>
    </div>

    <!-- Contact Modal -->
    <div v-if="showContactModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4 text-[#626F47]">Contactez-moi</h2>
        <form @submit.prevent="submitContact">
          <input type="email" v-model="contactEmail" placeholder="Votre email" class="w-full p-2 mb-4 border rounded" required>
          <textarea v-model="contactMessage" placeholder="Votre message" class="w-full p-2 mb-4 border rounded" rows="4" required></textarea>
          <div class="flex justify-end">
            <button type="button" @click="closeContactModal" class="mr-2 px-4 py-2 text-[#626F47] hover:text-[#798645]">Annuler</button>
            <button type="submit" class="px-4 py-2 bg-[#798645] text-white rounded hover:bg-[#626F47]">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import gsap from 'gsap';
import Parse from 'parse/dist/parse.min.js';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-vue-next'

// Références réactives
const intro = ref(null);
const profiles = ref([]);
const lastName = ref('');
const firstName = ref('');
const description = ref('');
const isVisible = ref(false);
const showContactModal = ref(false)
const contactEmail = ref('')
const contactMessage = ref('')
const skills = [
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 'Expérimenté' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Expérimenté' },
  { name:'Nuxt', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg', level: 'Expérimenté' },
  { name:'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 'Intermédiaire' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 'Expérimenté' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Expérimenté' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Expérimenté' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 'Intermédiaire' },
  { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', level: 'Intermédiaire' },
  { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', level: 'Intermédiaire' },
  { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', level: 'Intermédiaire' },
  { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', level: 'Notions' },
  { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', level: 'Notions' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 'Intermédiaire' },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', level: 'Intermédiaire' },
]

// Computed property pour le nom complet
const fullName = computed(() => `${firstName.value} ${lastName.value}`.trim());
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: GithubIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedinIcon },
  { name: 'Twitter', url: 'https://twitter.com', icon: TwitterIcon },
]
// Fonction pour récupérer les données depuis Parse
const fetchUserData = async () => {
  try {
    const UserQuery = Parse.Object.extend('InformationsPerso');
    const query = new Parse.Query(UserQuery);
    const results = await query.find();

    if (results.length > 0) {
      const user = results[0];
      lastName.value = user.get('lastName') || '';
      firstName.value = user.get('firstName') || '';
      description.value = user.get('description') || '';
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
};

// Fonction pour l'animation GSAP
const animateIntro = () => {
  gsap.fromTo(
    intro.value.children,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
  );
};
const scrollToProjects = () => {
  // Implement smooth scrolling to projects section
  console.log('Scrolling to projects')
}

const openContactModal = () => {
  showContactModal.value = true
}

const closeContactModal = () => {
  showContactModal.value = false
  contactEmail.value = ''
  contactMessage.value = ''
}

const submitContact = () => {
  // Implement contact form submission logic here
  console.log('Submitting contact form', { email: contactEmail.value, message: contactMessage.value })
  closeContactModal()
}
// Récupération des données et animation lors du montage
onMounted(async () => {
  await fetchUserData();
  animateIntro();
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 }
  )

  if (intro.value) {
    observer.observe(intro.value)
  }
});
</script>
<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float linear infinite;
}

@keyframes carousel {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animate-carousel {
  animation: carousel 20s linear infinite;
}
</style>