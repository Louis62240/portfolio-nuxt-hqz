<template>
  <div ref="canvasContainer" class="canvas-container">
    <div class="bg-image-wrapper">
      <img src="@/assets/images/sunflowers.jpeg" alt="Sunflowers" class="bg-image" />
    </div>
    <div class="cv-viewer-wrapper">
      <cvViewer />
    </div>
  </div>
</template>

<script>
import cvViewer from '@/components/accueil/cvViewer'

export default {
  name: 'SunflowerImage',
  mounted() {
    this.updateCanvasSize()
    window.addEventListener('resize', this.updateCanvasSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateCanvasSize)
  },
  components: {
    cvViewer,
  },
  methods: {
    updateCanvasSize() {
      const container = this.$refs.canvasContainer
      this.$el.style.width = `${container.offsetWidth}px`
      this.$el.style.height = `${container.offsetHeight}px`
    },
  },
}
</script>

<style scoped>
.canvas-container {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
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
  filter: blur(5px);
  z-index: 1;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
}

.cv-viewer-wrapper {
  position: relative;
  z-index: 2;
  transform: translateX(40%); /* Légère décalage à droite */
  max-width: 60%; /* Ajustez la largeur maximale si nécessaire */
  padding: 20px;
  /* background: rgba(255, 255, 255, 0.9); 
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px; */
}
</style>
