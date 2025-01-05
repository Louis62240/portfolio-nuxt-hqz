<template>
  <div class="w-full bg-[#F5E6D3] text-[#004D3D]">
    <!-- Section Professionnelle -->
    <section class="w-full py-16 border-b border-[#2A9D8F]/20">
      <div class="text-center mb-8">
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-[#004D3D] magical-text">
          About me
        </h2>
      </div>
      <div class="max-w-[90%] mx-auto">
        <div class="lg:flex gap-16 items-start">
          <!-- Info Professionnelle -->
          <div class="space-y-8 lg:w-full">
            <div>
              <h1 class="text-4xl font-bold text-[#004D3D] mb-4">
                Full Stack Developer
              </h1>
              <h2 class="text-xl text-[#2A9D8F]">
                Lille, France | 22 years old
              </h2>
            </div>

            <p class="text-lg text-[#298B6E] leading-relaxed">
              Passionate about creating dynamic web experiences with modern JavaScript frameworks.
              Specialized in building scalable and performant applications that combine elegant
              front-end interfaces with robust back-end architecture.
            </p>

            <!-- Technologies -->
            <div class="space-y-6">
              <h3 class="text-2xl font-semibold text-[#004D3D]">Technologies</h3>
              <div class="space-y-4">
                <div v-for="(category, index) in techStack" :key="index">
                  <h4 class="font-medium text-[#2A9D8F] mb-2">{{ category.name }}</h4>
                  <div class="flex flex-wrap gap-3">
                    <div v-for="tech in category.items" :key="tech.name" class="tech-badge">
                      <img :src="tech.icon" :alt="tech.name" class="w-5 h-5" />
                      <span>{{ tech.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Personnelle -->
    <section class="w-full py-16">
      <div class="max-w-[90%] mx-auto">
        <h2 class="text-3xl font-bold text-[#004D3D] mb-8">Beyond Coding</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(passion, index) in passions" :key="index" class="passion-card">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center">
                <Icon :icon="passion.icon" class="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 class="text-xl font-semibold text-[#004D3D]">{{ passion.title }}</h3>
            </div>
            <p class="text-[#298B6E]">{{ passion.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const techStack = {
  frontend: {
    name: 'Frontend',
    items: [
      {
        name: 'Vue.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg'
      },
      {
        name: 'React',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
      },
      {
        name: 'TypeScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
      },
      {
        name: 'Tailwind',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg'
      },
    ]
  },
  backend: {
    name: 'Backend',
    items: [
      {
        name: 'Node.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
      },
      {
        name: 'Express',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg'
      },
      {
        name: 'MongoDB',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
      },
      {
        name: 'PostgreSQL',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'
      },
    ]
  },
  devTools: {
    name: 'Development Tools',
    items: [
      {
        name: 'Git',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
      },
      {
        name: 'GitHub',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
      }
    ]
  }
};

const passions = [
  {
    icon: 'ion:musical-notes',
    title: 'Rap Music & Festivals',
    description: 'Passionate about rap music culture and hip-hop festivals. Following the French rap scene closely and attending major rap events and concerts.'
  },
  {
    icon: 'fa-solid:mountain',
    title: 'Indoor Climbing',
    description: 'Dedicated indoor climber with a passion for bouldering and climbing challenges in controlled environments. Always pushing my limits and tackling new routes in climbing gyms.'
  },
  {
    icon: 'ion:game-controller',
    title: 'Gaming',
    description: 'Avid gamer specializing in solo adventures and multiplayer grinding games. Love immersing myself in story-driven single-player experiences while also enjoying the grind and progression of farming-focused multiplayer games.'
  }
];
</script>

<style scoped>
.tech-badge {
  @apply flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#2A9D8F]/20 transition-all duration-300 text-sm font-medium text-[#298B6E] hover:border-[#2A9D8F]/40 hover:shadow-sm;
}

.passion-card {
  @apply bg-white p-6 rounded-lg border border-[#2A9D8F]/20 transition-all duration-300 hover:border-[#2A9D8F]/40 hover:shadow-sm;
}

@media (max-width: 768px) {
  .tech-badge {
    @apply px-3 py-1.5;
  }

  .passion-card {
    @apply p-4;
  }
}
</style>