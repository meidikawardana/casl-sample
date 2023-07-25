<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />

        <q-toolbar-title> SEP </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
    <my-toolbar>
      <my-create-button v-show='$can("create", "Sep")' id='btn-sep-create' tooltip='Create SEP' @click='onCreate' />
      <q-separator dark inset vertical />
      <q-separator dark inset vertical />
    </my-toolbar>
  </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServicesExecutionPlan',
  data() {
    return {
      sepId: 0 as number,
      openChangeLogModal: false,
      openPrint2PdfModal: false
    }
  },
  computed: {
    height() {
      return this.$q.screen.height - 350 + 'px'
    },
  },
  methods: {
    onCreate() {
      alert('Clicked!')
    }
  }
})
</script>

<style lang="scss">
</style>
