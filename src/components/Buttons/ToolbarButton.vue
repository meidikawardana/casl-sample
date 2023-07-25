<template>
  <q-btn
    class='toolbar-button'
    color='primary'
    :data-cy='dataCy'
    flat
    :icon='icon'
    :label='label'
    :loading='loading'
    padding='xs'
    square
    stack
  >
    <q-tooltip v-if='tooltip'>{{ tooltip }}</q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import _camelCase from 'lodash/camelCase'
import _upperFirst from 'lodash/upperFirst'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyToolbarButton',
  props: {
    icon: {
      required: false,
      default: 'Create',
      type: String
    },
    label: {
      required: false,
      default: 'BUTTON',
      type: String
    },
    tooltip: {
      required: false,
      default: null,
      type: String
    },
    loading: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
    }
  },
  computed: {
    dataCy() {
      return _upperFirst(_camelCase(this.label))
    }
  }
})
</script>
