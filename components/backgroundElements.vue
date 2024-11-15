<template>
  <div ref="canvasContainer" class="canvas-container">
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sunflower',
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.setBackgroundImage();
  },
  methods: {
    async setBackgroundImage() {
      try {
        const img = new Image();
        img.src = new URL('@/assets/images/sunflowers.jpeg', import.meta.url).href;

        img.onload = () => {
          this.loading = false;
          const container = this.$refs.canvasContainer;
          container.style.backgroundImage = `url(${img.src})`;
          container.style.backgroundSize = 'cover';
          container.style.backgroundPosition = 'center';
          container.style.filter = 'blur(10px)';
        };
      } catch (error) {
        console.error('Failed to load background image:', error);
      }
    }
  }
};
</script>

<style scoped>
.canvas-container {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(98, 111, 71);
  position: relative;
  background-repeat: no-repeat;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(98, 111, 71);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #555;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
