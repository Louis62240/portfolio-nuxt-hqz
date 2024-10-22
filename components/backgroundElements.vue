<template>
    <div ref="canvasContainer" class="canvas-container"></div>
  </template>
  
  <script>
  export default {
    name: 'Sunflower',
    data() {
      return {
        p5: null,
        sketch: null,
      }
    },
    mounted() {
      if (process.client) {
        import('p5').then((p5Module) => {
          const p5 = p5Module.default;
          this.createSketch(p5);
        });
      }
    },
    beforeDestroy() {
      if (this.p5) {
        this.p5.remove();
      }
    },
    methods: {
      createSketch(p5) {
        const component = this;
        
        const sketch = function(p) {
          let fArray = [];
          let bg;
          let hatchSize = 50; // Réduit de moitié
          let hatchToggle = true;
          let chatchSize = 25; // Réduit encore plus
          let cnv;
          
          p.preload = function() {
            bg = p.loadImage(new URL('@/assets/images/sunflowers.jpeg', import.meta.url).href);
          };
  
          function updateCanvasSize() {
            const container = component.$refs.canvasContainer;
            const w = container.offsetWidth;
            const h = container.offsetHeight;
            p.resizeCanvas(w, h);
            
            fArray = [];
            const numFocalPoints = 300; // Réduit encore plus pour plus de vitesse
            const spacingX = w / (numFocalPoints + 1);
            const spacingY = h / (numFocalPoints + 1);
  
            for (let i = 1; i <= numFocalPoints; i++) {
              const focalPoint = p.createVector(i * spacingX, i * spacingY);
              fArray.push(focalPoint);
            }
          }
  
          p.setup = function() {
            const container = component.$refs.canvasContainer;
            cnv = p.createCanvas(container.offsetWidth, container.offsetHeight);
            cnv.parent(component.$refs.canvasContainer);
            
            p.strokeWeight(0.8);
            updateCanvasSize();
  
            window.addEventListener('resize', updateCanvasSize);
          };
  
          p.draw = function() {
            if (hatchToggle) {
              // Augmenté à 5 itérations par frame
              for(let k = 0; k < 5; k++) {
                for (let j = 0; j < fArray.length; j++) {
                  circleHatch(fArray[j].x, fArray[j].y);
                }
                if (hatchSize > 5) {
                  hatchSize -= 2.5; // Réduction plus rapide
                }
              }
            }
          };
  
          function circleHatch(cx, cy) {
            let x = p.random(0, p.width);
            let y = p.random(0, p.height);
            let pixCol = bg.get(bg.width / (p.width / x), bg.height / (p.height / y));
            p.stroke(pixCol);
            let r = p.dist(cx, cy, x, y);
            let theta = p.atan((y - cy) / (x - cx));
            let hs = p.min(200, chatchSize / 10);
            let d = p.random(p.PI / (hs + 10), p.PI / hs);
            p.noFill();
  
            if (cx >= x && cy >= y) {
              theta += p.PI;
              p.arc(cx, cy, r * 2, r * 2, theta - d, theta + d);
            } else if (cx >= x && cy < y) {
              theta -= p.PI;
              p.arc(cx, cy, r * 2, r * 2, theta - d, theta + d);
            } else {
              p.arc(cx, cy, r * 2, r * 2, theta - d, theta + d);
            }
            chatchSize += 0.25; // Augmenté pour une évolution plus rapide
          }
  
          p.keyPressed = function() {
            hatchToggle = !hatchToggle;
          };
  
          function brightenImage(amount) {
            bg.loadPixels();
            for (let i = 0; i < bg.pixels.length; i += 4) {
              bg.pixels[i] += amount;
              bg.pixels[i + 1] += amount;
              bg.pixels[i + 2] += amount;
            }
            bg.updatePixels();
          }
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
    background: rgb(250, 250, 250);
    opacity: 1;
    animation: appear 2s; /* Réduit à 2 secondes */
  }
  
  @keyframes appear {
    0% {
      opacity: .5;
      background: rgb(10,20,0);
    }
    30% { /* Changé à 30% pour une transition encore plus rapide */
      /* background: yellow; */
    }
  }
  
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
  </style>