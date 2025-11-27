<template>
  <section class="visitors-section">
    <div class="container">
      <h2 class="section-title-light">İlham Veren Ziyaretçilerimiz (8)</h2>
      
      <div class="visitors-grid">
        <div v-for="visitor in visitors" :key="visitor.id" class="visitor-card">
          <img :src="visitor.image" :alt="visitor.name" class="visitor-img" />
          <h4>{{ visitor.name }}</h4>
          <p>{{ visitor.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import visitor1 from '../assets/visitors/visitor1.jpeg'
import visitor2 from '../assets/visitors/visitor2.jpeg'
import visitor3 from '../assets/visitors/visitor3.jpeg'
import visitor4 from '../assets/visitors/visitor4.jpeg'
import visitor5 from '../assets/visitors/visitor5.jpeg'
import visitor6 from '../assets/visitors/visitor6.jpeg'
import visitor7 from '../assets/visitors/visitor7.jpeg'
import visitor8 from '../assets/visitors/visitor8.jpg'

const visitors = ref([
    { id: 1, name: 'Onur Topaloğlu', title: 'Sorumlu/Eğitim Kaptan Pilot', image: visitor1 },
    { id: 2, name: 'Nur Erdem Özeren', title: 'Eğitim ve Kariyer Danışmanı', image: visitor2 },
    { id: 3, name: 'Serdar Turan', title: 'HBR Türkiye Genel Yayın Yönetmeni', image: visitor3 },
    { id: 4, name: 'Şoray Uzun', title: 'Sunucu ve Senarist', image: visitor4 },
    { id: 5, name: 'Ufuk Batum', title: 'Girişimci ve Konuşmacı', image: visitor5 },
    { id: 6, name: 'Çağdaş Orman', title: 'Plastik Cerrahı', image: visitor6 },
    { id: 7, name: 'İlayda Bilek', title: 'Marka Danışmanı', image: visitor7 },
    { id: 8, name: 'Kırık Pena', title: 'Müzik Grubu', image: visitor8 },
]);
</script>

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


.visitors-section {
  background-color: #0b1120; 
  padding: 4rem 0 6rem 0;
  text-align: center;
}

.section-title-light {
  color: #fff;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 3rem;
}

.visitors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.visitor-card {
  background-color: #1f2937;
  padding: 1rem;
  border-radius: 12px;
  color: #fff;
  transition: transform 0.3s;
}

.visitor-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.visitor-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.75rem;
  border: 3px solid #3b82f6;
}

.visitor-card h4 {
  margin: 0 0 0.2rem 0;
  font-weight: 700;
  color: #fff;
}

.visitor-card p {
  margin: 0;
  font-size: 0.85rem;
  color: #9ca3af;
}
</style>