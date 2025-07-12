<template>
  <div class="fourth-block">
    <div class="line-container">
      <div class="line top-line" ref="topLine"></div>

      <div class="content-wrapper">
        <div class="text-content">
          <h2>Ваш заголовок</h2>
          <p>Основной текст блока расположенный слева. Здесь может быть описание, миссия или другая важная информация.</p>
        </div>
      </div>

      <div class="line bottom-line" ref="bottomLine"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourthBlock',
  mounted() {
    this.animateLines();
  },
  methods: {
    animateLines() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.$refs.topLine.style.transform = 'scaleX(1)';
            this.$refs.bottomLine.style.transform = 'scaleX(1)';
            observer.unobserve(entry.target);
          } else {
            this.$refs.topLine.style.transform = 'scaleX(0)';
            this.$refs.bottomLine.style.transform = 'scaleX(0)';
          }
        });
      }, { threshold: 0.1 });

      observer.observe(this.$el);
    }
  }
}
</script>

<style scoped>
.fourth-block {
  width: 100%;
  min-height: 60vh;
  padding: 100px 0;
  position: relative;
  background-color: #1a1a1a;
  color: white;
  overflow: hidden;
}

.line-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-wrapper {
  width: 92%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.text-content {
  width: 50%;
  padding: 60px 0;
}

.line {
  height: 1px;
  background-color: #b6b3b3;
  width: 94%;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 3s cubic-bezier(0.65, 0, 0.35, 1);
  margin-left: 3%;
}

.top-line {
  margin-top: 150px;
}

.bottom-line {
  margin-bottom: 200px;
}

h2 {
  font-size: 2.8rem;
  margin-bottom: 1.8rem;
  font-weight: 300;
}

p {
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.9;
  max-width: 80%;
}

@media (max-width: 992px) {
  .text-content {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    width: 88%;
  }

  .text-content {
    width: 100%;
    padding: 40px 0;
  }

  h2 {
    font-size: 2.2rem;
  }

  .line {
    width: 96%;
    margin-left: 2%;
  }
}
</style>