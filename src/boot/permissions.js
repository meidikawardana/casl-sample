import { abilitiesPlugin } from '@casl/vue'
import { boot } from 'quasar/wrappers'
import defineAbilityFor from 'src/app/abilities/abilities'
import AdminUser from 'src/app/configs/AdminUser.json'

// Sets User Permissions
export default boot(async ({ app }) => {
  console.log('--user initial', AdminUser)

  app.use(abilitiesPlugin, defineAbilityFor(AdminUser))

})
