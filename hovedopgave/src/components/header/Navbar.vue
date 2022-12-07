<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="main-header">
    <div class="header-logo">
      <img src="../../assets/img/Kaj.png" alt="Logo" />
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
</template>
<!-- Make it scoped to not make it apply to everything -->
<style lang="scss" scoped>
@import "../header/Navbar.scss";

.main-header {
  width: 100%;
  height: 100%;
  background-color: red;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div, nav {
    border: 1px solid black;
  }
  
}




</style>
