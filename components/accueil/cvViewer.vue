<template>
    <div class="card-container">
      <div 
        class="flip-card" 
        @mouseenter="flipped = true" 
        @mouseleave="flipped = false"
        @click="downloadCV"
      >
        <div class="flip-card-inner" :class="{ flipped }">
          <div class="flip-card-front">
            <div class="pdf-preview">
              <iframe
                :src="pdfUrl"
                width="100%"
                height="100%"
                frameborder="0"
                class="pdf-iframe"
              ></iframe>
              <div class="preview-overlay">
                <Icon name="mdi:file-document-outline" size="32" />
                <span>Prévisualisation du CV</span>
              </div>
            </div>
          </div>
  
          <div class="flip-card-back">
            <div class="content">
              <Icon name="mdi:download-circle" size="48" class="download-icon" />
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
    // Ajoutez #toolbar=0&navpanes=0&scrollbar=0 à l'URL pour masquer les contrôles
    pdfUrl.value = '/pdf/cv.pdf#toolbar=0&navpanes=0&scrollbar=0'
  })
  
  const downloadCV = () => {
    if (flipped.value) {
      const link = document.createElement('a')
      // Utilisez l'URL de base sans les paramètres pour le téléchargement
      link.href = '/pdf/cv.pdf'
      link.download = 'mon-cv.pdf'
      link.click()
    }
  }
  </script>
  
  <style scoped>
  .card-container {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .flip-card {
    perspective: 1500px;
    width: 440px;
    height: 570px;
    cursor: pointer;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
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
    border-radius: 20px;
    overflow: hidden;
  }
  
  .flip-card-front {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .pdf-preview {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .preview-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
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
    padding: 2rem;
  }
  
  .download-icon {
    margin-bottom: 1.5rem;
    animation: pulse 2s infinite;
  }
  
  h3 {
    margin: 0;
    font-size: 1.8em;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.1em;
    margin: 0;
    opacity: 0.9;
    margin-bottom: 2rem;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .tag {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9em;
    backdrop-filter: blur(4px);
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @media (max-width: 768px) {
    .flip-card {
      width: 300px;
      height: 420px;
    }
  
    h3 {
      font-size: 1.5em;
    }
  
    p {
      font-size: 1em;
    }
  }
  .pdf-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Masquer les contrôles PDF avec CSS */
:deep(.pdf-iframe) {
  margin: 0;
  padding: 0;
}

/* Pour Firefox */
:deep(.pdf-iframe)::-moz-selection {
  background: transparent;
}

/* Pour Chrome/Safari */
:deep(.pdf-iframe)::selection {
  background: transparent;
}

/* Ajoutez ces styles pour masquer la barre de défilement */
:deep(.pdf-iframe)::-webkit-scrollbar {
  display: none;
}

.pdf-preview {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Empêche le débordement */
}

/* Pour s'assurer que l'iframe remplit complètement le conteneur */
.pdf-preview iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: white;
}
  </style>