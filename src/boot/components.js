import { boot } from "quasar/wrappers";
import { defineAsyncComponent } from "vue";
import MyToolbarButton from 'components/Buttons/ToolbarButton.vue'
import MyToolbar from 'components/Toolbar/TheToolbar.vue'

const MyCreateButton = defineAsyncComponent(() =>
  import('components/Buttons/CreateButton.vue')
)
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.component("MyCreateButton", MyCreateButton)
  app.component('MyToolbarButton', MyToolbarButton)
  app.component('MyToolbar', MyToolbar)
});
