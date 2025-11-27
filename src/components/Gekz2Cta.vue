<template>
    <section class="cta-section">
        <div class="container">
            <h2>Fırsatı Kaçırma!</h2>
            <p>Sınırlı sayıdaki kontenjanlar dolmadan hemen yerini ayırt.</p>
            <a href="#basvuru-formu-linki" class="btn-primary-blue final-btn">
                Şimdi Başvur & Yerinizi Ayırın!
            </a>
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

.cta-section {
    background-color: #0044cc; 
    color: #fff;
    padding: 3rem 0;
    text-align: center;
}

.cta-section h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
}

.cta-section p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
}

.btn-primary-blue { /* .final-btn'i de etkilemesi için bu tanım tekrarlandı */
  background-color: #0044cc;
  color: #fff;
  padding: 0.9rem 2.2rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-block;
}

.btn-primary-blue:hover {
  background-color: #003399;
  transform: translateY(-2px);
}

.final-btn {
    background-color: #ffffff; /* Override ederek beyaz yaptık */
    color: #0044cc; /* Yazıyı mavi yaptık */
    font-weight: 700;
    font-size: 1.1rem;
    padding: 0.8rem 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.final-btn:hover {
    background-color: #f0f0f0;
}
</style>