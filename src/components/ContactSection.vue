<template>
  <section id="iletisim" class="contact-section">
    <div class="bg-shape"></div>

    <div class="container">
      
      <div class="content-wrapper">
        <div class="info-column">
          <span class="sub-title">BİZE ULAŞIN</span>
          <h2 class="section-title">Sorularınız mı Var? <br> <span class="highlight">Haberleşelim.</span></h2>
          <p class="description">
            Etkinlik detayları, sponsorluk fırsatları veya aklınıza takılan her şey için bize yazabilirsiniz. Ekibimiz en kısa sürede dönüş yapacaktır.
          </p>

          <div class="contact-details">
            <div class="detail-item">
              <div class="icon-box">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4>Konum</h4>
                <p>Büyükçekmece Atatürk Anadolu Lisesi,<br>İstanbul, Türkiye</p>
              </div>
            </div>

            <div class="detail-item">
              <div class="icon-box">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4>E-Posta</h4>
                <p>info@gekz.com</p>
              </div>
            </div>
          </div>

          <div class="social-area">
            <p class="social-label">Bizi Takip Edin:</p>
            <div class="social-links">
              <a href="https://instagram.com/gencetkinlikkariyerzirvesi" target="_blank" class="social-btn instagram">
                <i class="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </a>
              
              <a href="#" class="social-btn simple">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-btn simple">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="form-column">
          <form class="contact-form" @submit.prevent="sendMessage">
            <div class="form-group">
              <label>Adınız Soyadınız</label>
              <input type="text" placeholder="Örn: Ahmet Yılmaz" required />
            </div>
            
            <div class="form-group">
              <label>E-Posta Adresi</label>
              <input type="email" placeholder="ornek@email.com" required />
            </div>

            <div class="form-group">
              <label>Konu</label>
              <select>
                <option>Genel Bilgi</option>
                <option>Sponsorluk</option>
                <option>Bilet İşlemleri</option>
                <option>Diğer</option>
              </select>
            </div>

            <div class="form-group">
              <label>Mesajınız</label>
              <textarea rows="4" placeholder="Mesajınızı buraya yazın..." required></textarea>
            </div>

            <button type="submit" class="submit-btn">
              Mesajı Gönder <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
// FontAwesome kullanıyorsan import etmeyi unutma, yoksa main.js'de global olmalı
export default {
  name: 'ContactSection',
  methods: {
    sendMessage() {
      alert("Mesajınız başarıyla gönderildi! (Demo)");
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.contact-section {
  font-family: 'Inter', sans-serif;
  background-color: #f8fafc; /* Çok açık gri/mavi ton */
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  color: #1a1a1a;
}

/* Dekoratif Arka Plan */
.bg-shape {
  position: absolute;
  top: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 68, 204, 0.05) 0%, rgba(255,255,255,0) 70%);
  border-radius: 50%;
  z-index: 0;
}

.container {
  width: 92%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr; /* İki sütun */
  gap: 4rem;
  align-items: start;
}

/* --- SOL KOLON (BİLGİLER) --- */
.sub-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: #0044cc;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  display: block;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.highlight {
  color: #0044cc;
}

.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  font-size: 1.05rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.icon-box {
  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0044cc;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.detail-item h4 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.2rem 0;
}

.detail-item p {
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
}

/* SOSYAL MEDYA */
.social-label {
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

/* Instagram Butonu (Özel Stil) */
.social-btn.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(220, 39, 67, 0.3);
}

.social-btn.instagram:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(220, 39, 67, 0.4);
}

/* Diğer Butonlar */
.social-btn.simple {
  width: 45px;
  height: 45px;
  background-color: #fff;
  color: #555;
  border-radius: 50%;
  font-size: 1.2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  border: 1px solid #eee;
}

.social-btn.simple:hover {
  background-color: #0044cc;
  color: #fff;
  border-color: #0044cc;
}

/* --- SAĞ KOLON (FORM) --- */
.contact-form {
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.06);
  border: 1px solid #f0f0f0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.9rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: all 0.3s;
  background-color: #fcfcfc;
}
.form-group textarea{
    color: #555;
}
.form-group input{
    color: #555;
}

.form-group select{
    color: #555;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0044cc;
  background-color: #fff;
  box-shadow: 0 0 0 3px rgba(0, 68, 204, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background-color: #0044cc; /* Hero'daki ana mavi */
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover {
  background-color: #003399;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 68, 204, 0.2);
}

/* Responsive */
@media (max-width: 992px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .info-column {
    text-align: center;
  }
  
  .contact-details {
    align-items: center; /* Ortalar */
    text-align: left; /* Metinler yine soldan aksın */
    display: inline-flex; /* İçerik kadar genişlik */
  }

  .social-links {
    justify-content: center;
  }
}
</style>