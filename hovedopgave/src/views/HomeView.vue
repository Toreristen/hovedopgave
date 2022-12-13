<script setup>
import CasesCTA from '../components/frontpage/CasesCTA.vue';
import Intro from '../components/frontpage/Intro.vue';
import VideoSection from '../components/frontpage/Videosection.vue';
</script>

<template>
 <main>
    <VideoSection></VideoSection>
    <Intro></Intro>
    <CasesCTA></CasesCTA>
    
  </main>
  
</template>

<style lang="scss" scoped>
@import "../assets/styling/variables/colors";


    .header-links {
      color:  $white;

      &:hover {
        opacity: 1;
        color: $white;
      }
    }

</style>
