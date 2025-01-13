<template>
    <section class="py-12 bg-amber-50 text-[#004D3D] w-full">
      <div class="max-w-6xl mx-auto px-4">
        <div class="mb-12 text-center reveal-item">
          <h2 class="text-4xl font-bold text-[#264653] mb-3">{{ title }}</h2>
          <p class="text-[#4A4A4A] text-lg">{{ description }}</p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(language, index) in programmingLanguages" :key="index"
               class="reveal-item hover:transform hover:scale-[1.02] transition-all duration-300">
            <div class="bg-white rounded-2xl shadow-custom hover:shadow-custom-hover transition-all duration-300 p-6 border-t-8"
                 :class="language.borderColor">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 flex items-center justify-center rounded-lg"
                     :class="language.bgColor">
                  <img :src="getSkillIcon(language.name)" :alt="language.name" class="w-8 h-8" />
                </div>
                <h3 class="text-xl font-semibold text-[#264653]">{{ language.name }}</h3>
              </div>
  
              <div class="mb-4">
                <div class="flex justify-between mb-2">
                  <span class="text-sm text-[#4A4A4A]">Proficiency</span>
                  <span class="text-sm font-medium text-[#2A9D8F]">{{ language.proficiency }}%</span>
                </div>
                <div class="w-full h-2 bg-gray-200 rounded-full">
                  <div class="h-full rounded-full transition-all duration-500"
                       :class="language.barColor"
                       :style="`width: ${language.proficiency}%`">
                  </div>
                </div>
              </div>
  
              <div class="space-y-2">
                <p class="text-sm text-[#4A4A4A]"><strong>Experience:</strong> {{ language.experience }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(framework, idx) in language.frameworks" :key="idx"
                        class="px-3 py-1 text-xs font-medium rounded-full"
                        :class="language.tagColor">
                    {{ framework }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const getSkillIcon = (skill) => {
    const icons = {
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      'Ruby': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg'
    }
    return icons[skill] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'
  }
  
  const title = "Technical Skills"
  const description = "My programming languages and frameworks"
  
  const programmingLanguages = [
    {
      name: "JavaScript",
      proficiency: 90,
      experience: "5 years",
      frameworks: ["Vue.js", "React", "Node.js", "Express"],
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-400",
      barColor: "bg-yellow-400",
      tagColor: "bg-yellow-100 text-yellow-800"
    },
    {
      name: "Python",
      proficiency: 85,
      experience: "3 years",
      frameworks: ["Django", "Flask", "FastAPI", "NumPy"],
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500",
      barColor: "bg-blue-500",
      tagColor: "bg-blue-100 text-blue-800"
    },
    {
      name: "C#",
      proficiency: 65,
      experience: "2 years",
      frameworks: [".NET Core", "ASP.NET", "Entity Framework"],
      borderColor: "border-green-500",
      bgColor: "bg-green-500",
      barColor: "bg-green-500",
      tagColor: "bg-green-100 text-green-800"
    },
  ]
  </script>
  
  <style scoped>
  .reveal-item {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .reveal-item.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .shadow-custom {
    box-shadow: 0 4px 6px -1px rgba(42, 157, 143, 0.1),
                0 2px 4px -1px rgba(42, 157, 143, 0.06);
  }
  
  .shadow-custom-hover {
    box-shadow: 0 10px 15px -3px rgba(42, 157, 143, 0.15),
                0 4px 6px -2px rgba(42, 157, 143, 0.1);
  }
  </style>