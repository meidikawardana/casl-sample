<template>
  <q-bar class='toolbar text-grey-9 vertical-middle' style='height: 50px; min-width:100%'>
    <slot></slot>
  </q-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
    }
  }
})
</script>
