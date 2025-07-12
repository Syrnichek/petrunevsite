<template>
  <div class="second-block">
    <div class="buttons-container">
      <button
          v-for="(btn, index) in buttons"
          :key="index"
          :class="['nav-button', btn.type]"
          @click="navigateTo(btn.route)">
        <div class="image-container" :style="btn.imageStyle">
          <img :src="btn.image" :alt="btn.label" class="button-image" />
        </div>
        <span class="btn-text">{{ btn.label }}</span>
      </button>
    </div>
  </div>
</template>

<script>
// Импортируем изображения заранее
import pikLogo from '@/assets/images/piklogo.png'
import s7Logo from '@/assets/images/s7Logo.png'
import lentaLogo from '@/assets/images/lentaLogo.png'

export default {
  name: 'SecondBlock',
  data() {
    return {
      buttons: [
        {
          route: '/Pik',
          type: 'outline',
          image: pikLogo,
          imageStyle: {
            width: '98%',
            height: '70%',
            marginBottom: '5%'
          }
        },
        {
          route: '/S7',
          type: 'outline',
          image: s7Logo,
          imageStyle: {
            width: '50%',
            height: '80%',
            marginLeft: '25%'
          }
        },
        {
          route: '/Lenta',
          type: 'outline',
          image: lentaLogo,
          imageStyle: {
            width: '100%',
            height: '80%',
            marginBottom: '0%'
          }
        }
      ]
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
/* Стили остаются такими же, как в предыдущем примере */
.second-block {
  width: 100%;
  height: 90vh;
  min-height: 300px;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons-container {
  display: flex;
  gap: 1.5rem;
}

.nav-button {
  width: 58vh;
  height: 70vh;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

.nav-button.outline {
  border: 2px solid #3a3a3a;
  background-color: transparent;
}

.image-container {
  position: relative;
  transition: all 0.3s ease;
}

.button-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.btn-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  white-space: nowrap;
  color: #b3b3b3;
  font-size: 12px;
  letter-spacing: 2px;
  transition: inherit;
  z-index: 2;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
}

.nav-button:hover .btn-text {
  color: white;
}

.nav-button:hover {
  border-color: white;
}

.nav-button:hover .button-image {
  opacity: 0.9;
}
</style>