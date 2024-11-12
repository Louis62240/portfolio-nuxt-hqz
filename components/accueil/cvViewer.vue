<template>
    <div class="card-container">
      <div 
        class="flip-card" 
        @mouseenter="flipped = true" 
        @mouseleave="flipped = false"
        @click="downloadCV"
        @touchstart="handleTouchStart"
      >
        <div class="flip-card-inner" :class="{ flipped }">
          <div class="flip-card-front">
            <div class="pdf-preview">
              <iframe
                :src="pdfUrl"
                class="pdf-iframe"
                loading="lazy"
              ></iframe>
              <div class="preview-overlay">
                <Icon name="mdi:file-document-outline" class="preview-icon" />
                <span class="preview-text">Prévisualisation du CV</span>
              </div>
            </div>
          </div>
  
          <div class="flip-card-back">
            <div class="content">
              <Icon name="mdi:download-circle" class="download-icon" />
              <h3>Télécharger mon CV</h3>
              <p>Format PDF - Cliquez pour télécharger</p>
              <div class="tags">
                <span class="tag">Expérience</span>
                <span class="tag">Compétences</span>
                <span class="tag">Formation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const pdfUrl = ref('')
  const flipped = ref(false)
  
  onMounted(() => {
    pdfUrl.value = '/pdf/cv.pdf#toolbar=0&navpanes=0&scrollbar=0'
  })
  
  const downloadCV = () => {
    if (flipped.value) {
      const link = document.createElement('a')
      link.href = '/pdf/cv.pdf'
      link.download = 'mon-cv.pdf'
      link.click()
    }
  }
  
  const handleTouchStart = () => {
    flipped.value = !flipped.value
  }
  </script>
  
  <style scoped>
  .card-container {
    width: 100%;
    min-height: 100dvh;
    padding: max(16px, min(5vw, 32px));
    display: grid;
    place-items: center;
  }
  
  .flip-card {
    perspective: 2000px;
    width: clamp(280px, 90vw, 440px);
    height: clamp(400px, 80vh, 570px);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    box-shadow: 
      0 10px 30px -5px rgba(0, 0, 0, 0.1),
      0 2px 8px -3px rgba(0, 0, 0, 0.05);
    will-change: transform;
  }
  
  .flip-card-inner.flipped {
    transform: rotateY(180deg);
  }
  
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
  }
  
  .flip-card-front {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  .pdf-preview {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .pdf-iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .preview-overlay {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .preview-icon {
    font-size: clamp(24px, 5vw, 32px);
    margin-bottom: 1rem;
    color: #6366f1;
  }
  
  .preview-text {
    font-size: clamp(14px, 3vw, 16px);
    font-weight: 500;
    color: #4b5563;
  }
  
  .flip-card:hover .preview-overlay {
    opacity: 1;
  }
  
  .flip-card-back {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
    transform: rotateY(180deg);
  }
  
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: clamp(1.5rem, 5vw, 2.5rem);
  }
  
  .download-icon {
    font-size: clamp(32px, 8vw, 48px);
    margin-bottom: clamp(1rem, 3vw, 1.5rem);
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  h3 {
    margin: 0;
    font-size: clamp(1.2em, 4vw, 1.8em);
    font-weight: 600;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
  }
  
  p {
    font-size: clamp(0.9em, 3vw, 1.1em);
    margin: 0 0 clamp(1rem, 4vw, 2rem) 0;
    opacity: 0.9;
    line-height: 1.5;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-top: clamp(0.8rem, 2vw, 1.2rem);
  }
  
  .tag {
    background: rgba(255, 255, 255, 0.15);
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: clamp(0.8em, 2.5vw, 0.9em);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transition: transform 0.2s ease, background 0.2s ease;
  }
  
  .tag:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }
  
  /* Support tactile */
  @media (hover: none) {
    .preview-overlay {
      opacity: 0.95;
    }
    
    .flip-card-inner {
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  
  /* Optimisations de performance */
  @media (prefers-reduced-motion: reduce) {
    .flip-card-inner {
      transition-duration: 0.1s;
    }
    
    .download-icon {
      animation: none;
    }
  }
  </style>