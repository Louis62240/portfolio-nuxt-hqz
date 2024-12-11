<template>
    <section class="py-16 bg-[#F5E6D3]">
      <div class="max-w-6xl mx-auto px-4">
        <div class="mb-12 text-center reveal-item">
          <h2 class="text-4xl font-bold text-[#004D3D] mb-3">Portfolio Projects</h2>
          <p class="text-[#4A4A4A] text-lg">Discover some of my recent work</p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in projects" :key="index" 
               class="reveal-item group">
            <div class="bg-white rounded-2xl overflow-hidden shadow-custom hover:shadow-custom-hover transition-all duration-300">
              <div class="relative overflow-hidden h-48">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img :src="project.image" :alt="project.title" 
                     class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute bottom-4 left-4 z-20">
                  <span v-for="tag in project.tags" :key="tag"
                        class="inline-block px-3 py-1 text-xs font-medium text-white bg-[#004D3D] rounded-full mr-2 mb-2">
                    {{ tag }}
                  </span>
                </div>
              </div>
  
              <div class="p-6">
                <h3 class="text-xl font-semibold text-[#004D3D] mb-2 group-hover:text-[#2A9D8F] transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-[#4A4A4A] text-sm mb-4">{{ project.description }}</p>
  
                <div class="flex items-center justify-between">
                  <div class="flex space-x-3">
                    <a :href="project.github" target="_blank" 
                       class="text-[#004D3D] hover:text-[#2A9D8F] transition-colors">
                      <i class="fab fa-github text-xl"></i>
                    </a>
                    <a :href="project.demo" target="_blank" 
                       class="text-[#004D3D] hover:text-[#2A9D8F] transition-colors">
                      <i class="fas fa-external-link-alt text-lg"></i>
                    </a>
                  </div>
                  <span class="text-sm text-[#4A4A4A]">{{ project.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="text-center mt-12">
          <button @click="showMore" 
                  class="px-6 py-3 bg-[#004D3D] text-white rounded-lg hover:bg-[#003D2F] transition-colors duration-300">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const projects = ref([
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with Vue.js and Node.js, featuring real-time inventory management and secure payment processing.",
      image: "/path-to-image/ecommerce.jpg",
      tags: ["Vue.js", "Node.js", "MongoDB"],
      github: "https://github.com/username/project",
      demo: "https://demo-link.com",
      date: "March 2024"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/path-to-image/task-management.jpg",
      tags: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/username/project",
      demo: "https://demo-link.com",
      date: "February 2024"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool that creates unique artwork based on text descriptions using machine learning algorithms.",
      image: "/path-to-image/ai-generator.jpg",
      tags: ["Python", "TensorFlow", "Flask"],
      github: "https://github.com/username/project",
      demo: "https://demo-link.com",
      date: "January 2024"
    }
  ])
  
  const showMore = () => {
    // Logic to load more projects
    console.log('Loading more projects...')
  }
  </script>
  
  <style scoped>
  .reveal-item {
    width:100%;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .reveal-item.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .shadow-custom {
    box-shadow: 0 4px 6px -1px rgba(0, 77, 61, 0.1),
                0 2px 4px -1px rgba(0, 77, 61, 0.06);
  }
  
  .shadow-custom-hover {
    box-shadow: 0 10px 15px -3px rgba(0, 77, 61, 0.15),
                0 4px 6px -2px rgba(0, 77, 61, 0.1);
  }
  </style>