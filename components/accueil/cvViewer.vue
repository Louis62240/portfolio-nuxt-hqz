<template>
    <div class="flex items-center justify-center min-h-screen p-4">
      <div class="w-full max-w-3xl h-[80vh] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
        <iframe :src="pdfUrl + '#toolbar=0'" class="w-full h-full" frameborder="0"></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const pdfUrl = ref('/pdf/cv.pdf')
  </script>
  