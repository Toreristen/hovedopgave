<script>
import { RouterLink } from "vue-router";
import Modal from '../modal/Modal.vue';
import { ref } from "vue";

export default {
  components: { Modal },
  setup () {
    const isShowing = ref(false)
    console.log(isShowing)
    return { isShowing }
  },
  data() {
    return {
      hover: false,
    }
  }
}

</script>

<template>
  <div class="bg">
    <header class="main-header">
      <div class="header-logo">
        <RouterLink to="/">
          <img
            class="img-fluid"
            src="../../assets/img/logo_2022_geodata_orange.svg"
            alt="Logo"
          />
        </RouterLink>
      </div> 
      <nav class="header-nav" >
        <RouterLink @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }" class="header-links" to="/">Home</RouterLink>
        <div @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }" @click="isShowing = true" class="header-links ">Ydelser ^
        </div>
        <RouterLink @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }" class="header-links" to="/faggrupper"
          >Faggrupper</RouterLink
        >
        <RouterLink @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }" class="header-links" to="/cases">Cases</RouterLink>
        <RouterLink @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }" class="header-links" to="/om-os">Om os</RouterLink>
        <RouterLink @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }" class="header-links" to="/kontakt">Kontakt</RouterLink>
      </nav>
      <div class="header-support">
        <a href="#"> support </a>
      </div>
    </header>
    <Modal v-show="isShowing" @close="isShowing = false">
            <p>
              Modal indhold
            </p>
            
          </Modal>
  </div>
</template>
<!-- Make it scoped to not make it apply to everything -->
<style lang="scss" scoped>
@import "../header/Navbar.scss";
</style>
