import { abilitiesPlugin } from '@casl/vue'
import { boot } from 'quasar/wrappers'
import defineAbilityFor from 'src/app/abilities/abilities'
import GuestUser from 'src/app/configs/GuestUser.json'

// Sets User Permissions
export default boot(async ({ app }) => {
  console.log('--user initial', GuestUser)

  app.use(abilitiesPlugin, defineAbilityFor(GuestUser))

})
