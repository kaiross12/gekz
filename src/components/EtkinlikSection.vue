<template>
  <section id="etkinlikler" class="events-section">
    <div class="bg-pattern"></div>

    <div class="container">
      
      <header class="section-header">
        <div class="title-wrapper">
          <span class="sub-title">TAKVİMİNİ PLANLA</span>
          <h2 class="section-title">Yaklaşan <span class="text-gradient">Etkinlikler</span></h2>
        </div>
        
        <div class="carousel-controls">
          <button @click="prevSlide" class="control-btn prev" :disabled="isAnimating">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button @click="nextSlide" class="control-btn next" :disabled="isAnimating">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </header>

      <div class="carousel-window" ref="carouselWindow">
        <div 
          class="carousel-track" 
          :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }"
        >
          <div 
            class="carousel-item" 
            v-for="(event, index) in events" 
            :key="index"
            :style="{ flex: `0 0 ${100 / itemsPerSlide}%` }"
          >
            <div class="event-card">
              <div class="card-image-wrapper">
                <img :src="event.image" :alt="event.title" class="card-img" />
                <div class="date-badge">
                  <span class="day">{{ event.day }}</span>
                  <span class="month">{{ event.month }}</span>
                </div>
                <div class="category-tag">{{ event.category }}</div>
              </div>

              <div class="card-content">
                <div class="meta-info">
                  <span>📍 {{ event.location }}</span>
                  <span>⏰ {{ event.time }}</span>
                </div>
                <h3 class="event-title">{{ event.title }}</h3>
                <p class="event-desc">{{ event.desc }}</p>
                
                <a 
                    :href="getEventLink(event.id)" 
                    class="card-link" 
                    @click.prevent="goToDetails(event.id)"
                >
                    Detayları İncele →
                </a>
                
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
// Bu komponent Options API kullandığı için eventImage1 dışarıda tanımlanmalıdır.
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import eventImage1 from '../assets/etkinlik-foto-1.jpeg'

export default {
  name: 'EventsSection',
  data() {
    return {
      currentIndex: 0,
      itemsPerSlide: 3, 
      isAnimating: false,
      events: [
        // ID 1 ve 2 olanlar özel yönlendirmeye sahip olacak
        {
          id: 1, // Yönlendirme için ID ekledik
          title: "GEKZ II Gün-1",
          desc: "İkinci Genç Etkinlik Kariyer Zirvesi programının ilk günü.",
          day: "29",
          month: "KAS",
          category: "GEKZ II",
          location: "Ataköy Uluslararası Gençlik Merkezi",
          time: "10:00",
          image: eventImage1
        },
        {
          id: 2, // Yönlendirme için ID ekledik
          title: "GEKZ II Gün-2",
          desc: "İkinci Genç Etkinlik Kariyer Zirvesi programının ikinci günü.",
          day: "30",
          month: "KAS",
          category: "GEKZ II",
          location: "Ataköy Uluslararası Gençlik Merkezi",
          time: "10:00",
          image: eventImage1
        },
        // Diğer etkinlikler standart davranacak
        {
          id: 3, 
          title: "Networking Gecesi",
          desc: "Sektör liderleri ve yatırımcılarla tanışma fırsatı yakalayacağınız özel gece.",
          day: "20",
          month: "ARA",
          category: "Sosyal",
          location: "Rooftop",
          time: "19:00",
          image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 4, 
          title: "Blockchain Zirvesi",
          desc: "Web3 dünyasının geleceği ve finansal özgürlük üzerine derinlemesine analizler.",
          day: "05",
          month: "OCAK",
          category: "Finans",
          location: "Salon A",
          time: "13:00",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 5, 
          title: "Tasarım Sistemleri",
          desc: "Modern UI/UX süreçlerinde tasarım sistemlerinin önemi ve kurulumu.",
          day: "18",
          month: "ŞUB",
          category: "Tasarım",
          location: "Online",
          time: "20:00",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    };
  },
  mounted() {
    this.updateItemsPerSlide();
    window.addEventListener('resize', this.updateItemsPerSlide);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsPerSlide);
  },
methods: {
    updateItemsPerSlide() {
      if (window.innerWidth < 768) {
        this.itemsPerSlide = 1;
      } else if (window.innerWidth < 1024) {
        this.itemsPerSlide = 2;
      } else {
        this.itemsPerSlide = 3;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.events.length - this.itemsPerSlide) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; 
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    
    // --- GÜNCELLENMİŞ YÖNLENDİRME METOTLARI ---
    getEventLink(id) {
        // ID 1 ve 2 için göreceli yolu döndür
        if (id === 1 || id === 2) {
            return '/gekz2'; 
        }
        return '#'; // Diğerleri için varsayılan hash linki
    },
    
    goToDetails(id) {
        if (id === 1 || id === 2) {
            // Vue Router kullanılıyorsa:
            // this.$router.push('/gekz2');
            
            // Ya da standart pencere yönlendirmesi:
            window.location.href = this.getEventLink(id);
        } else {
            // Diğer etkinlikler için detay sayfasına yönlendirme (örneğin, /etkinlik/3)
            console.log(`Etkinlik ID ${id} için detaylar açılıyor.`);
        }
    }
    // --- YENİ EKLENEN METOTLAR BİTİŞ ---
  }
}
</script>

<style scoped>
/* Mevcut stilleriniz buraya yapıştırılmalıdır */
/* ... */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* Tüm stil kodlarınızın buraya eklendiğini varsayıyorum */

.events-section {
  font-family: 'Inter', sans-serif;
  background-color: #0b1120; 
  color: #fff;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.container {
  width: 92%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.sub-title {
  color: #3b82f6;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
}

.text-gradient {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.carousel-controls {
  display: flex;
  gap: 1rem;
}

.control-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.05);
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover {
  background: #3b82f6;
  border-color: #3b82f6;
}

.carousel-window {
  overflow: hidden; 
  padding: 1rem 0 3rem 0; 
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.carousel-item {
  padding: 0 15px; 
  box-sizing: border-box;
}

.event-card {
  background-color: #1f2937; 
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.event-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(59, 130, 246, 0.5); 
}

.card-image-wrapper {
  position: relative;
  height: 220px;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.date-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: rgba(255, 255, 255, 0.95);
  color: #111;
  padding: 8px 12px;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.date-badge .day {
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 1;
}

.date-badge .month {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #555;
}

.category-tag {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: #3b82f6;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.meta-info {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: #9ca3af;
  margin-bottom: 0.75rem;
}

.event-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  color: #fff;
}

.event-desc {
  font-size: 0.95rem;
  color: #d1d5db;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1; 
}

.card-link {
  color: #60a5fa; 
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.card-link:hover {
  color: #93c5fd;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>