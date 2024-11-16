<template>
    <div class="animation-container">
      <div class="particle-container">
        <div v-for="n in 50" :key="n" class="particle"></div>
      </div>
      <div class="statue" @click="openPopup">
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
        <div class="glow"></div>
        
      </div>
      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <span class="close" @click="closePopup">&times;</span>
          <p>Bienvenue dans la popup !</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatueAnimation',
    data() {
      return {
        showPopup: false
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
      openPopup() {
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false;
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
    border: none; /* Supprime la bordure par défaut du bouton */
    border-radius: 50%; /* Arrondit le bouton */
    width: 50px; /* Largeur du bouton */
    height: 50px; /* Hauteur du bouton */
    cursor: pointer; /* Changement de curseur au survol */
    outline: none; /* Supprime le contour lors de la sélection */
    z-index: 10; /* Assure que le bouton est au-dessus des autres éléments */
    display: flex; /* Utilisé pour centrer l'image */
    justify-content: center; /* Centre l'image horizontalement */
    align-items: center; /* Centre l'image verticalement */
}

.play-button img {
    width: 50%; /* Largeur de l'image par rapport au bouton */
    height: auto; /* Hauteur auto pour garder les proportions */
    pointer-events: none; /* Désactive les événements de souris pour l'image */
}
  
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
  }
  
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
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
  
  /* Ajout d'effets de hover */
  .statue:hover {
    animation-play-state: paused;
  }
  
  .statue:hover .statue-glow {
    animation: glowPulse 2s ease-in-out infinite;
  }
  
  /* Effets de media queries pour la responsivité */
  @media (max-width: 768px) {
    .statue {
      transform: scale(0.8);
    }
  }
  
  @media (max-width: 480px) {
    .statue {
      transform: scale(0.6);
    }
  }
  </style>