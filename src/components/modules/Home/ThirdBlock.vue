<template>
  <div class="third-block">
    <div
        class="image-tile"
        :style="tileStyle"
    ></div>
    <div class="image-mask">
      <span class="projects-text">All projects</span>
    </div>
  </div>
</template>

<script>
import grandCollage from '@/assets/images/grandcollage.png';

export default {
  name: 'ThirdBlock',
  data() {
    return {
      tileImage: grandCollage,
      tileSize: 1000
    }
  },
  computed: {
    tileStyle() {
      return {
        backgroundImage: `url(${this.tileImage})`,
        backgroundSize: `${this.tileSize}px auto`,
        backgroundRepeat: 'repeat'
      }
    }
  },
  methods: {
    navigateToProjects() {
      // Переход на страницу проектов
      this.$router.push('/projects');
    }
  }
}
</script>

<style scoped>
.third-block {
  width: 100%;
  height: 90vh;
  min-height: 300px;
  overflow: hidden;
  position: relative;
  background-color: #1a1a1a;
  cursor: pointer;
}

.image-tile {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: panImage 30s linear infinite;
  filter: brightness(95%) contrast(105%);
  transition: filter 0.3s ease;
}

.image-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
}

.projects-text {
  color: rgba(255, 255, 255, 0);
  font-size: 2rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 300;
  transition: all 0.3s ease;
}

/* Эффекты при наведении */
.third-block:hover .image-mask {
  background-color: rgba(0, 0, 0, 0.5);
}

.third-block:hover .projects-text {
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.third-block:hover .image-tile {
  filter: brightness(85%) contrast(110%);
}

@media (max-width: 768px) {
  .projects-text {
    font-size: 1.5rem;
  }
}
</style>