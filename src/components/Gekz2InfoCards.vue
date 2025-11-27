<template>
  <section class="info-cards-section">
    <div class="container">
      <div class="card-grid">
        
        <div class="info-card">
          <div class="icon-box">📍</div>
          <h3>Konum</h3>
          <p>Ataköy Uluslararası Gençlik Merkezi</p>
          <a href="https://maps.app.goo.gl/kvme55MZv9wrcTobA" target="_blank" class="card-link">Haritada Gör</a>
        </div>

        <div class="info-card">
          <div class="icon-box">⏰</div>
          <h3>Saatler</h3>
          <p>Gün 1: 10:00 - 16:20</p>
          <p>Gün 2: 10:00 - 15:50</p>
        </div>

        <div class="info-card special-card">
          <div class="icon-box">📅</div>
          <h3>Program</h3>
          <p>2 günün çeşitli faaliyetleri</p>
          <a href="#schedule" class="card-link">Detaylı Akışı İncele</a>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Yukarıdaki Hero bölümünden kopyalanan .container stilini buraya da ekleyin */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem; /* Yanlardan 2rem padding */
}

/* Responsive Düzenlemeler için */
@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
}
@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
}


.info-cards-section {
  background-color: #f3f6f9; 
  padding: 4rem 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Minimum genişliği düşürdüm */
  gap: 2rem;
}

.info-card {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.icon-box {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #0044cc; /* İkonlara renk verelim */
}

.info-card h3 {
    font-size: 1.3rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
}

.info-card p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.5;
    margin-bottom: 1rem;
}

.special-card {
    border: 2px solid #0044cc;
}

.card-link {
    color: #0044cc;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
}

.card-link:hover {
    text-decoration: underline;
}
</style>