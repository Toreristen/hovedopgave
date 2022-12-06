<script setup>
import { RouterView } from 'vue-router';
import Nav from './components/header/Navbar.vue'
</script>

<template>
<Nav name:polse ></Nav>
 
<RouterView />

</template>

<style lang="scss" >
@import "./assets/styling/global.scss";
</style>
