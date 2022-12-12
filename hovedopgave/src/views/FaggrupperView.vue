<script setup>
  import FaggrupperHero from '../components/faggrupper/FaggrupperHero.vue';
  import FaggrupperNav from '../components/faggrupper/FaggrupperNav.vue';
</script>

<template>
 <main>
    <FaggrupperHero></FaggrupperHero>
    <FaggrupperNav></FaggrupperNav>
    <router-view></router-view>

    
  </main>
  
</template>

<style lang="scss" scoped>

</style>