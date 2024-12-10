<template>
    <section class="min-h-screen bg-[#F5E6D3] text-[#004D3D] py-20 relative overflow-hidden w-full">
      <!-- Background gradient effect -->
      <div class="noise-overlay"></div>
  
      <!-- Floating elements -->
      <div class="floating-elements">
        <div v-for="n in 20" :key="n" 
             class="floating-element"
             :style="{
               '--delay': `${n * 0.5}s`,
               '--size': `${20 + Math.random() * 30}px`,
               '--x': `${Math.random() * 100}vw`,
               '--y': `${Math.random() * 100}vh`
             }">
        </div>
      </div>

      <div class="geometric-pattern fade-in" style="--animation-delay: 0.3s"></div>
      <div class="container-full relative z-10">
        <!-- Section header -->
        <div class="text-center mb-32 reveal-text">
          <h2 class="text-6xl font-bold tracking-tight magical-underline">Parcours Académique</h2>
          <p class="text-xl mt-6 text-[#298B6E] max-w-2xl mx-auto">
            Une progression constante dans le développement web et l'informatique
          </p>
        </div>
  
        <!-- Timeline -->
        <div class="education-timeline">
          <!-- 2023-2024 -->
          <div class="timeline-item reveal-item">
            <div class="timeline-content">
              <div class="time-period">
                <span class="year">2023</span>
                <span class="duration">Présent</span>
              </div>
              <div class="content-wrapper">
                <div class="content-card">
                  <h3 class="text-3xl font-bold mb-4 gradient-text">Bachelor 3 Développement Full-Stack</h3>
                  <p class="text-lg mb-6">Concepteur Développeur d'Applications</p>
                  <div class="skills-grid">
                    <div class="skill-item" v-for="skill in ['React', 'Vue.js', 'Node.js', 'DevOps', 'Cloud', 'CI/CD']" :key="skill">
                      {{ skill }}
                    </div>
                  </div>
                  <div class="achievements">
                    <ul class="achievement-list">
                      <li>Développement d'applications web complexes</li>
                      <li>Maîtrise des architectures modernes</li>
                      <li>Gestion de projets agiles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- 2022-2023 -->
          <div class="timeline-item reveal-item">
            <div class="timeline-content">
              <div class="time-period">
                <span class="year">2022</span>
                <span class="duration">1 an</span>
              </div>
              <div class="content-wrapper">
                <div class="content-card">
                  <h3 class="text-3xl font-bold mb-4 gradient-text">BTS SIO SLAM</h3>
                  <p class="text-lg mb-6">Services Informatiques aux Organisations</p>
                  <div class="skills-grid">
                    <div class="skill-item" v-for="skill in ['Java', 'PHP', 'SQL', 'API REST', 'Spring', 'Laravel']" :key="skill">
                      {{ skill }}
                    </div>
                  </div>
                  <div class="achievements">
                    <ul class="achievement-list">
                      <li>Développement back-end avancé</li>
                      <li>Conception de bases de données</li>
                      <li>Architecture logicielle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- 2021-2022 -->
          <div class="timeline-item reveal-item">
            <div class="timeline-content">
              <div class="time-period">
                <span class="year">2021</span>
                <span class="duration">1 an</span>
              </div>
              <div class="content-wrapper">
                <div class="content-card">
                  <h3 class="text-3xl font-bold mb-4 gradient-text">BTS SIO SLAM</h3>
                  <p class="text-lg mb-6">Première année</p>
                  <div class="skills-grid">
                    <div class="skill-item" v-for="skill in ['HTML/CSS', 'JavaScript', 'Python', 'Algo', 'Git', 'Linux']" :key="skill">
                      {{ skill }}
                    </div>
                  </div>
                  <div class="achievements">
                    <ul class="achievement-list">
                      <li>Fondamentaux du développement web</li>
                      <li>Initiation aux bonnes pratiques</li>
                      <li>Méthodologies de développement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- 2020-2021 -->
          <div class="timeline-item reveal-item">
            <div class="timeline-content">
              <div class="time-period">
                <span class="year">2020</span>
                <span class="duration">1 an</span>
              </div>
              <div class="content-wrapper">
                <div class="content-card">
                  <h3 class="text-3xl font-bold mb-4 gradient-text">Baccalauréat STI2D</h3>
                  <p class="text-lg mb-6">Sciences et Technologies de l'Industrie</p>
                  <div class="skills-grid">
                    <div class="skill-item" v-for="skill in ['Arduino', 'Électronique', 'CAO', 'Mécanique', 'Prototype', 'Design']" :key="skill">
                      {{ skill }}
                    </div>
                  </div>
                  <div class="achievements">
                    <ul class="achievement-list">
                      <li>Introduction à la programmation</li>
                      <li>Conception assistée par ordinateur</li>
                      <li>Projets techniques innovants</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .container-full {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .bg-gradient {
    background: linear-gradient(135deg, rgba(245, 230, 211, 0.8) 0%, rgba(41, 139, 110, 0.1) 100%);
  }
  
  .pattern-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(41, 139, 110, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(41, 139, 110, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    animation: patternMove 20s linear infinite;
  }
  
  .floating-elements {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }
  
  .floating-element {
    position: absolute;
    width: var(--size);
    height: var(--size);
    left: var(--x);
    top: var(--y);
    background: rgba(41, 139, 110, 0.1);
    border-radius: 50%;
    animation: float 20s infinite ease-in-out;
    animation-delay: var(--delay);
  }
  
  .magical-underline {
    position: relative;
    display: inline-block;
  }
  
  .magical-underline::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #298B6E, #004D3D);
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    animation: underlineReveal 1s forwards 0.5s;
  }
  
  .education-timeline {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    position: relative;
    padding: 0 2rem;
  }
  
  .timeline-item {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .timeline-content {
    display: flex;
    gap: 3rem;
    position: relative;
  }
  
  .time-period {
    min-width: 150px;
    text-align: right;
    padding-top: 1rem;
  }
  
  .year {
    font-size: 2rem;
    font-weight: bold;
    color: #004D3D;
    display: block;
  }
  
  .duration {
    font-size: 1.1rem;
    color: #298B6E;
  }
  
  .content-wrapper {
    flex: 1;
    position: relative;
  }
  
  .content-wrapper::before {
    content: '';
    position: absolute;
    left: -1.5rem;
    top: 1.5rem;
    width: 1rem;
    height: 1rem;
    background: #298B6E;
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgba(41, 139, 110, 0.2);
  }
  
  .content-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .content-card:hover {
    transform: translateY(-5px);
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }
  
  .skill-item {
    background: rgba(41, 139, 110, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 30px;
    text-align: center;
    font-size: 0.9rem;
    color: #004D3D;
    transition: all 0.3s ease;
  }
  
  .skill-item:hover {
    background: rgba(41, 139, 110, 0.2);
    transform: translateY(-2px);
  }
  
  .achievement-list {
    list-style: none;
    padding: 0;
  }
  
  .achievement-list li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    color: #004D3D;
  }
  
  .achievement-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #298B6E;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #004D3D, #298B6E);
    -webkit-background-clip: text;
    color: transparent;
  }
  
  /* Animations */
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -20px); }
  }
  
  @keyframes patternMove {
    0% { transform: translateY(0); }
    100% { transform: translateY(30px); }
  }
  
  @keyframes underlineReveal {
    to { transform: scaleX(1); }
  }
  
  /* Reveal animation class */
  .reveal-item.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .time-period {
      min-width: 100px;
    }
    
    .content-card {
      padding: 1.5rem;
    }
  }
  
  @media (max-width: 768px) {
    .timeline-content {
      flex-direction: column;
      gap: 1rem;
    }
  
    .time-period {
      text-align: left;
      padding-left: 2rem;
    }
  
    .content-wrapper::before {
      left: -2rem;
    }
  
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
  }
  
  @media (max-width: 480px) {
    .container-full {
      padding: 0 1rem;
    }
  
    .education-timeline {
      padding: 0 1rem;
    }
  
    .year {
      font-size: 1.5rem;
    }
  }
  </style>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue'
  
  // Intersection Observer pour les animations au scroll
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1
    })
  
    document.querySelectorAll('.reveal-item').forEach(item => {
      observer.observe(item)
    })
  
    // Cleanup
    onUnmounted(() => {
      observer.disconnect()
    })
  })
  </script>