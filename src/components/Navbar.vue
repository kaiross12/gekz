<template>
  <nav :class="['navbar', { 'scrolled': isScrolled, 'light-theme': isDarkSection }]">
    <div class="container">
      
      <a href="#home" class="logo" @click.prevent="scrollToSection('#home')">
        GEKZ<span class="dot">.</span>
      </a>

      <div class="nav-pill-wrapper desktop-only">
        <img src="../assets/nav-bg.png" alt="Nav Background" class="pill-bg-image" />
        
        <div class="nav-links">
          <a href="#home" class="nav-link" @click.prevent="scrollToSection('#home')">Ana Sayfa</a>
          <a href="#hakkinda" class="nav-link" @click.prevent="scrollToSection('#hakkinda')">Hakkımızda</a>
          <a href="#etkinlikler" class="nav-link" @click.prevent="scrollToSection('#etkinlikler')">Etkinlikler</a>
          <a href="#sponsorlar" class="nav-link" @click.prevent="scrollToSection('#iletisim')">İletişim</a>
        </div>
      </div>

      <div class="nav-action desktop-only">
        <button class="btn-nav">
          Başvuru Yap <span class="arrow"><i class="fa-solid fa-paper-plane"></i></span>
        </button>
      </div>

      <button class="mobile-toggle" @click="toggleMobileMenu">
        <span :class="['bar', { 'open': isMobileMenuOpen }]"></span>
        <span :class="['bar', { 'open': isMobileMenuOpen }]"></span>
        <span :class="['bar', { 'open': isMobileMenuOpen }]"></span>
      </button>

      <div :class="['mobile-menu', { 'open': isMobileMenuOpen }]">
          <a href="#home" class="nav-link" @click.prevent="scrollToSection('#home')">Ana Sayfa</a>
          <a href="#hakkinda" class="nav-link" @click.prevent="scrollToSection('#hakkinda')">Hakkımızda</a>
          <a href="#etkinlikler" class="nav-link" @click.prevent="scrollToSection('#etkinlikler')">Etkinlikler</a>
          <a href="#sponsorlar" class="nav-link" @click.prevent="scrollToSection('#iletisim')">İletişim</a>
        <button class="btn-nav mobile-btn">
          Başvuru Yap <span class="arrow"><i class="fa-solid fa-paper-plane"></i></span>
        </button>
      </div>

    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      isDarkSection: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20;

      const section = document.getElementById('etkinlikler');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          this.isDarkSection = true;
        } else {
          this.isDarkSection = false;
        }
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    scrollToSection(sectionId) {
      const element = document.querySelector(sectionId);
      if (element) {
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      if (this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* --- Navbar Temel Stil --- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 1000;
  transition: all 0.4s ease;
  background-color: transparent; 
  font-family: 'Inter', sans-serif;
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.0);
  padding: 1rem 0;
}

/* --- Tema Değişimleri --- */
.navbar.light-theme .logo {
  color: #ffffff !important;
  transition: color 0.3s ease;
}

.navbar.light-theme .bar {
  background-color: #ffffff !important;
}

/* --- Container & Logo --- */
.container {
  width: 92%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a1a1a;
  text-decoration: none;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
}

.dot {
  color: #0044cc;
  font-size: 1.5rem;
}

/* --- Kapsül Menü --- */
.nav-pill-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2.5rem;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 68, 204, 0.15);
}

.pill-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.9);
}

.nav-links {
  display: flex;
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.nav-link {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  opacity: 0.9;
  cursor: pointer;
}

.nav-link:hover {
  opacity: 1;
  color: #fff;
  text-shadow: 0 0 10px rgba(255,255,255,0.4);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* --- Buton (GÜNCELLENDİ) --- */
.btn-nav {
  padding: 0.7rem 1.6rem;
  background-color: #0044cc;
  color: #fff;
  border: none;
  border-radius: 50px; /* Daha yuvarlak ve modern */
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px; /* Yazı ve ok arası boşluk */
  box-shadow: 0 4px 15px rgba(0, 68, 204, 0.3); /* Hafif gölge */
}

.btn-nav:hover {
  background-color: #003399;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 68, 204, 0.4);
}

/* Ok Animasyonu */
.arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.btn-nav:hover .arrow {
  transform: translateX(4px); /* Hover olunca ok sağa kayar */
}

/* --- Mobile Toggle --- */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #1a1a1a;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.bar.open:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
.bar.open:nth-child(2) { opacity: 0; }
.bar.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

/* --- Mobile Menu --- */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: #fff;
  box-shadow: -5px 0 15px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;
  gap: 1.5rem;
  transition: right 0.4s ease;
  z-index: 1050;
}

.mobile-menu.open {
  right: 0;
}

.mobile-menu a {
  text-decoration: none;
  color: #1a1a1a;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
}

.mobile-btn {
  margin-top: 1rem;
  width: 100%;
  justify-content: center; /* Mobilde ortala */
}

/* --- Responsive --- */
@media (max-width: 992px) {
  .desktop-only {
    display: none !important;
  }
  
  .mobile-toggle {
    display: flex;
  }
}
</style>