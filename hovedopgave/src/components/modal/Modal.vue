<template>
  <div class="nav-modal" v-show="open">
    <div class="nav-modal-inner" @click="$emit('close')"></div>
    <div class="nav-modal-content">
      <slot />
      
      <button type="button" @click="$emit('close')"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

@import "./Modal.scss";

</style>
