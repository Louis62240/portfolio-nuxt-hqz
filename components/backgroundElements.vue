<template>
  <div ref="canvasContainer" class="canvas-container">
    <div class="bg-image-wrapper">
      <img src="@/assets/images/sunflowers.jpeg" alt="Sunflowers" class="bg-image" />
    </div>
    <!-- <div class="cv-viewer-wrapper">
      <cvViewer />
    </div> -->
  </div>
</template>

<script>
import cvViewer from '@/components/accueil/cvViewer'

export default {
  name: 'SunflowerImage',
  components: {
    cvViewer,
  },
  mounted() {
    this.updateCanvasSize()
    this.setupResizeObserver()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('orientationchange', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('orientationchange', this.handleResize)
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  },
  data() {
    return {
      resizeObserver: null,
    }
  },
  methods: {
    updateCanvasSize() {
      const container = this.$refs.canvasContainer
      if (container) {
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        
        this.$el.style.width = `${viewportWidth}px`
        this.$el.style.height = `${viewportHeight}px`
      }
    },
    handleResize() {
      requestAnimationFrame(this.updateCanvasSize)
    },
    setupResizeObserver() {
      if ('ResizeObserver' in window) {
        this.resizeObserver = new ResizeObserver(entries => {
          for (const entry of entries) {
            if (entry.target === this.$refs.canvasContainer) {
              this.handleResize()
            }
          }
        })
        this.resizeObserver.observe(this.$refs.canvasContainer)
      }
    }
  }
}
</script>

<style scoped>
.canvas-container {
  margin: 0;
  padding: 0;
  height: 100vh;
  height: 100dvh; /* Pour les navigateurs modernes qui supportent dvh */
  width: 100vw;
  width: 100dvw; /* Pour les navigateurs modernes qui supportent dvw */
  overflow: hidden;
  background: rgb(98, 111, 71);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: blur(clamp(3px, 1vw, 5px));
  z-index: 1;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  will-change: transform;
}

.cv-viewer-wrapper {
  position: relative;
  z-index: 2;
  width: min(90%, 800px);
  padding: clamp(10px, 2vw, 20px);
  margin: 0 auto;
}

/* Ajustements pour les différentes tailles d'écran */
@media (min-width: 768px) {
  .cv-viewer-wrapper {
    transform: translateX(clamp(0%, 20%, 40%));
    max-width: 60%;
  }
}

@media (max-width: 767px) {
  .cv-viewer-wrapper {
    transform: none;
    max-width: 95%;
    padding: clamp(5px, 1.5vw, 15px);
  }
}

/* Ajustements pour les appareils en mode paysage */
@media (orientation: landscape) and (max-height: 600px) {
  .canvas-container {
    min-height: 100vh;
  }
  
  .cv-viewer-wrapper {
    padding: clamp(5px, 1vw, 10px);
    transform: none;
    max-width: 85%;
  }
}

/* Support des écrans à haute densité de pixels */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .bg-image-wrapper {
    filter: blur(clamp(2px, 0.5vw, 4px));
  }
}

/* Préférence de réduction de mouvement */
@media (prefers-reduced-motion: reduce) {
  .bg-image {
    transform: none;
  }
}

/* Support des écrans ultra-larges */
@media (min-width: 1920px) {
  .cv-viewer-wrapper {
    max-width: 50%;
  }
}

/* Support des petits écrans */
@media (max-width: 360px) {
  .cv-viewer-wrapper {
    padding: 5px;
    max-width: 100%;
  }
}
</style>