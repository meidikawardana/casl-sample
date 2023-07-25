import { abilitiesPlugin } from '@casl/vue'
import { boot } from 'quasar/wrappers'
import defineAbilityFor from 'src/app/abilities/abilities'

// Sets User Permissions
export default boot(async ({ app }) => {
  const user = {
    "id": 5,
    "deleted_at": null,
    "roles": [
        {
            "id": 2,
            "name": "admin",
        }
    ],
  }

  console.log('--user', user)

  app.use(abilitiesPlugin, defineAbilityFor(user), {
    useGlobalProperties: true,
  })

})
