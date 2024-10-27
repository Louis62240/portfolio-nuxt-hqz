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
      p5: null,
      sketch: null,
      loading: true,
      focalPoints: []
    }
  },
  mounted() {
    if (process.client) {
      this.initializeP5();
    }
  },
  beforeDestroy() {
    this.cleanup();
  },
  methods: {
    async initializeP5() {
      try {
        const p5Module = await import('p5');
        const p5 = p5Module.default;
        this.createSketch(p5);
        this.loading = false;
      } catch (error) {
        console.error('Failed to load p5:', error);
      }
    },

    cleanup() {
      if (this.p5) {
        this.p5.remove();
      }
      window.removeEventListener('resize', this.handleResize);
    },

    handleResize() {
      if (this.p5) {
        this.updateCanvasSize();
      }
    },

    createSketch(p5) {
      const component = this;
      
      const sketch = function(p) {
        let bg;
        let cnv;
        
        p.preload = function() {
          return new Promise((resolve, reject) => {
            bg = p.loadImage(
              new URL('@/assets/images/sunflowers.jpeg', import.meta.url).href,
              resolve,
              reject
            );
          });
        };

        function generateDensePoints() {
          const w = p.width;
          const h = p.height;
          const gridSize = 20; // Grille plus fine
          component.focalPoints = [];
          
          // Grille principale
          for (let x = 0; x < w; x += gridSize) {
            for (let y = 0; y < h; y += gridSize) {
              component.focalPoints.push({
                x: x + p.random(-5, 5),
                y: y + p.random(-5, 5)
              });
            }
          }
          
          // Points supplémentaires pour les zones importantes
          const extraPoints = Math.floor((w * h) / 1000);
          for (let i = 0; i < extraPoints; i++) {
            component.focalPoints.push({
              x: p.random(w),
              y: p.random(h)
            });
          }
        }

        function drawFinalState() {
          p.background(98, 111, 71);
          p.strokeWeight(0.8);

          // Plusieurs passes pour créer de la profondeur
          // 1. Base large
          for (let point of component.focalPoints) {
            drawArcsForPoint(point, 20, 'base');
          }

          // 2. Détails moyens
          for (let point of component.focalPoints) {
            drawArcsForPoint(point, 15, 'medium');
          }

          // 3. Détails fins
          for (let point of component.focalPoints) {
            drawArcsForPoint(point, 10, 'fine');
          }

          // 4. Touches finales
          for (let point of component.focalPoints) {
            drawArcsForPoint(point, 5, 'ultra-fine');
          }
        }

        function drawArcsForPoint(point, numArcs, detail) {
          for (let j = 0; j < numArcs; j++) {
            const x = p.random(0, p.width);
            const y = p.random(0, p.height);
            
            const bgX = Math.floor(bg.width / (p.width / x));
            const bgY = Math.floor(bg.height / (p.height / y));
            const pixCol = bg.get(bgX, bgY);
            
            p.stroke(pixCol[0], pixCol[1], pixCol[2], detail === 'ultra-fine' ? 200 : 255);
            
            const r = p.dist(point.x, point.y, x, y);
            const theta = p.atan2(y - point.y, x - point.x);
            
            // Ajuster la taille des arcs selon le niveau de détail
            let d;
            switch(detail) {
              case 'base':
                d = p.random(p.PI / 100, p.PI / 80);
                break;
              case 'medium':
                d = p.random(p.PI / 150, p.PI / 120);
                break;
              case 'fine':
                d = p.random(p.PI / 200, p.PI / 150);
                break;
              case 'ultra-fine':
                d = p.random(p.PI / 250, p.PI / 200);
                break;
            }
            
            p.noFill();
            
            // Variation de la longueur des arcs
            if (detail === 'ultra-fine') {
              const rMod = r * p.random(1.8, 2.2);
              p.arc(point.x, point.y, rMod, rMod, theta - d, theta + d);
            } else {
              p.arc(point.x, point.y, r * 2, r * 2, theta - d, theta + d);
            }
          }
        }

        p.setup = function() {
          const container = component.$refs.canvasContainer;
          cnv = p.createCanvas(container.offsetWidth, container.offsetHeight);
          cnv.parent(component.$refs.canvasContainer);
          
          generateDensePoints();
          drawFinalState();
          
          window.addEventListener('resize', component.handleResize);
        };
      };

      this.p5 = new p5(sketch);
    }
  }
}
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
  background: rgb(98,111,71);
  position: relative;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(98,111,71);
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

canvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
</style>