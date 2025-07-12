<template>
  <FirstBlock/>
  <SecondBlock/>
  <ThirdBlock/>
  <ForthBlock/>
</template>

<script>
import FirstBlock from './modules/Home/FirstBlock.vue';
import SecondBlock from './modules/Home/SecondBlock.vue';
import ThirdBlock from './modules/Home/ThirdBlock.vue';
import ForthBlock from './modules/Home/ForthBlock.vue';

export default {
  name: 'App',
  components: {
    FirstBlock,
    SecondBlock,
    ThirdBlock,
    ForthBlock
  },
};
</script>

<style>
</style>