<template>
  <div class="skills-section">
    <h2 class="skills-title">Technologies</h2>

    <div class="groups-container">
      <section class="group">
        <h3 class="group-title">Frontend</h3>
        <div class="group-list">
          <div v-for="(item, idx) in frontend" :key="`fe-${item.name}`" class="skill-item"
            :style="{ '--accent-color': item.color, '--index': idx }">
            <div class="skill-icon">
              <img :src="item.icon" :alt="item.name" />
            </div>
            <span class="skill-name">{{ item.name }}</span>
          </div>
        </div>
      </section>

      <section class="group">
        <h3 class="group-title">Backend</h3>
        <div class="group-list">
          <div v-for="(item, idx) in backend" :key="`be-${item.name}`" class="skill-item"
            :style="{ '--accent-color': item.color, '--index': idx }">
            <div class="skill-icon">
              <img :src="item.icon" :alt="item.name" />
            </div>
            <span class="skill-name">{{ item.name }}</span>
          </div>
        </div>
      </section>

      <section class="group">
        <h3 class="group-title">DevOps & Tools</h3>
        <div class="group-list">
          <div v-for="(item, idx) in tools" :key="`t-${item.name}`" class="skill-item"
            :style="{ '--accent-color': item.color, '--index': idx }">
            <div class="skill-icon">
              <img :src="item.icon" :alt="item.name" />
            </div>
            <span class="skill-name">{{ item.name }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const frontend = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#007acc' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#42b883' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg', color: '#00DC82' },
  { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', color: '#CC6699' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#38bdf8' }
]

const backend = [
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#68a063' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#000000' },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', color: '#E0234E' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#4db33d' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' }
]

const tools = [
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: '#4285F4' },
  { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', color: '#C21325' },
  { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', color: '#8DD6F9' }
]
</script>

<style scoped>
.skills-section {
  width: 100%;
  padding: 1.5rem 0;
  max-height: 100vh;
  overflow: hidden;
}

.skills-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  color: #106553;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInScale 0.5s ease forwards;
}

.groups-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.group {
  border-radius: 1rem;
  padding: 1.5rem;
}

.group-title {
  margin: 0 0 1.2rem 0;
  font-size: 1.3rem;
  color: #064e3b;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.group-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
}

.skill-item {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInScale 0.5s ease forwards;
  animation-delay: calc(var(--index) * 0.06s);
  min-height: 3.5rem;
  border: 2px solid transparent;
}

.skill-icon {
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
}

.skill-icon img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(var(--accent-color), 0.4));
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #004D3D;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.skill-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(var(--accent-color), 0.3);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Responsive ultra compact */
@media (max-width: 768px) {
  .skills-title {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  .groups-container {
    gap: 0.3rem;
    padding: 0 0.5rem;
  }

  .skill-item {
    padding: 0.3rem 0.5rem;
    min-height: 2rem;
  }

  .skill-icon {
    width: 1.4rem;
    height: 1.4rem;
  }

  .skill-name {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .groups-container {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }

  .group-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.1rem;
  }

  .skill-item {
    flex-direction: column;
    padding: 0.3rem;
    gap: 0.2rem;
    min-height: 3rem;
  }

  .skill-name {
    font-size: 0.7rem;
    text-align: center;
  }
}
</style>