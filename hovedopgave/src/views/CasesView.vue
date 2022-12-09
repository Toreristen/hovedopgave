<script>
import Modal from '../components/modal/Modal.vue'

export default {
  components: Modal
}


</script>



<template>
 <div>

   <button>
     show modal
    </button>
    
    <Modal>
      <p>
        Modal indhold
      </p>
    </Modal>
    
  </div>
</template>

<style lang="scss" scoped>



</style>