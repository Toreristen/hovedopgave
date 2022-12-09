<script>
import Modal from '../components/modal/Modal.vue'
import { ref } from "vue";

export default {
  components: { Modal },
  setup () {
    const isShowing = ref(false)
    console.log(isShowing)
    return { isShowing }
  }
}

</script>

<template>
 <div>

   <button @click="isShowing = true">
     show modal
    </button>
    
    <Modal v-show="isShowing" @close="isShowing = false">
      <p>
        Modal indhold
      </p>
    </Modal>
<div>

  <img src="http://www.placekitten.com/1220/1000" alt="">
</div>
    
  </div>
</template>

<style lang="scss" scoped>



</style>