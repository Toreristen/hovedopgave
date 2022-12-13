<script>
import { RouterLink } from "vue-router";
import Modal from '../modal/Modal.vue';
import { ref } from "vue";

export default {
  components: { Modal },
  setup() {
    const isShowing = ref(false)
    console.log(isShowing)
    return { isShowing }
  },
  data() {
    return {
      hover: false,
      scrollPosition: 0,
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      console.log(scrollY)
      if (scrollY > this.scrollPosition) {
        document.getElementById('main-header').style.backgroundColor = "rgba(255, 255, 255," + scrollY/300 +")";
        document.getElementById('header-nav').style.color = "black";

      }
      else if (this.$route.path === '/') {
        
        document.getElementById('header-nav').style.color = "white";
      }
      else {
        document.getElementById('main-header').style.backgroundColor = "transparent";
      }
    }
}
}

</script>

<template>
  <div class="bg">
    <header id="main-header" class="main-header" @scroll="handleScoll()">
      <div class="header-logo">
        <RouterLink to="/">
          <img class="img-fluid" src="../../assets/img/logo_2022_geodata_orange.svg" alt="Logo" />
        </RouterLink>
      </div>
      <nav id="header-nav" class="header-nav" 
      
      v-bind:style="
      [this.$route.path === '/' ? {'color': '#FFFFFF'} : {'color': '#000000'} ]">

        <div @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }" @click="isShowing = true"
          class="header-links ">Ydelser ^
        </div>
        <RouterLink @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }"
          class="header-links" to="/faggrupper/kommuner">Faggrupper</RouterLink>
        <RouterLink @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }"
          class="header-links" to="/cases">Cases</RouterLink>
        <RouterLink @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }"
          class="header-links" to="/om-os">Om os</RouterLink>
        <RouterLink @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }"
          class="header-links" to="/kontakt">Kontakt</RouterLink>
      </nav>
      <div class="header-support">
        <a href="#"> support </a>
      </div>
    </header>
    <Modal v-show="isShowing" @close="isShowing = false">
      <section class="modal-grid-container">

        <div class="filler">
          <RouterLink to="/ydelser" @click="$emit('close')">
            ydelser
          </RouterLink>

        </div>

        <div class="filler">

          <figure>

            <img class="img-fluid" src="http://www.placekitten.com/200/80" alt="">

            <figcaption>
              <h4>
                overskrift
              </h4>
              <h5>
                underoverskrift
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos omnis amet pariatur, eaque
                nulla laborum ex numquam aperiam delectus quae asperiores eveniet itaque sit fugiat quam deleniti iste
                eum quisquam fugit est porro totam adipisci! Repellat ex cum corrupti!
              </p>
            </figcaption>
          </figure>

        </div>
        <div class="filler">

        </div>
        <div class="filler">

        </div>


      </section>

    </Modal>
    <div class="nav-spacing">

    </div>
  </div>
</template>
<!-- Make it scoped to not make it apply to everything -->
<style lang="scss" scoped>
@import "../header/Navbar.scss";
</style>
