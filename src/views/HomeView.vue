<template>
  <Navbar />
  <HeroSection @cta-click="onCtaClick" />
  
  <AboutSection />
  <EtkinlikSection />
  <ContactSection />
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import Navbar from '../components/Navbar.vue'
import AboutSection from '../components/AboutSection.vue'
import EtkinlikSection from '../components/EtkinlikSection.vue'
import ContactSection from '../components/ContactSection.vue'

const onCtaClick = () => {
  console.log('CTA butonuna tıklandı')
}
</script>

<style scoped>
body {
  display: block; /* Flex yerine Block yapıyoruz */
  place-items: unset; /* Ortalamayı kaldır */
  min-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Vue'nun root elementinin genişlik sınırını kaldır */
#app {
  max-width: 100%; /* 1280px sınırını kaldır */
  margin: 0;
  padding: 0;
  display: block; /* Flex'i kaldır */
  text-align: left; /* Center'ı kaldır */
  width: 100%;
}
</style>
