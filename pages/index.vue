<template>
    <div>
        <div>
            <Header :@scroll-to="handleScrollToSection" />
            <Accueil :section-to-scroll="sectionToScroll" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/header/header.vue';
import Accueil from '@/components/accueil/accueil.vue';

const sectionToScroll = ref(null);

const handleScrollToSection = (sectionRef) => {
    console.log(sectionRef);
    sectionToScroll.value = sectionRef;
};
</script>
