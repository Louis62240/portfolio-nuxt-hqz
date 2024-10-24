<template>
    <div>
        <div>
            <Header @goTo="handleGoTo" />
            <Accueil :sectionToScroll="sectionToScroll" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/header/newHeader.vue';
import Accueil from '@/components/accueil/accueil.vue';

const sectionToScroll = ref(null);

const handleGoTo = (section) => {
    sectionToScroll.value = section;
};

</script>
