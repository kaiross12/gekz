<template>
  <div class="radar-spinner-wrapper">
    <div class="radar-spinner">
      <div 
        class="circle" 
        v-for="n in 4" 
        :key="n" 
        :style="circleStyle(n)"
      >
        <div class="circle-inner-container">
          <div class="circle-inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const circleStyle = (index) => {
  const padding = `calc(60px * 5 * 2 * ${index - 1} / 110)`
  const delay = index === 4 ? '0ms' : '300ms'
  return {
    padding,
    animationDelay: delay,
    animationDuration: '4s'
  }
}
</script>

<style scoped>
/* ✅ TÜM EKRANI KAPLAR AMA ŞEFFAFTIR → Gri ekran gider */
.radar-spinner-wrapper {
  position: fixed;
  inset: 0;
  background: transparent;   /* 🔥 GRİ EKRANI KALDIRAN SATIR */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  pointer-events: none;      /* Alttaki sayfayı kilitlemez */
}

/* Kutu modeli */
.radar-spinner, .radar-spinner * {
  box-sizing: border-box;
}

/* Ana spinner */
.radar-spinner {
  height: 60px;
  width: 60px;
  position: relative;
  background: transparent;  /* 🔥 Ek güvenlik */
}

/* Daire katları */
.radar-spinner .circle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform-origin: center; 
  animation: radar-spinner-animation 4s infinite;
}

/* İç daireler */
.radar-spinner .circle-inner,
.radar-spinner .circle-inner-container {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: calc(60px * 5 / 110) solid transparent; 
}

/* Görünen çizgi */
.radar-spinner .circle-inner {
  border-left-color: #011ca2;
  border-right-color: #011ca2;
}

/* Animasyon */
@keyframes radar-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
