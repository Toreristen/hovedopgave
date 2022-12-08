<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="bg">

    <header class="main-header">
      <div class="header-logo">
        <img class="img-fluid" src="../../assets/img/logo_2022_geodata_orange.svg" alt="Logo" />
      </div>
      <nav class="header-nav">
        <RouterLink class="header-links" to="/">Home</RouterLink>
        <RouterLink class="header-links" to="/ydelser">Ydelser</RouterLink>
        <RouterLink class="header-links" to="/faggrupper">Faggrupper</RouterLink>
        <RouterLink class="header-links" to="/cases">Cases</RouterLink>
        <RouterLink class="header-links" to="/om-os">Om os</RouterLink>
        <RouterLink class="header-links" to="/kontakt">Kontakt</RouterLink>
      </nav>
      <div class="header-support">
        <a href="#">
          support
        </a>
      </div>
    </header>

    <div class="dropdown">
    <button class="dropbtn">
      Ydelser 
      <!-- pil ned her, fontawesome prob -->
    </button>
    <div class="dropdown-content">

      <div class="grid-container">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>

      </div>

    </div>
  </div> 

  </div>
</template>
<!-- Make it scoped to not make it apply to everything -->
<style lang="scss" scoped>
@import "../header/Navbar.scss";
</style>
