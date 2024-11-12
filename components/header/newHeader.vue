<template>
    <header ref="header" class="flex justify-between items-center p-5">
      <!-- Logo à gauche -->
      <div class="flex items-center space-x-4">
        <img
          src="@/assets/images/newlogowhite.png"
          alt="Logo"
          class="logo h-24 w-24"
        />
      </div>
      <!-- Menu à droite avec positionnement horizontal -->
      <!-- <div>
        <nav>
        <ul class="flex space-x-8">
          <li>
            <a href="#" class="menu-item" @click="goTo('home')">Accueil</a>
          </li>
          <li>
            <a href="#" class="menu-item" @click="goTo('skill')">Compétences</a>
          </li>
          <li>
            <a href="#" class="menu-item" @click="goTo('project')">Projets</a>
          </li>
          <li>
            <a href="#" class="menu-item" @click="goTo('contact')">Contact</a>
          </li>
        </ul>
      </nav>
      </div> -->
    </header>
  </template>
  
<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue";
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  MailIcon
} from '@heroicons/vue/outline';

const header = ref(null);
onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.value.classList.add("header-transparent");
    } else {
      header.value.classList.remove("header-transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Nettoyage lors du démontage du composant
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  // Animations existantes
  gsap.from(".logo", {
    opacity: 0,
    scale: 0.5,
    rotation: 45,
    duration: 1.5,
    ease: "power4.out",
    delay: 4,
  });

  const logo = document.querySelector(".logo");
  logo.addEventListener("mouseenter", () => {
    gsap.to(logo, {
      scale: 1.2,
      rotate: 10,
      duration: 0.3,
      ease: "power2.inOut",
    });
  });

  logo.addEventListener("mouseleave", () => {
    gsap.to(logo, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  });

  gsap.from(".menu-item", {
    opacity: 0,
    y: -20,
    stagger: 0.2,
    duration: 1,
    ease: "power4.out",
    delay: 4,
  });
});
const emit = defineEmits(['goTo']);
function goTo(section) {
  console.log("Go to", section);
  //emit une valeur pour le parent
  emit("goTo", section);
}
</script>
<style scoped>
/* Animation keyframes */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.header-transparent {
  /* background-color: rgba(255, 255, 255, 0.8);  */
  backdrop-filter: blur(10px); /* Flou pour un effet de verre */
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  z-index: 1000;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  animation: fadeInDown 0.5s ease-out forwards;
  opacity: 0;
}

nav ul li a {
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

nav ul li a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
}

.menu-item {
  font-weight: 600;
  letter-spacing: 1px;
}

/* Responsivité pour petits écrans */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  nav ul {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  nav ul li {
    margin-left: 0;
    margin-bottom: 0.5rem;
  }
}
</style>
