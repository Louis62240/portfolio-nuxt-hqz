<template>
  <main class="min-h-screen bg-[#F5E6D3] text-[#004D3D] overflow-hidden relative w-full">
    <div class="noise-overlay"></div>

    <div class="floating-orbs">
      <div v-for="n in 5" :key="n" class="orb fade-in" :style="{
        '--delay': `${n * 2}s`,
        '--size': `${120 + n * 60}px`,
        '--x': `${n * 25}%`,
        '--y': `${n * 18}%`,
        '--animation-delay': `${n * 0.2}s`
      }"></div>
    </div>

    <div class="geometric-pattern fade-in" style="--animation-delay: 0.3s"></div>

    <div class="relative z-10 w-full min-h-screen px-4 sm:px-6 md:px-8 flex items-center justify-center">
      <div class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center w-full max-w-[1800px] mx-auto">
        <div class="space-y-6 md:space-y-8 lg:space-y-12 transform-gpu lg:pl-6 xl:pl-12">
          <div class="space-y-4 md:space-y-6">
            <div class="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#298B6E] slide-in-left"
              style="--animation-delay: 0.5s">
              Digital Portfolio
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-tight">
              <span class="block magical-text slide-in-left" style="--animation-delay: 0.7s">Hanquiez Louis</span>
              <span class="block mt-2 sm:mt-3 gradient-animate slide-in-left"
                style="--animation-delay: 0.9s">Developer</span>
              <span class="block mt-2 sm:mt-3 neon-text slide-in-left" style="--animation-delay: 1.1s">Full-Stack</span>
            </h1>
          </div>

          <p class="text-[#298B6E] text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl prose-elegant fade-in-up"
            style="--animation-delay: 1.3s">
            Specialized in creating innovative and immersive web experiences.
            I transform your ideas into captivating digital realities.
          </p>

          <div class="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            <button class="magical-button group scale-in" style="--animation-delay: 1.5s"       @click="$emit('scrollToProjects')"
            >
              <span class="relative z-10 text-[#F5E6D3] text-base sm:text-lg md:text-xl font-medium">
                View Projects
              </span>
              <div class="magical-button-bg"></div>
            </button>

            <button class="glass-button scale-in text-base sm:text-lg md:text-xl font-medium"
              style="--animation-delay: 1.7s">
              Learn More
            </button>
          </div>
        </div>

        <div class="relative aspect-square hidden lg:block fade-in mr-4 xl:mr-12" style="--animation-delay: 1.9s">
          <DesignComponent />
        </div>
      </div>
    </div>

    <div class="scroll-indicator fade-in" ref="scrollIndicator" style="--animation-delay: 2.7s">
      <div class="scroll-text">Discover</div>
      <div class="scroll-line"></div>
    </div>
  </main>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import DesignComponent from '@/components/DesignComponent.vue';
defineEmits(['scrollToProjects']);

const scrollIndicator = ref(null)

onMounted(() => {
  // Réinitialiser les animations lors du rechargement de la page
  document.documentElement.style.scrollBehavior = 'auto'
  window.scrollTo({ top: 0 })
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, 100)

  // Ajouter le gestionnaire d'événements de défilement
  window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  if (!scrollIndicator.value) return

  // Faire disparaître progressivement l'indicateur en fonction du défilement
  const scrollPosition = window.scrollY
  const fadeOutStart = 100 // Commencer à disparaître après 100px de scroll
  const fadeOutEnd = 300 // Complètement disparu après 300px de scroll
  
  if (scrollPosition > fadeOutStart) {
    const opacity = Math.max(0, 1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart))
    scrollIndicator.value.style.opacity = opacity
    
    if (opacity === 0) {
      scrollIndicator.value.style.visibility = 'hidden'
    }
  } else {
    scrollIndicator.value.style.opacity = 1
    scrollIndicator.value.style.visibility = 'visible'
  }
}

// Nettoyage du gestionnaire d'événements lors de la destruction du composant
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Base styles */
.noise-overlay {
  position: fixed;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.08;
  mix-blend-mode: soft-light;
  animation: noise 1s steps(2) infinite;
}

