<template>
    <div class="animation-container">
      <div class="particle-container">
        <div v-for="n in 50" :key="n" class="particle"></div>
      </div>
      <div class="statue" :class="{ 'fade-out': showPopup }" @click="startGameTransition">
        <div class="statue-glow"></div>
        <div class="statue-base">
          <div class="base-highlight"></div>
        </div>
        <div class="statue-body">
          <div class="statue-head">
            <div class="head-highlight"></div>
          </div>
          <div class="statue-torso">
            <div class="torso-detail">
                <button class="play-button"><img src='/images/play-button-arrowhead.png'></button>
            </div>
            <div class="torso-highlight"></div>
          </div>
          <div class="statue-arm left">
            <div class="arm-highlight"></div>
          </div>
          <div class="statue-arm right">
            <div class="arm-highlight"></div>
          </div>
          <div class="statue-leg left">
            <div class="leg-highlight"></div>
          </div>
          <div class="statue-leg right">
            <div class="leg-highlight"></div>
          </div>
        </div>
        <div class="explosion-particles" v-if="isExploding">
          <div v-for="n in 20" :key="n" class="explosion-particle"></div>
        </div>
      </div>
      <div class="game-container" :class="{ 'fade-in': showPopup }" v-if="showPopup">
        <Game/>
      </div>
    </div>
</template>

<script>
import Game from '@/components/Game.vue'
export default {
  name: 'StatueAnimation',
  data() {
    return {
      showPopup: false,
      isExploding: false
    };
  },
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => {
        this.resetParticle(particle);
      });
    },
    resetParticle(particle) {
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
    },
    startGameTransition() {
      this.isExploding = true;
      setTimeout(() => {
        this.showPopup = true;
      }, 1000);
    }
  }
}
</script>

<style scoped>
.animation-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.particle-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #298B6E;
  border-radius: 50%;
  animation: particleFloat linear infinite;
  opacity: 0.6;
}

.statue {
  position: relative;
  width: 200px;
  height: 400px;
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0,77,61,0.2));
  transition: transform 0.3s ease;
}

.statue-glow {
  position: absolute;
  width: 300%;
  height: 300%;
  background: radial-gradient(circle, rgba(41,139,110,0.1) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: glowPulse 4s ease-in-out infinite;
}

.statue-base {
  position: absolute;
  bottom: 0;
  width: 160px;
  height: 40px;
  background: #004D3D;
  border-radius: 50%;
  left: 20px;
  overflow: hidden;
}

.base-highlight {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
  animation: shimmer 3s infinite;
}

.statue-body {
  position: absolute;
  bottom: 40px;
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.statue-head {
  width: 60px;
  height: 60px;
  background: #006A4E;
  border-radius: 50%;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.head-highlight {
  position: absolute;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
  animation: shimmer 3s infinite;
}

.statue-torso {
  width: 80px;
  height: 120px;
  background: #006A4E;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.torso-detail {
  position: absolute;
  width: 60%;
  height: 60%;
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 15px;
  top: 20%;
  left: 20%;
}

.torso-highlight {
  position: absolute;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
  animation: shimmer 3s infinite;
}

.statue-arm {
  position: absolute;
  width: 20px;
  height: 100px;
  background: #298B6E;
  border-radius: 10px;
  top: 80px;
  overflow: hidden;
}

.arm-highlight {
  position: absolute;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
  animation: shimmer 3s infinite;
}

.statue-arm.left {
  left: 30px;
  transform: rotate(30deg);
  animation: waveLeft 4s ease-in-out infinite;
}

.statue-arm.right {
  right: 30px;
  transform: rotate(-30deg);
  animation: waveRight 4s ease-in-out infinite;
}

.statue-leg {
  position: absolute;
  width: 25px;
  height: 120px;
  background: #006A4E;
  border-radius: 10px;
  bottom: 0;
  overflow: hidden;
}

.leg-highlight {
  position: absolute;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
  animation: shimmer 3s infinite;
}

.statue-leg.left {
  left: 60px;
}

.statue-leg.right {
  right: 60px;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  outline: none;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.play-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%) scale(1.1);
}

.play-button img {
  width: 50%;
  height: auto;
  pointer-events: none;
}

.explosion-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.explosion-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #298B6E;
  border-radius: 50%;
  animation: explode 1s ease-out forwards;
  top: 50%;
  left: 50%;
}

.fade-out {
  animation: fadeOut 1s forwards !important;
}

.fade-in {
  animation: fadeIn 1s forwards;
}

.game-container {
  width: 100%;
  height: 100%;
  z-index: 100;
  opacity: 0;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(1deg);
  }
  50% {
    transform: translateY(-20px) rotate(-1deg);
  }
}

@keyframes waveLeft {
  0%, 100% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(45deg);
  }
}

@keyframes waveRight {
  0%, 100% {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(-45deg);
  }
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes particleFloat {
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}

@keyframes explode {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(
      calc(var(--random-x, 0) * 300px - 150px),
      calc(var(--random-y, 0) * 300px - 150px)
    ) scale(0);
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Particules d'explosion avec délais différents */
.explosion-particle:nth-child(1) { --random-x: 0.1; --random-y: 0.3; animation-delay: 0.0s; }
.explosion-particle:nth-child(2) { --random-x: 0.8; --random-y: 0.5; animation-delay: 0.1s; }
.explosion-particle:nth-child(3) { --random-x: 0.3; --random-y: 0.7; animation-delay: 0.2s; }
.explosion-particle:nth-child(4) { --random-x: 0.6; --random-y: 0.2; animation-delay: 0.3s; }
.explosion-particle:nth-child(5) { --random-x: 0.2; --random-y: 0.8; animation-delay: 0.4s; }
.explosion-particle:nth-child(6) { --random-x: 0.9; --random-y: 0.1; animation-delay: 0.5s; }
.explosion-particle:nth-child(7) { --random-x: 0.4; --random-y: 0.6; animation-delay: 0.6s; }
.explosion-particle:nth-child(8) { --random-x: 0.7; --random-y: 0.4; animation-delay: 0.7s; }
.explosion-particle:nth-child(9) { --random-x: 0.1; --random-y: 0.9; animation-delay: 0.8s; }
.explosion-particle:nth-child(10) { --random-x: 0.5; --random-y: 0.3; animation-delay: 0.9s; }

/* Media Queries */
@media (max-width: 768px) {
  .statue {
    transform: scale(0.8);
  }
  
  .explosion-particle {
    transform-origin: center;
  }
}

@media (max-width: 480px) {
  .statue {
    transform: scale(0.6);
  }
}

/* Hover effects */
.statue:hover {
  animation-play-state: paused;
}

.statue:hover .statue-glow {
  animation: glowPulse 2s ease-in-out infinite;
}

.statue:hover .play-button {
  transform: translate(-50%, -50%) scale(1.1);
  background: rgba(255, 255, 255, 0.3);
}
</style>