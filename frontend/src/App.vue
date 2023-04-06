<script setup>
import Header from './components/Header.vue';
import Restrictor from './components/Restrictor.vue';
</script>

<template>
  <Restrictor enabled :width="720">
    <Header />

    <div id="content">
      <router-view />
    </div>
  </Restrictor>
</template>

<style lang="scss">
body {
  background: url("@/assets/dotted_bg_light.png");
  
  // make background small
  background-size: 200px;

  // make background repeat
  background-repeat: repeat;
}
</style>
