<script >
import Contact from '../components/contact/Contact.vue';

import LoisContact from '../components/contact/LoisContact.vue';
import GisContact from '../components/contact/GisContact.vue';

import { ref } from "vue";

export default {
  components: { LoisContact, GisContact },
  setup() {
    const loisShown = ref(true)
    const gisShown = ref(false)

    return { loisShown, gisShown }
  },

}

</script>

<template>
  <main>
    <Contact>

    </Contact>

    <button :class="loisShown ? 'lois-active' : '' " class="tester" @click="loisShown = true, gisShown = false">
      knappppeerinh
    </button>
    <button :class="gisShown ? 'gis-active' : '' " @click="loisShown = false, gisShown = true">
      knappppeerinh
    </button>

    <!-- <nav v-show="loisShown" class="sub-nav">
      <div class="btn-1">
        <p class="sub-link" to="/kontakt/lois">LOIS & Census</p>

      </div>
      <div class="btn-2">
        <p class="sub-link" to="/kontakt/gis">GIS</p>
      </div>
    </nav> -->

    <LoisContact v-show="loisShown">

    </LoisContact>

    
    <GisContact v-show="gisShown">

    </GisContact>

  </main>

</template>

<style lang="scss" scoped>
.tester {
  margin-top: 20vh;
  width: 50vw;

}

.lois-active {
  font-size: 4rem;
}

.gis-active {
  font-size: 6rem;
}
</style>