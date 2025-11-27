<template>
  <section id="home" class="hero-section-light">
    <div class="bg-shape shape-blur-3"></div>

    <div class="container">
      <div class="hero-wrapper">
        
        <div class="hero-content">
          <span class="badge">II.Etkinlik</span>
          <h1 class="hero-title">
            Genç Etkinlik <br>
            <span class="highlight-container">
              <span class="highlight-text">Kariyer Zirvesi</span>
            </span>
          </h1>
          <p class="hero-description">
            GEKZ, seni sadece bir etkinliğe değil, kendi geleceğine cesur adımlar atmaya, ilham verici deneyimler yaşamaya ve kariyer yolculuğunu şekillendirmeye davet ediyor.
          </p>
          <div class="cta-buttons">
            <button class="btn btn-primary-blue">Keşfetmeye Başla</button>
            <button class="btn btn-outline-blue">
              <span class="play-icon"><i class="fa-solid fa-paper-plane"></i></span> Başvuru Formu
            </button>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-container">
            <img src="../assets/image.png" alt="Modern Mavi Arayüz Elementi" class="main-blue-element" />
            
            <div class="bg-shape shape-blur-1"></div>
            <div class="bg-shape shape-blur-2"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'HeroSectionLight'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* Temel Yapı ve Arka Plan Dokusu */
.hero-section-light {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #1a1a1a;
  min-height: 100vh; 
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;
  position: relative;
  background-image: radial-gradient(#e5e7eb 1.5px, transparent 1.5px);
  background-size: 32px 32px;
}

.container {
  width: 92%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Ana Wrapper */
.hero-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding-top: 2rem;
}

/* Sol İçerik Alanı - ORTALAMA İŞLEMİ BURADA YAPILDI */
.hero-content {
  flex: 1;
  max-width: 550px;
  /* Flexbox ile dikey hizalama ve ortalama */
  display: flex;
  flex-direction: column;
  align-items: center; /* Öğeleri (buton, badge vb.) yatayda ortalar */
  text-align: center;  /* Metinleri ortalar */
}

.badge {
  display: inline-block;
  background-color: #eef4ff;
  color: #0044cc;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  margin-bottom: 0rem;
}

.hero-title {
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #000;
  margin-top: 1rem; /* Badge ile başlık arasına biraz boşluk */
}

.highlight-container {
  position: relative;
  display: inline-block;
}

.highlight-text {
  position: relative;
  z-index: 2;
  color: #fff;
  padding: 0 0.2em;
}

.highlight-container::after {
  content: '';
  position: absolute;
  bottom: 0.1em;
  top: 0.05em;
  left: 0;
  width: 100%;
  height: 1.1em;
  background-color: #011ca2;
  z-index: 1;
  transform: skewX(-10deg);
}

.hero-description {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 90%; /* Açıklamanın çok yayılmasını engeller */
}

/* Butonlar - ORTALAMA EKLENDİ */
.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center; /* Butonları kendi satırında ortalar */
  width: 100%;
}

.btn {
  padding: 0.9rem 1.75rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary-blue {
  background-color: #011ca2;
  color: #fff;
  box-shadow: 0 10px 20px -10px rgba(0, 68, 204, 0.5);
}

.btn-primary-blue:hover {
  background-color: #011ca2;
  transform: translateY(-2px);
}

.btn-outline-blue {
  background: transparent;
  border: 2px solid #011ca2;
  color: #011ca2;
}

.btn-outline-blue:hover {
  background: #eef4ff;
}

.play-icon {
  font-size: 0.8rem;
  margin-right: 0.5rem;
}

/* Sağ Görsel Alanı */
.hero-visual {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.visual-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: auto;
}

.main-blue-element {
  width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 30px 60px -15px rgba(0, 68, 204, 0.25);
  border-radius: 24px;
  transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
  transition: transform 0.5s ease-out;
}

.hero-visual:hover .main-blue-element {
   transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) scale(1.02);
}

/* Dekoratif Şekiller */
.bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  z-index: 1;
  opacity: 0.12;
}

.shape-blur-1 {
  width: 300px;
  height: 300px;
  background-color: #0044cc;
  top: -10%;
  right: -10%;
}

.shape-blur-2 {
  width: 250px;
  height: 250px;
  background-color: #4488ff;
  bottom: -10%;
  left: 10%;
}

.shape-blur-3 {
  width: 400px;
  height: 400px;
  background-color: #00c3ff;
  top: 10%;
  left: -15%;
  opacity: 0.08;
}

/* Responsive */
@media (max-width: 992px) {
  .hero-wrapper {
    flex-direction: column-reverse;
    gap: 3rem;
    text-align: center;
    padding-top: 1rem;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-title {
    font-size: 2.75rem;
  }
  
  .cta-buttons {
    justify-content: center;
  }

  .main-blue-element {
    transform: none;
  }
}
</style>