.floating-orbs {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.orb {
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: var(--x);
  top: var(--y);
  background: radial-gradient(circle at 30% 30%, rgba(0, 106, 78, 0.3), transparent);
  border-radius: 50%;
  filter: blur(40px);
  animation: float calc(10s + var(--delay)) ease-in-out infinite;
}

.geometric-pattern {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(45deg, #006A4E08 25%, transparent 25%),
    linear-gradient(-45deg, #006A4E08 25%, transparent 25%);
  background-size: 60px 60px;
  animation: pattern-shift 30s linear infinite;
}

/* Text effects */
.magical-text {
  background: linear-gradient(45deg, #004D3D, #298B6E);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradient-shift 8s ease infinite;
}

.gradient-animate {
  background: linear-gradient(-45deg, #006A4E, #298B6E, #004D3D);
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradient-flow 6s ease infinite;
}

.neon-text {
  color: #004D3D;
  text-shadow: 0 0 10px rgba(0, 106, 78, 0.5);
  animation: neon-pulse 2s ease-in-out infinite;
}

/* Buttons */
.magical-button {
  position: relative;
  padding: 1rem 2rem;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.magical-button-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #006A4E, #298B6E, #006A4E);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

.glass-button {
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 106, 78, 0.2);
  backdrop-filter: blur(10px);
  color: #004D3D;
  transition: all 0.3s ease;
}

/* Grid and sphere animations */
.grid-animation {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.5rem;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.grid-cube {
  aspect-ratio: 1;
  background-color: var(--color);
  opacity: 0.1;
  transform-style: preserve-3d;
  animation: cube-float 3s ease-in-out infinite;
  animation-delay: var(--delay);
}

.central-sphere {
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
}

.sphere-rings {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  animation: sphere-rotate 20s linear infinite;
}

.sphere-ring {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(0, 106, 78, 0.3);
  border-radius: 50%;
  transform: rotateX(var(--rotation)) rotateY(var(--rotation));
}

.sphere-core {
  position: absolute;
  inset: 30%;
  background: radial-gradient(circle at 30% 30%, #006A4E, #004D3D);
  border-radius: 50%;
  filter: blur(5px);
  animation: pulse 4s ease-in-out infinite;
}

.scroll-indicator {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  animation: fadeIn 1s forwards var(--animation-delay);
  transition: opacity 0.3s ease-out, visibility 0.3s ease-out; /* Ajout de la transition */
}

.scroll-text {
  color: #298B6E;
  font-size: 1rem;
  /* Augmente la taille du texte pour plus de visibilité */
  font-weight: bold;
  /* Met en gras le texte pour plus d'impact */
  animation: bounce 2s infinite;
  /* Animation de rebond */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  /* Ombre plus prononcée pour un effet de profondeur */
  letter-spacing: 0.05em;
  /* Espacement des lettres pour une meilleure lisibilité */
}

.scroll-line {
  width: 4px;
  /* Augmente la largeur de la ligne pour plus de visibilité */
  height: 70px;
  /* Augmente la hauteur de la ligne */
  background: linear-gradient(to bottom, #006A4E, rgba(0, 106, 78, 0));
  /* Amélioration du dégradé */
  border-radius: 2px;
  animation: glow 2s ease-in-out infinite;
  /* Animation de lueur */
  box-shadow: 0 0 15px rgba(0, 106, 78, 0.6), 0 0 30px rgba(0, 106, 78, 0.3);
  /* Ombre portée améliorée pour un effet lumineux */
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }

  /* Augmente le rebond */
}

@keyframes glow {

  0%,
  100% {
    background: rgba(0, 106, 78, 0.5);
  }

  50% {
    background: rgba(0, 106, 78, 1);
  }

  /* Intensifie la lueur */
}


/* Entrance animations */
.fade-in {
  opacity: 0;
  animation: fade-in 0.6s ease-out forwards;
  animation-delay: var(--animation-delay, 0s);
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fade-in-up 0.6s ease-out forwards;
  animation-delay: var(--animation-delay, 0s);
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: slide-in-left 0.6s ease-out forwards;
  animation-delay: var(--animation-delay, 0s);
}

.scale-in {
  opacity: 0;
  transform: scale(0.8);
  animation: scale-in 0.6s ease-out forwards;
  animation-delay: var(--animation-delay, 0s);
}

/* Keyframes */
@keyframes noise {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-1%, -1%);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-30px, -30px);
  }
}

@keyframes pattern-shift {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 60px 60px;
  }
}

@keyframes gradient-shift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradient-flow {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@keyframes neon-pulse {

  0%,
  100% {
    text-shadow: 0 0 10px rgba(0, 106, 78, 0.5);
  }

  50% {
    text-shadow: 0 0 20px rgba(0, 106, 78, 0.8);
  }
}

@keyframes cube-float {

  0%,
  100% {
    transform: translateZ(0);
  }

  50% {
    transform: translateZ(20px);
  }
}

@keyframes sphere-rotate {
  to {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

@keyframes glow {

  0%,
  100% {
    opacity: 0.5;
    filter: blur(1px);
  }

  50% {
    opacity: 1;
    filter: blur(2px);
  }
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Hover effects */
.magical-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 106, 78, 0.2);
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.grid-cube:hover {
  opacity: 0.3;
  transform: translateZ(30px);
}

/* Typography */
.prose-elegant {
  line-height: 1.8;
  letter-spacing: 0.01em;
}

/* Responsive */
@media (max-width: 768px) {

  .magical-text,
  .gradient-animate,
  .neon-text {
    font-size: clamp(2rem, 8vw, 4rem);
  }

  .floating-orbs {
    display: none;
  }
}

@media (max-width: 1536px) {

  .magical-text,
  .gradient-animate,
  .neon-text {
    font-size: clamp(3rem, 6vw, 5rem);
  }
}

@media (max-width: 1280px) {

  .magical-button,
  .glass-button {
    padding: 0.875rem 1.75rem;
  }
}

@media (max-width: 1024px) {
  .grid {
    gap: 2rem;
  }

  .central-sphere {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 768px) {

  .magical-text,
  .gradient-animate,
  .neon-text {
    font-size: clamp(2rem, 8vw, 4rem);
  }

  .floating-orbs {
    opacity: 0.5;
  }

  .prose-elegant {
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .magical-button,
  .glass-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 640px) {

  .magical-text,
  .gradient-animate,
  .neon-text {
    font-size: clamp(1.75rem, 7vw, 3rem);
  }

  .floating-orbs {
    opacity: 0.3;
  }

  .prose-elegant {
    font-size: 1rem;
    line-height: 1.5;
  }

  .magical-button,
  .glass-button {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }

  .scroll-indicator {
    bottom: 1rem;
  }

  .scroll-text {
    font-size: 0.875rem;
  }

  .scroll-line {
    height: 50px;
  }
}

@media (max-height: 700px) {
  .scroll-indicator {
    display: none;
  }
}

/* Optimisations pour les appareils tactiles */
@media (hover: none) {

  .magical-button:hover,
  .glass-button:hover {
    transform: none;
  }

  .grid-cube:hover {
    transform: none;
  }
}

/* Optimisations pour la réduction des animations sur les appareils qui le préfèrent */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>