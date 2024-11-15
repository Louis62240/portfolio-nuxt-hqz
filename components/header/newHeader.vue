<!-- components/TheHeader.vue -->
<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav 
      class="mx-auto px-6 py-3 bg-[#1A1B1E]/95 backdrop-blur-md transition-all duration-300"
      :class="{ 
        'shadow-lg shadow-[#2A2B2E]/20 py-2': scrolled,
        'border-b border-[#2A2B2E]': !scrolled 
      }"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink 
          to="/" 
          class="group flex items-center space-x-2 hover:opacity-90 transition-all duration-300"
        >
          <img 
            src="/images/logo.png"
            alt="Logo"
            class="w-12 h-12 transform group-hover:scale-105 transition-transform duration-300"
          />
        </NuxtLink>

        <!-- Navigation Links - Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="(item, index) in navItems" 
            :key="index"
            :to="item.path"
            class="relative text-gray-300 font-medium hover:text-[#00FFB2] transition-colors duration-300 py-2 group"
          >
            <span class="relative z-10">{{ item.name }}</span>
            <span class="absolute inset-0 bg-[#2A2B2E] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-0"></span>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00FFB2] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </NuxtLink>
          
          <!-- CV Button -->
          <a
            href="/cv"
            class="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00FFB2] to-[#00B2FF] text-[#1A1B1E] font-medium overflow-hidden group"
          >
            <span class="relative z-10">Mon CV</span>
            <span class="absolute inset-0 bg-gradient-to-r from-[#00E5FF] to-[#00FFB2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="absolute inset-0 rounded-full border-2 border-[#00FFB2]/30"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-[#2A2B2E] transition-colors duration-300"
          aria-label="Menu"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span 
              class="w-full h-0.5 bg-gray-300 rounded-full transition-all duration-300"
              :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"
            ></span>
            <span 
              class="w-full h-0.5 bg-gray-300 rounded-full transition-all duration-300"
              :class="{ 'opacity-0': isMobileMenuOpen }"
            ></span>
            <span 
              class="w-full h-0.5 bg-gray-300 rounded-full transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-[#1A1B1E]/95 backdrop-blur-md border-b border-[#2A2B2E] shadow-lg"
      >
        <div class="px-4 py-3 space-y-3">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            class="block px-4 py-2.5 text-gray-300 hover:bg-[#2A2B2E] hover:text-[#00FFB2] rounded-xl transition-all duration-300"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
          <a
            href="/cv"
            class="block px-4 py-2.5 text-center rounded-xl bg-gradient-to-r from-[#00FFB2] to-[#00B2FF] text-[#1A1B1E] font-medium hover:shadow-lg hover:shadow-[#00FFB2]/20 transition-all duration-300"
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
  @apply text-[#00FFB2];
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>