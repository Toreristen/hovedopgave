<script setup>
import { RouterView } from 'vue-router';
import Nav from './components/header/Navbar.vue';
import Footer from './components/footer/Footer.vue';

</script>

<template>
    <div>

        <Nav></Nav>
        
        <RouterView></RouterView>

        <Footer></Footer>
        
    </div>
</template>

<style lang="scss" >

</style>
