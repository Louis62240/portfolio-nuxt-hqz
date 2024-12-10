<template>
  <!-- Contenu du design -->
  <div class="design-container">
    <!-- Sphère principale -->
    <div class="sphere">
      <div class="sphere-inner"></div>
      <div class="sphere-glow"></div>
    </div>
    
    <!-- Anneaux orbitaux -->
    <div class="orbital-rings">
      <div v-for="n in 3" :key="n" class="ring" :style="{ '--rotation': `${n * 60}deg` }"></div>
    </div>

    <!-- Particules flottantes -->
    <div class="particles">
      <div v-for="n in 20" :key="n" class="particle" 
        :style="{ 
          '--delay': `${n * 0.5}s`,
          '--size': `${Math.random() * 10 + 5}px`,
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`
        }">
      </div>
    </div>

    <!-- Grille de fond -->
    <div class="grid-background">
      <div v-for="n in 16" :key="n" class="grid-cell"></div>
    </div>
  </div>
</template>

<script setup>
// Variables de couleurs exportées
const colors = {
  primary: '#004D3D', // Vert foncé
  secondary: '#298B6E', // Vert moyen
  accent: '#F5E6D3', // Beige clair
  background: '#004D3D', // Fond vert foncé
  surface: '#298B6E', // Surface vert moyen
  text: '#F5E6D3', // Texte beige
  textMuted: '#298B6E', // Texte vert moyen
}

// Exporter les couleurs pour utilisation dans d'autres composants
defineExpose({
  colors
})
</script>

<style scoped>
.design-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  overflow: hidden;
}

/* Sphère principale */
.sphere {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
}

.sphere-inner {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(145deg, #004D3D, #298B6E);
  animation: pulsate 4s ease-in-out infinite;
}

.sphere-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 77, 61, 0.4), transparent 70%);
  filter: blur(20px);
  animation: glow 4s ease-in-out infinite alternate;
}

/* Anneaux orbitaux */
.orbital-rings {
  position: absolute;
  inset: 0;
  animation: rotate 20s linear infinite;
}

.ring {
  position: absolute;
  inset: 10%;
  border: 2px solid rgba(41, 139, 110, 0.3);
  border-radius: 50%;
  transform: rotateX(var(--rotation)) rotateY(var(--rotation));
}

/* Particules */
.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle, #F5E6D3, transparent);
  border-radius: 50%;
  left: var(--x);
  top: var(--y);
  animation: float 10s ease-in-out infinite;
  animation-delay: var(--delay);
}

/* Grille de fond */
.grid-background {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1px;
  opacity: 0.1;
}

.grid-cell {
  background: linear-gradient(45deg, #004D3D22, #298B6E22);
  transform-style: preserve-3d;
  animation: cell-pulse 4s ease-in-out infinite;
  animation-delay: calc(var(--delay) * 0.5s);
}

/* Animations */
@keyframes pulsate {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes glow {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes rotate {
  to { transform: rotate3d(1, 1, 1, 360deg); }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, -20px); }
}

@keyframes cell-pulse {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

/* Variables CSS personnalisées */
:root {
  --background-color: #004D3D;
  --primary-color: #004D3D;
  --secondary-color: #298B6E;
  --accent-color: #F5E6D3;
  --text-color: #F5E6D3;
  --text-muted: #298B6E;
}
</style>