<template>
  <my-toolbar-button icon='fa-solid fa-plus' :label='label' :tooltip='tooltip'>
  </my-toolbar-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyCreateButton',
  props: {
    label: {
      required: false,
      default: 'Create'
    },
    tooltip: {
      required: false,
      default: null,
      type: String
    }
  },
  data() {
    return {
    }
  }
})
</script>
