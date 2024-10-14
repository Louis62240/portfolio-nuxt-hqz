<template>
  <div class="bg-gradient-to-br from-[#F2EED7] to-[#FEFAE0] min-h-screen">
    <!-- Transition Bar -->
    <div class="transition-bar bg-[#798645]"></div>

    <!-- Section Projects -->
    <section class="py-24 relative overflow-hidden">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl font-bold text-center text-[#626F47] mb-12">Mes Projets</h2>

        <!-- Grid Projects -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12" data-aos="fade-up">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105"
            data-aos="fade-up"
          >
            <img :src="project.image" :alt="project.title" class="w-full h-56 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-[#626F47]">{{ project.title }}</h3>
              <p class="mt-2 text-[#626F47]">{{ project.description }}</p>
              <a
                :href="project.link"
                class="inline-block mt-4 bg-[#798645] text-[#FEFAE0] px-6 py-2 rounded-full shadow-md hover:bg-[#626F47] transition-transform duration-300"
                target="_blank"
              >
                Voir plus
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="i in 10" :key="i" class="absolute rounded-full opacity-10 animate-float" :style="{
          width: `${Math.random() * 300 + 50}px`,
          height: `${Math.random() * 300 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          backgroundColor: ['#798645', '#626F47', '#FFBF47'][Math.floor(Math.random() * 3)]
        }"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Projet 1',
          description: 'Une brève description de ce projet passionnant.',
          image: 'https://via.placeholder.com/400x300',
          link: '#',
        },
        {
          title: 'Projet 2',
          description: 'Une brève description de ce projet innovant.',
          image: 'https://via.placeholder.com/400x300',
          link: '#',
        },
        {
          title: 'Projet 3',
          description: 'Un projet créatif avec des technologies modernes.',
          image: 'https://via.placeholder.com/400x300',
          link: '#',
        },
        // Ajoutez d'autres projets ici
      ],
    };
  },
};
</script>

<style scoped>
.transition-bar {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 4px;
  border-radius: 2px;
  position: relative;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}
</style>
