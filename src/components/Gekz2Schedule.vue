<template>
  <section id="schedule" class="schedule-section">
    <div class="container">
      <h2 class="section-title-dark">Program Akışı</h2>
      
      <div class="schedule-grid">
        
        <div class="day-schedule">
          <h3>29 KASIM - GÜN 1</h3>
          <div v-for="(item, index) in day1" :key="index" class="program-item">
            <span class="time">{{ item.time }}</span>
            <p class="activity">{{ item.activity }}</p>
            <span class="location">{{ item.location }}</span>
          </div>
        </div>

        <div class="day-schedule">
          <h3>30 KASIM - GÜN 2</h3>
           <div v-for="(item, index) in day2" :key="index" class="program-item">
            <span class="time">{{ item.time }}</span>
            <p class="activity">{{ item.activity }}</p>
            <span class="location">{{ item.location }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const day1 = ref([
    { time: '10:00', activity: 'Kahvaltı', location: 'Ana Salon' },
    { time: '11:00', activity: 'Açılış Konuşması', location: 'Ana Salon' },
    { time: '11:20', activity: '1.Konferans', location: 'Fuar Alanı' },
    { time: '12:00', activity: 'Ara', location: 'Atölye A' },
    { time: '12:30', activity: '2.Konferans', location: 'Ana Salon' },
    { time: '13:10', activity: 'Öğle Arası', location: 'Ana Salon' },
    { time: '15:20', activity: '4.Konferans', location: 'Ana Salon' },
    { time: '16:20', activity: 'Kapanış', location: 'Ana Salon' },
]);

const day2 = ref([
    { time: '10:00', activity: 'Kahvaltı', location: 'Fuar Alanı' },
    { time: '11:00', activity: '1.Konferans', location: 'Ana Salon' },
    { time: '11:40', activity: 'Ara', location: 'Fuar Alanı' },
    { time: '12:00', activity: '2.Konferans', location: 'Atölye B' },
    { time: '12:40', activity: 'Öğle Arası', location: 'Ana Salon' },
    { time: '13:40', activity: '3.Konferans', location: 'Ana Salon' },
    { time: '14:20', activity: 'Ara', location: 'Ana Salon' },
    { time: '14:50', activity: '4.Konferans', location: 'Ana Salon' },
    { time: '15:50', activity: 'Kapanış', location: 'Ana Salon' },
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


.schedule-section {
  padding: 6rem 0;
  background-color: #ffffff;
}

.section-title-dark {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 3rem;
  text-align: center;
}

.schedule-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.day-schedule {
    background-color: #f9f9f9; /* Hafif gri arka plan */
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.03);
}

.day-schedule h3 {
  color: #0044cc;
  font-size: 1.5rem;
  border-bottom: 3px solid #0044cc;
  padding-bottom: 0.8rem;
  margin-bottom: 2rem;
  text-align: left;
}

.program-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 10px;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.program-item:last-child {
    border-bottom: none; /* Son öğede çizgi olmasın */
}

.time {
  font-weight: 700;
  color: #0044cc;
}

.activity {
  font-weight: 600;
  margin: 0;
  color: #333;
}

.location {
  grid-column: 2 / 3;
  font-size: 0.85rem;
  color: #777;
}

@media (max-width: 768px) {
  .schedule-grid {
    grid-template-columns: 1fr;
  }
}
</style>