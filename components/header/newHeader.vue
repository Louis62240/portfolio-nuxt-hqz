<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <img
        src="@/assets/images/newlogowhite.png"
        alt="Logo"
        class="logo h-16 w-16 hover:scale-105 transition-transform duration-300"
      />

      <!-- Navigation desktop -->
      <nav class="hidden md:block">
        <ul class="flex gap-8">
          <li v-for="item in menuItems" :key="item.section">
            <button 
              @click="goTo(item.section)"
              class="nav-link text-white text-base font-semibold px-4 py-2 
                     rounded-lg hover:bg-white/10 transition-all duration-300
                     relative overflow-hidden"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Menu mobile -->
      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
      >
        <div class="w-6 space-y-2">
          <span class="block w-full h-0.5 bg-white"></span>
          <span class="block w-full h-0.5 bg-white"></span>
          <span class="block w-full h-0.5 bg-white"></span>
        </div>
      </button>
    </div>

    <!-- Menu mobile dropdown -->
    <div 
      v-if="isMenuOpen"
      class="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10"
    >
      <nav class="px-6 py-4">
        <button 
          v-for="item in menuItems" 
          :key="item.section"
          @click="goTo(item.section); isMenuOpen = false"
          class="block w-full text-left text-white hover:bg-white/10 
                 rounded-lg px-4 py-3 mb-2 font-semibold transition-colors
                 text-base"
        >
          {{ item.label }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const menuItems = [
  { label: 'Formations', section: 'formations' },
  { label: 'Compétences', section: 'competences' },
  { label: 'Projets', section: 'projets' },
  { label: 'CV', section: 'cv' }
];

const emit = defineEmits(['goTo']);

function goTo(section) {
  emit('goTo', section);
}
</script>

<style scoped>
.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffffff, transparent);
  transition: width 0.3s ease;
}

.nav-link:hover::before {
  width: 80%;
}

/* Effet de brillance au hover */
.nav-link::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: 0.5s;
}

.nav-link:hover::after {
  left: 100%;
}

/* Animation pour le menu mobile */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.md\:hidden nav {
  animation: slideDown 0.3s ease-out;
}

/* Effet actif sur les boutons */
button:active {
  transform: scale(0.98);
}

/* Shadow subtil pour le header */
header {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .nav-link {
    font-size: 1rem;
    padding: 0.75rem 1rem;
  }
}
</style>