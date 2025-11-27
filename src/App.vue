<script setup>
import RadarSpinner from './components/LoadingScreen.vue'
import Navbar from './components/Navbar.vue' // Navbar'ı import ettik
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 4000)
})
</script>

<template>
  <div v-if="isLoading" class="center-screen">
    <RadarSpinner />
  </div>

  <div v-else class="main-content">
    <Navbar /> <router-view /> </div>
</template>

<style>
/* Global Sıfırlama */
* {
  box-sizing: border-box;
}

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

/* Loading Ekranı */
.center-screen {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  position: fixed;
  inset: 0;
  z-index: 9999;
}
</style>