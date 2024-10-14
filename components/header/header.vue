<template>
  <header ref="header" class="
      fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out 
      border-b bg-[#798645] border-transparent shadow-lg" :class="{ 'h-24': !scrolled, 'h-20': scrolled }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
      <div class="flex items-center space-x-4">
        <img src="@/assets/images/logo.png" alt="Logo"
          class="h-16 w-16 transition-all duration-300 transform hover:scale-110" />
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <ul class="flex space-x-8">
          <li v-for="(link, index) in links" :key="link.name"
            class="transform transition-all duration-300 hover:translate-y-[-2px]"
            :style="{ animationDelay: `${index * 100}ms` }">
            <a @click="scrollToSection(link.nameRef)" :class="[
              'flex items-center space-x-2 transition-all duration-300',
              'text-[#F2EED7] hover:text-[#FFBF47] hover:bg-[#626F47] hover:shadow-lg',
              'rounded-lg px-3 py-2 font-medium'
            ]">
              <component :is="link.icon" class="h-5 w-5" />
              <span>{{ link.name }}</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden focus:outline-none text-[#F2EED7] transition-transform duration-300 hover:scale-110"
        @click="toggleMenu">
        <MenuIcon v-if="!isMenuOpen" class="h-6 w-6" />
        <XIcon v-else class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <nav v-if="isMenuOpen" class="md:hidden bg-[#FEFAE0] shadow-lg absolute w-full left-0 top-full">
      <ul class="flex flex-col space-y-2 px-4 py-4">
        <li v-for="(link, index) in links" :key="link.name"
          class="transform transition-all duration-300 hover:translate-x-2"
          :style="{ animationDelay: `${index * 100}ms` }">
          <a @click="scrollToSection(link.nameRef)"
            :class="['flex items-center space-x-2 text-[#798645] font-medium', 'hover:text-[#FFBF47] transition-all duration-300 py-2']">
            <component :is="link.icon" class="h-5 w-5" />
            <span>{{ link.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  MailIcon
} from '@heroicons/vue/outline';

const isMenuOpen = ref(false);
const scrolled = ref(false);

const emit = defineEmits(['scroll-to']);

const links = [
  { name: 'Accueil', nameRef:'home', icon: HomeIcon },
  { name: 'Mes compétences', nameRef:'skills', icon: UserIcon },
  { name: 'Mes projets', nameRef:'projects', icon: BriefcaseIcon },
  { name: 'Contact', nameRef:'contact', icon: MailIcon },
];


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    gsap.fromTo(
      mobileMenu.value,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  }

};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const scrollToSection = (sectionRef) => {
  console.log(sectionRef);
  //envoyer au component parent
  emit('scroll-to', sectionRef);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

li {
  animation: fadeInDown 0.5s ease-out forwards;
  opacity: 0;
}

@media (max-width: 768px) {
  nav {
    transition: max-height 0.3s ease-out;
    max-height: 0;
    overflow: hidden;
  }

  nav.open {
    max-height: 300px;
  }
}
</style>
