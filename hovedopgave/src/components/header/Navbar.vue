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
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div class="header-support">
        <button>
          support
        </button>
      </div>
    </header>
  </div>
</template>
<!-- Make it scoped to not make it apply to everything -->
<style lang="scss" scoped>
@import "../header/Navbar.scss";

.img-fluid {
  width: 100%;
  height: auto;
}


.main-header {
  width: 95%;
  
  margin: 2rem auto;
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  div, nav {
    border: 1px solid black;
  }
  
  .header-logo {
    width: 125px;


    display: flex;
    justify-content: center;
    align-items: center;

  }

}



</style>
