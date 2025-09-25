<template>
  <div class="skills-section">
    <h2 class="skills-title">Technicall Stack</h2>
    <div class="skills-grid">
      <div v-for="(skill, index) in skills" :key="skill.name" class="skill-item" :style="{
        '--accent-color': skill.color,
        '--index': index
      }">
        <div class="skill-icon">
          <img :src="skill.icon" :alt="skill.name">
        </div>
        <span class="skill-name">{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    color: '#42b883'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#68a063'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: '#007acc'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#4db33d'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: '#2496ED'
  },
  {
    name: 'Sass',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    color: '#CC6699'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    color: '#38bdf8'
  }
]
</script>

<style scoped>
.skills-section {
  width: 100%;
  padding: 2rem 0;
}

.skills-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #106553;
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeInScale 0.5s ease forwards;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.skill-item {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  transition: transform 0.3s ease;
  opacity: 0;
  animation: fadeInScale 0.5s ease forwards;
  animation-delay: calc(var(--index) * 0.1s);
}

.skill-icon {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(var(--accent-color), 0.3));
}

.skill-name {
  font-size: 1rem;
  font-weight: 600;
  color: #004D3D;
  text-align: center;
}

/* Animation d'entrée */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Hover effect simple */
.skill-item:hover {
  transform: translateY(-5px);
}

/* Responsive */
@media (max-width: 1200px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .skills-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1rem;
  }

  .skill-icon {
    width: 3rem;
    height: 3rem;
  }
}

@media (max-width: 480px) {
  .skills-title {
    font-size: 1.75rem;
  }

  .skills-grid {
    gap: 1rem;
  }

  .skill-name {
    font-size: 0.9rem;
  }
}
</style>