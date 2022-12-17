<script>


export default {
  data() {
    return {
      scrollPosition: 0,
      navOpen: false,
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
      // console.log(scrollY)
      if (scrollY > this.scrollPosition) {
        document.getElementById('mobile-header').style.backgroundColor = "rgba(255, 255, 255," + scrollY/300 +")";
      }
      else {
        document.getElementById('mobile-header').style.backgroundColor = "transparent";
      }
    }
}
}

</script>

<template>

    <div id="mobile-header" class="mobile-header">
        <RouterLink class="logo-container" to="/">
            <img class="img-fluid" src="../../../assets/img/logo_2022_geodata_orange.svg" alt="logo">
        </RouterLink >
        <div id="sidemenu">
            <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
                <span class="top"></span>
                <span class="mid"></span>
                <span class="bottom"></span>
            </button>
            <transition name="translateX">
                <nav v-show="navOpen">
                    <RouterLink class="logo-container logo-container-inside" to="/">
            <img class="img-fluid" src="../../../assets/img//logo_2022_geodata_white_orange.svg" alt="logo">
            </RouterLink >
                    <div>
                        <ul class="sidemenu__list">
                            <li class="sidemenu__item"><a href="#">Ydelser</a></li>
                            <li class="sidemenu__item"><RouterLink to="/faggrupper/kommuner">Faggrupper</RouterLink></li>
                            <li class="sidemenu__item"><RouterLink to="/cases">Cases</RouterLink></li>
                            <li class="sidemenu__item"><RouterLink to="/om-os">Om Os</RouterLink></li>
                            <li class="sidemenu__item"><RouterLink to="/kontakt">Kontakt</RouterLink></li>
                        </ul>
                    </div>
                    
                </nav>
            </transition>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import './MobileNav.scss';
</style>
