<template>
  <header ref="header">
    <div class="flex items-center space-x-4">
      <img
        src="@/assets/images/logo.png"
        alt="Logo"
        class="logo h-24 w-24 my-5 mx-5"
      />
    </div>
    <!-- div permettant d'afficher le menu sur la droite -->
    
  </header>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue";

const header = ref(null);

onMounted(() => {
  // Animation du logo au chargement
  gsap.from(".logo", {
    opacity: 0,
    scale: 0.5,
    rotation: 45,
    duration: 1.5,
    ease: "power4.out",
    delay: 4,
  });

  // Ajouter une animation de hover via GSAP
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
});
</script>


<style scoped>
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
header
{
    position:absolute;
}
li {
  animation: fadeInDown 0.5s ease-out forwards;
  opacity: 0;
}

@media (max-width: 768px) {
  nav {
    transition: max-height 0.3s ease-out;
    max-height: 0;
    overflow: hidden;
  }

  nav.open {
    max-height: 300px;
  }
}
</style>
