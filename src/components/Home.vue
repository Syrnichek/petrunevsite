<template>
  <div class="intro-section">
    <div class="background"></div>

    <div class="content">
      <!-- Овал -->
      <div class="oval-tag" :class="{'show': showOval}">
        <span>Available for inquiries // Q3</span>
      </div>

      <!-- Имя -->
      <div class="name-tag" :class="{'show': showName}">
        <span class="name-wrapper">
          <span v-for="(char, index) in nameChars"
                :key="index"
                class="name-char"
                :class="{'show': showLetters}"
                :style="{transitionDelay: `${index * 0.1}s`}">
            {{ char === ' ' ? '&nbsp;' : char }}
          </span>
        </span>
      </div>

      <!-- Описание -->
      <div class="description" :class="{'show': showDesc}">
        Art-director, helping business unlock their full potential through distinctive, high-end branding
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroSection',
  data() {
    return {
      name: 'Petrunev Egor',
      showOval: false,
      showName: false,
      showDesc: false,
      showLetters: false
    }
  },
  computed: {
    nameChars() {
      return this.name.split('')
    }
  },
  mounted() {
    // Анимация овала
    setTimeout(() => {
      this.showOval = true
    }, 300)

    // Анимация имени (блок)
    setTimeout(() => {
      this.showName = true

      // Анимация букв начинается после появления блока
      setTimeout(() => {
        this.showLetters = true
      }, 800) // Большая задержка для медленного появления
    }, 600)

    // Анимация описания
    setTimeout(() => {
      this.showDesc = true
    }, 900)
  }
}
</script>

<style scoped>
.intro-section {
  position: relative;
  width: 100%;
  height: 66.67vh;
  min-height: 400px;
  background-color: #0d0c0c;
  overflow: hidden;
}

.content {
  position: relative;
  height: 100%;
  padding: 2rem;
}

/* Общие стили */
.oval-tag,
.name-tag,
.description {
  position: absolute;
  opacity: 0;
  transition: all 0.8s ease-out;
}

/* Овал */
.oval-tag {
  bottom: 180px;
  left: 2rem;
  background: #2a2a2a;
  color: #b3b3b3;
  padding: 6px 18px;
  border-radius: 50px;
  font-size: 12px;
  transform: translateY(20px);
}

/* Имя */
.name-tag {
  bottom: 6rem;
  left: 2rem;
  font-size: 64px;
  color: white;
  font-weight: 500;
  transform: translateY(20px);
}

.name-wrapper {
  display: inline-block;
}

.name-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(15px); /* Начальное положение - снизу */
  transition: all 0.3s ease-out; /* Медленная анимация */
}

/* Описание */
.description {
  bottom: 6rem;
  right: 6rem;
  width: 300px;
  font-size: 14px;
  color: #b3b3b3;
  text-align: right;
  transform: translateY(20px);
}

/* Состояния анимации */
.oval-tag.show,
.name-tag.show,
.description.show {
  opacity: 1;
  transform: translate(0);
}

.name-char.show {
  opacity: 1;
  transform: translateY(0); /* Конечное положение */
}
</style>