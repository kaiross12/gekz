<template>
  <section id="hakkinda" class="about-section">
    <div class="container">
      
      <div class="content-col">
        <div class="section-header">
          <span class="sub-title">HİKAYEMİZ</span>
          <h2 class="section-title">Geleceğin Liderlerini <br> Bugün <span class="accent">İnşa Ediyoruz</span></h2>
        </div>
        
        <p class="description">
          GEKZ, sıradan bir kariyer etkinliği olmanın ötesinde; genç yetenekleri sektör liderleriyle buluşturan, inovasyon ve deneyim odaklı bir ekosistemdir.
        </p>
        
        <p class="description">
          Amacımız, sadece bilgi aktarmak değil, katılımcılarımıza kendi potansiyellerini keşfedecekleri interaktif bir yolculuk sunmaktır.
        </p>

        <ul class="features-list">
          <li>
            <div class="icon-box">✓</div>
            <span>İlham Veren Konuşmacılar</span>
          </li>
          <li>
            <div class="icon-box">✓</div>
            <span>Workshop & Atölyeler</span>
          </li>
          <li>
            <div class="icon-box">✓</div>
            <span>Geniş Networking Ağı</span>
          </li>
        </ul>

        <button class="btn btn-arrow">
          Daha Fazla Oku <span>→</span>
        </button>
      </div>

      <div class="gallery-col">
        <div class="gallery-grid">
          <div class="gallery-item item-main">
            <img src="../assets/about1.png" alt="Etkinlik Ana Anı" />
            <div class="overlay"></div>
          </div>
          
          <div class="gallery-item item-sub-1">
            <img src="../assets/about2.png" alt="Workshop Çalışması" />
          </div>
          
          <div class="gallery-item item-sub-2">
            <img src="../assets/about3.png" alt="Networking Anı" />
          </div>
          
          <div class="deco-circle"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.about-section {
  font-family: 'Inter', sans-serif;
  /* İSTEĞİN ÜZERİNE: Beyaz yerine hafif gri-mavi tonlu arka plan */
  background-color: #f3f6f9; 
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.container {
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
}

/* --- SOL Taraf (Metin) --- */
.content-col {
  flex: 1;
}

.sub-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: #0044cc; /* Hero'daki mavi */
  letter-spacing: 1px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.accent {
  color: #0044cc;
  position: relative;
  display: inline-block;
}

/* Kelime altı vurgusu */
.accent::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: rgba(0, 68, 204, 0.15);
  z-index: -1;
}

.description {
  font-size: 1.05rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: #333;
}

.icon-box {
  width: 24px;
  height: 24px;
  background-color: #0044cc;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

.btn-arrow {
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  color: #0044cc;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.3s;
}

.btn-arrow:hover {
  gap: 1rem;
  text-decoration: underline;
}

/* --- SAĞ Taraf (Galeri Grid) --- */
.gallery-col {
  flex: 1;
  position: relative;
}

.gallery-grid {
  display: grid;
  /* 2 Sütunlu yapı: Sol sütun biraz daha geniş */
  grid-template-columns: 1.2fr 1fr; 
  /* 2 Satırlı yapı */
  grid-template-rows: 200px 220px;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
}

.gallery-item {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* Büyük Resim: Sol sütunu kaplar ve 2 satır boyunca uzanır */
.item-main {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

/* Küçük Resimler: Sağ sütunda alt alta */
.item-sub-1 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.item-sub-2 {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin-top: -20px; /* Hafif asimetri için yukarı kaydır */
  margin-left: -20px; /* Sola kaydırarak diğer resimle bağ kur */
  z-index: 2; /* Üstte dursun */
  border: 4px solid #f3f6f9; /* Arka plan rengiyle aynı border (kesme efekti) */
}

/* Dekoratif Mavi Daire (Resimlerin arkasında) */
.deco-circle {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #dae6ff; /* Çok açık mavi */
  border-radius: 50%;
  top: -30px;
  right: -30px;
  z-index: -1;
}

/* Responsive */
@media (max-width: 992px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
  
  .features-list {
    align-items: center;
  }
  
  .btn-arrow {
    margin: 0 auto;
  }

  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px;
  }
  
  .item-main {
    grid-column: 1 / 3; /* Mobilde tam genişlik */
    grid-row: 1 / 2;
  }
  
  .item-sub-1 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  
  .item-sub-2 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    margin: 0;
    border: none;
  }
}
</style>