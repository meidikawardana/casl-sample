<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />

        <q-toolbar-title> SEP </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
    <my-toolbar>
      <my-create-button v-show='$ability.can("create", "Sep")' id='btn-sep-create' tooltip='Create SEP' @click='onCreate' />
      <q-separator dark inset vertical />
      <q-separator dark inset vertical />
    </my-toolbar>
  </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AbilityState from 'src/modules/Application/mixins/AbilityState'

export default defineComponent({
  name: 'ServicesExecutionPlan',
  mixins: [AbilityState],
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
  created() {
    const c = this.$ability.can("create", "Sep")
    console.log('--can.Create.SEP in component', c)
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
