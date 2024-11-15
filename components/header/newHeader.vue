<!-- components/TheHeader.vue -->
<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav 
      class="mx-auto px-6 py-3 bg-[#55423d]/95 backdrop-blur-md transition-all duration-300"
      :class="{ 
        'shadow-lg shadow-[#271c19]/20 py-2': scrolled,
        'border-b border-[#271c19]': !scrolled 
      }"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink 
          to="/" 
          class="group flex items-center space-x-2 transition-all duration-300"
        >
          <img 
            src="/images/logo.png"
            alt="Logo"
            class="w-12 h-12 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
          />
        </NuxtLink>

        <!-- Navigation Links - Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="(item, index) in navItems" 
            :key="index"
            :to="item.path"
            class="relative text-[#fff3ec] font-medium transition-all duration-300 py-2 group"
          >
            <span class="relative z-10 group-hover:translate-y-[-2px] transition-all duration-300 block">
              {{ item.name }}
            </span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc0ad] group-hover:w-full transition-all duration-300"></span>
            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#ffc0ad] rounded-full scale-0 group-hover:scale-100 transition-all duration-300 delay-100"></span>
          </NuxtLink>
          
          <!-- CV Button -->
          <a
            href="/cv"
            class="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full overflow-hidden group"
          >
            <span class="absolute inset-0 bg-[#ffc0ad] transition-all duration-300 group-hover:scale-105"></span>
            <span class="absolute inset-0 bg-gradient-to-r from-[#ffc0ad] to-[#fff3ec] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></span>
            <span class="relative z-10 text-[#271c19] font-medium transition-all duration-300 group-hover:scale-105">
              Mon CV
              <span class="absolute inset-0 border-2 border-[#271c19]/20 rounded-full group-hover:scale-105 group-hover:border-[#271c19]/40 transition-all duration-300"></span>
            </span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-[#271c19] transition-all duration-300 group"
          aria-label="Menu"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span 
              class="w-full h-0.5 bg-[#fff3ec] rounded-full transition-all duration-300 group-hover:w-3/4"
              :class="{ 'rotate-45 translate-y-2 w-full': isMobileMenuOpen }"
            ></span>
            <span 
              class="w-3/4 h-0.5 bg-[#fff3ec] rounded-full transition-all duration-300 group-hover:w-full"
              :class="{ 'opacity-0': isMobileMenuOpen }"
            ></span>
            <span 
              class="w-full h-0.5 bg-[#fff3ec] rounded-full transition-all duration-300 group-hover:w-3/4"
              :class="{ '-rotate-45 -translate-y-2 w-full': isMobileMenuOpen }"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-[#55423d]/95 backdrop-blur-md border-b border-[#271c19] shadow-lg"
      >
        <div class="px-4 py-3 space-y-3">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            class="block px-4 py-2.5 text-[#fff3ec] rounded-xl transition-all duration-300 hover:bg-[#271c19]/40 hover:translate-x-2 group"
            @click="isMobileMenuOpen = false"
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
            class="block px-4 py-2.5 text-center rounded-xl bg-[#ffc0ad] text-[#271c19] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#ffc0ad]/20 hover:scale-[1.02] active:scale-95"
            @click="isMobileMenuOpen = false"
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

const navItems = [
  { name: 'Expériences', path: '/experiences' },
  { name: 'Formations', path: '/formations' },
  { name: 'Projets', path: '/projets' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
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
  @apply text-[#fffffe];
}

.router-link-active::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-[#ffc0ad] rounded-full;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>