<template>
    
 <div class="nav-modal">
          <div class="nav-modal-inner">
            <div class="nav-modal-content">
                <slot/>
                <button type="button" @click="$emit('close')"> close </button>

            </div>
          </div>
        </div>

</template>