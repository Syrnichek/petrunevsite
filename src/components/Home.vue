<template>
  <FirstBlock/>
  <SecondBlock/>
</template>

<script>
import FirstBlock from './modules/Home/FirstBlock.vue';
import SecondBlock from './modules/Home/SecondBlock.vue';

export default {
  name: 'App',
  components: {
    FirstBlock,
    SecondBlock
  },
};
</script>

<style>
</style>