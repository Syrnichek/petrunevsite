<template>
  <div class="full-width-block">
    <h1>Добро пожаловать!</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.full-width-block {
  width: 100vw;        /* Полная ширина экрана */
  height: 70vh;     /* Треть высоты экрана */
  min-height: 200px;   /* Минимальная высота (чтобы не сжимался слишком сильно) */
  background: #0d0c0c; /* Цвет фона (можно заменить) */
  color: white;        /* Цвет текста */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;       /* Отступы внутри блока */
  box-sizing: border-box; /* Учитываем padding в общей ширине/высоте */
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .full-width-block {
    height: 40vh;      /* На мобильных можно увеличить высоту */
    padding: 0.5rem;   /* Меньшие отступы */
  }
}
</style>