<template>
  <Header />
  <main>
    <router-view></router-view> <!-- Здесь будет отображаться контент страницы -->
  </main>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
/* Общие стили */
body {
  margin: 0;
  font-family: 'Geometria', sans-serif;
}
</style>