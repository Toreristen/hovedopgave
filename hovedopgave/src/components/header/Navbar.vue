<script>
import { RouterLink } from "vue-router";

export default {
  name: "ToggleDiv",
  data: function () {
    return {
      isShow: false,
    };
  },
};
</script>

<template>
  <div class="bg">
    <header class="main-header">
      <div class="header-logo">
        <img
          class="img-fluid"
          src="../../assets/img/logo_2022_geodata_orange.svg"
          alt="Logo"
        />
      </div>
      <nav class="header-nav">
        <RouterLink class="header-links" to="/">Home</RouterLink>
        <div @click="isShow = true" id="ydelser" class="header-links dropdown">
          Ydelser ^
          <div v-show="isShow" class="dropdown-content">
            <div class="grid-container">
              <p>Dropdown indhold her</p>
              <RouterLink to="/ydelser"> Gå til Ydelser </RouterLink>

              <div 
              @click="isShow = false" class="close-btn">
              X
            </div>
            </div>
          </div>
        </div>
        <RouterLink class="header-links" to="/faggrupper"
          >Faggrupper</RouterLink
        >
        <RouterLink class="header-links" to="/cases">Cases</RouterLink>
        <RouterLink class="header-links" to="/om-os">Om os</RouterLink>
        <RouterLink class="header-links" to="/kontakt">Kontakt</RouterLink>
      </nav>
      <div class="header-support">
        <a href="#"> support </a>
      </div>
    </header>
  </div>
</template>
<!-- Make it scoped to not make it apply to everything -->
<style lang="scss" scoped>
@import "../header/Navbar.scss";
</style>
