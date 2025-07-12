<template>
  <div class="intro-section">
    <div class="background"></div>

    <div class="content">
      <!-- Овал -->
      <div class="oval-tag" :style="ovalStyle">
        <span>Available for inquiries // Q3</span>
      </div>

      <!-- Имя с анимацией букв -->
      <div class="name-tag">
        <span class="name-wrapper">
          <span
              v-for="(char, index) in nameChars"
              :key="index"
              class="name-char"
              :style="{
              opacity: showLetters ? 1 : 0,
              transform: showLetters ? 'translateY(0)' : 'translateY(10px)',
              transition: `all 0.5s ease-out ${index * 0.05}s`
            }">
            {{ char === ' ' ? '&nbsp;' : char }}
          </span>
        </span>
      </div>

      <!-- Описание -->
      <div class="description" :style="descStyle">
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
      nameChars: [],
      showLetters: false,
      ovalStyle: {
        opacity: 0,
        transform: 'translateY(10px)'
      },
      descStyle: {
        opacity: 0,
        transform: 'translateY(10px)'
      }
    }
  },
  mounted() {
    // Разбиваем имя на буквы
    this.nameChars = this.name.split('')

    // Анимация овала
    setTimeout(() => {
      this.ovalStyle = {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'all 0.4s ease-out'
      }
    }, 200)

    // Анимация букв имени
    setTimeout(() => {
      this.showLetters = true
    }, 300)

    // Анимация описания
    setTimeout(() => {
      this.descStyle = {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'all 0.4s ease-out'
      }
    }, 400)
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

/* Овал */
.oval-tag {
  position: absolute;
  bottom: 180px;
  left: 2rem;
  background: #2a2a2a;
  color: #b3b3b3;
  padding: 6px 18px;
  border-radius: 50px;
  font-size: 12px;
}

/* Имя */
.name-tag {
  position: absolute;
  bottom: 6rem;
  left: 2rem;
  font-size: 64px;
  color: white;
  font-weight: 400;
}

.name-wrapper {
  display: inline-block;
}

/* Буквы имени */
.name-char {
  display: inline-block;
  will-change: transform, opacity;
}

/* Описание */
.description {
  position: absolute;
  bottom: 7rem;
  right: 2rem;
  width: 350px;
  font-size: 14px;
  color: #b3b3b3;
  text-align: right;
}
</style>