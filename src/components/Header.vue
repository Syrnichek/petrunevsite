<template>
  <header class="header">
    <div class="logo" :style="logoStyle">
      PETRUNEV
    </div>

    <nav class="nav">
      <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :style="linkStyle"
          @click.native="triggerAnimation"
      >
        {{ link.name }}
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      links: [
        { path: '/', name: 'Home' },
        { path: '/projects', name: 'Projects' },
        { path: '/contact', name: 'Contact' },
      ],
      isAnimating: false
    };
  },
  computed: {
    logoStyle() {
      return {
        opacity: this.isAnimating ? 1 : 0,
        transform: this.isAnimating ? 'translateY(0)' : 'translateY(-20px)',
        transition: this.isAnimating
            ? 'opacity 0.5s ease-out 1s, transform 0.5s ease-out 1s'
            : 'none'
      };
    },
    linkStyle() {
      return {
        opacity: this.isAnimating ? 1 : 0,
        transform: this.isAnimating ? 'translateY(0)' : 'translateY(-20px)',
        transition: this.isAnimating
            ? 'opacity 0.5s ease-out 1s, transform 0.5s ease-out 1s'
            : 'none'
      };
    }
  },
  methods: {
    triggerAnimation() {
      // Сброс перед запуском
      this.isAnimating = false;

      // Запуск с небольшой задержкой
      setTimeout(() => {
        this.isAnimating = true;
      }, 0.5);
    }
  },
  mounted() {
    // Автозапуск при загрузке
    this.isAnimating = true;
  }
};
</script>

<style scoped>
/* Базовые стили */
.header {
  background: #0d0c0c;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-size: 1rem;
  font-weight: 400;
  padding-left: 2rem;
}

.nav {
  display: flex;
  gap: 2rem;
  padding-right: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;
  font-weight: 400;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Адаптивность */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    padding: 1rem 0;
  }
  .logo {
    padding: 0;
    margin-bottom: 1rem;
  }
  .nav {
    padding: 0;
    gap: 1rem;
  }
}
</style>