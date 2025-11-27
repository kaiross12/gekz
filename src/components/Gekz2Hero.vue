<template>
  <section class="gekz2-hero-section">
    <div class="container">
      <div class="content-wrapper">
        <span class="badge">II. Etkinlik • 29-30 Kasım</span>
        <h1 class="hero-title">
          GEKZ II <span class="accent-text">Kariyer Zirvesi</span> <br>
          Detayları
        </h1>
        <p class="hero-description">
          Sadece iki gün! Kariyer yolculuğunuzu hızlandıracak ilham verici konuşmalar, atölyeler ve networking fırsatları sizi bekliyor. Hemen başvur!
        </p>
        
        <a href="#basvuru-formu-linki" class="btn-primary-blue large-btn">
          Şimdi Başvur & Yerinizi Ayırın!
        </a>
      </div>
    </div>
  </section>
</template>

<script>
// ...
</script>

<style scoped>
.gekz2-hero-section {
  background-color: #ffffff;
  color: #1a1a1a;
  min-height: 85vh; 
  display: flex;
  align-items: center;      /* Dikeyde ortala */
  justify-content: center;   /* Yatayda ortala */
  padding-top: 5rem;
  text-align: center;        /* İçerik metinlerini ortala */
}

/* Container için genel padding ayarı, diğer bileşenlerde de kullanılacak */
/* Eğer global bir CSS dosyan varsa, bu kısmı oraya koymak daha mantıklı */
.container {
  width: 100%; /* Tam genişlik kullan */
  max-width: 1200px; /* Maksimum genişlik belirle */
  margin: 0 auto;
  padding: 0 2rem; /* Yanlardan 2rem padding */
}

.content-wrapper {
  max-width: 700px;
  margin: 0 auto; /* Content'i container içinde ortala */
}

.badge {
  display: inline-block;
  background-color: #e0f2fe;
  color: #0044cc;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.accent-text {
  color: #0044cc;
}

.hero-description {
  font-size: 1.15rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.btn-primary-blue {
  background-color: #0044cc;
  color: #fff;
  padding: 0.9rem 2.2rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-block; /* Butonun padding ve margin almasını sağlar */
}

.btn-primary-blue:hover {
  background-color: #003399;
  transform: translateY(-2px);
}

.large-btn {
  font-size: 1.15rem;
  padding: 1rem 2.5rem;
}

/* Responsive Düzenlemeler */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-description {
    font-size: 1rem;
  }
  .large-btn {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }
  .container {
    padding: 0 1.5rem; /* Daha küçük ekranlarda daha az padding */
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  .container {
    padding: 0 1rem; /* En küçük ekranlar için daha az padding */
  }
}
</style>