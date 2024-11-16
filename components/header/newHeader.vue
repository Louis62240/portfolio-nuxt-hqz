<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav 
      class="mx-auto px-6 py-3 bg-gradient-to-r from-[#006A4E]/95 to-[#004D3D]/95 backdrop-blur-md transition-all duration-500"
      :class="{ 
        'shadow-lg shadow-[#004D3D]/20 py-2 translate-y-0': scrolled,
        'border-b border-[#004D3D] translate-y-0': !scrolled,
        '-translate-y-full': hiding
      }"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo section -->
        <NuxtLink 
          to="/" 
          class="group flex items-center space-x-2 transition-transform duration-500"
          aria-label="Accueil"
        >
          <div class="relative">
            <img 
              src="/images/logo.png"
              alt="Logo"
              class="w-12 h-12 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
            />
            <div class="absolute inset-0 bg-[#298B6E] rounded-full filter blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        </NuxtLink>

        <!-- Navigation Links - Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="(item, index) in navItems" 
            :key="index"
            :to="item.path"
            class="relative text-[#F5E6D3] font-medium transition-all duration-300 py-2 group"
          >
            <span class="relative z-10 transition-transform duration-300 block group-hover:-translate-y-1">
              {{ item.name }}
              <span class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transform translate-y-3 group-hover:opacity-40 group-hover:translate-y-0 transition-all duration-300">
                {{ item.name }}
              </span>
            </span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#298B6E] to-[#F5E6D3] group-hover:w-full transition-all duration-500"></span>
            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#298B6E] rounded-full scale-0 group-hover:scale-100 transition-all duration-300 delay-150"></span>
          </NuxtLink>
          
          <!-- CV Button -->
          <a
            href="/cv"
            class="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full overflow-hidden group"
            aria-label="Voir mon CV"
          >
            <span class="absolute inset-0 bg-gradient-to-br from-[#298B6E] to-[#006A4E] transition-all duration-500 group-hover:scale-105"></span>
            <span class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div class="absolute inset-0 bg-[#F5E6D3] mix-blend-overlay opacity-20"></div>
              <div class="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 animate-shimmer"></div>
            </span>
            <span class="relative z-10 text-[#F5E6D3] font-medium transition-all duration-300 group-hover:scale-105 flex items-center">
              Mon CV
              <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden relative w-10 h-10 focus:outline-none group"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Menu principal"
        >
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5 flex flex-col justify-between">
            <span 
              v-for="(_, i) in 3" 
              :key="i"
              class="w-full h-0.5 bg-[#F5E6D3] rounded-full origin-center transition-all duration-300"
              :class="[
                isMobileMenuOpen ? [
                  i === 0 && 'rotate-45 translate-y-2',
                  i === 1 && 'opacity-0 scale-0',
                  i === 2 && '-rotate-45 -translate-y-2'
                ] : [
                  i === 1 && 'w-3/4 group-hover:w-full',
                ]
              ]"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        v-show="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#006A4E]/95 to-[#004D3D]/95 backdrop-blur-md border-b border-[#004D3D] shadow-lg"
      >
        <div class="px-4 py-3 space-y-3">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            class="block px-4 py-2.5 text-[#F5E6D3] rounded-xl transition-all duration-300 hover:bg-[#004D3D]/40 hover:translate-x-2 group"
            @click="closeMobileMenu"
          >
            <span class="inline-flex items-center group-hover:scale-105 transition-all duration-300">
              {{ item.name }}
              <svg class="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </NuxtLink>
          <a
            href="/cv"
            class="block px-4 py-2.5 text-center rounded-xl bg-gradient-to-r from-[#298B6E] to-[#006A4E] text-[#F5E6D3] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#298B6E]/20 hover:scale-[1.02] active:scale-95"
            @click="closeMobileMenu"
          >
            Mon CV
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)

const scrolled = ref(false)

const hiding = ref(false)

const lastScrollY = ref(0)

const navItems = [

{ name: 'Expériences', path: '/experiences' },

{ name: 'Formations', path: '/formations' },

{ name: 'Projets', path: '/projets' },

]

const handleScroll = () => {

const currentScrollY = window.scrollY

scrolled.value = currentScrollY > 20

// Hide header on scroll down, show on scroll up

if (currentScrollY > lastScrollY.value && currentScrollY > 100) {

hiding.value = true

} else {

hiding.value = false

}

lastScrollY.value = currentScrollY

}

const toggleMobileMenu = () => {

isMobileMenuOpen.value = !isMobileMenuOpen.value

if (isMobileMenuOpen.value) {

document.body.style.overflow = 'hidden'

} else {

document.body.style.overflow = ''

}

}

const closeMobileMenu = () => {

isMobileMenuOpen.value = false

document.body.style.overflow = ''

}

onMounted(() => {

window.addEventListener('scroll', handleScroll)

})

onUnmounted(() => {

window.removeEventListener('scroll', handleScroll)

})

</script>
<style scoped>
.router-link-active {
  @apply text-[#F5E6D3] font-semibold;
}

.router-link-active::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#298B6E] to-[#F5E6D3] rounded-full;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(200%) skewX(-12deg); }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

#mobile-menu {
  transition: clip-path 0.5s ease-in-out;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

#mobile-menu[style*="display: block"] {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
</style>