<script >
import Contact from '../components/contact/Contact.vue';

import LoisContact from '../components/contact/LoisContact.vue';
import GisContact from '../components/contact/GisContact.vue';

import { ref } from "vue";

export default {
  components: { Contact, LoisContact, GisContact },
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

    <div class="contact-buttons">
      <button :class="loisShown ? 'lois-active' : '' " class="lois-btn" @click="loisShown = true, gisShown = false">
        LOIS & Census
      </button>
      <button :class="gisShown ? 'gis-active' : '' " class="gis-btn" @click="loisShown = false, gisShown = true">
        GIS
      </button>
    </div>

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
@import "../assets/styling/variables/colors";
@import "../assets/styling/variables/fonts";
.contact-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;

  

  
  margin-top: 5rem;
 

  .lois-btn {
    background-color: #A0A0A0;
    height: 6rem;
    margin-top:2rem;
    border: none;
    text-align: end;
    padding-right: 1.5rem;
    color: $white;
    font-size: 2rem;
    font-weight: 600;
    
    box-shadow: inset -10px -10px 8px -8px $darkShadow;
  }

  .lois-active {
    transition: 0.05s ease-in;
    background-color: #D1D1D1;
    color: $darkBlue;
    font-size: 2.2rem;
    font-weight: 600;
    height: 7rem;
    border: none;
    border-radius: 0 4px 0 0;
    
    box-shadow: none;
    margin-top: 1rem;
  }

  .gis-btn {
    background-color: #A0A0A0;
    height: 6rem;
    margin-top: 2rem;
    border: none;
    box-shadow: inset 10px -10px 8px -8px $darkShadow;
    color: $white;
    font-size: 2rem;
    font-weight: 600;
    text-align: start;
    padding-left: 1.5rem;
  }
  
  .gis-active {
    
    transition: 0.05s ease-in;
    background-color: #D1D1D1;
    color: $darkBlue;
    
    font-size: 2.2rem;
    font-weight: 600;
    height: 7rem;
    border: none;
    border-radius: 4px 0 0 0;
    margin-top: 1rem;
    box-shadow: none;
}
}

</style>