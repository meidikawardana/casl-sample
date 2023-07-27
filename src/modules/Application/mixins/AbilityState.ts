import defineAbilityFor from 'src/app/abilities/abilities'
import { ABILITY_TOKEN } from '@casl/vue'
import AdminUser from 'src/app/configs/AdminUser.json'

export default {
  inject: {
    $ability: { from: ABILITY_TOKEN }
  },
  computed: {
    isProduction() {
      if (
        process.env.ENV_NAME === 'Production' ||
        process.env.ENV_NAME === 'Beta'
      ) {
        return true
      }
      return false
    },
  },
  created() {
    console.log('Ability state created')
  },
  mounted() {
    console.log('Ability state mounted')
    this.setUpdatePermissions()
  },
  methods: {
    async setUpdatePermissions() {
      // Setup User access
      if (!this.isProduction) {
        console.log('Not a production environment')
        // Added to simulate a slow network in production
        await this.sleep(1000)
      }

      console.log('--user update', AdminUser)
      console.log('Ability update')
      this.$ability.update(defineAbilityFor(AdminUser))
      const c = this.$ability.can("create", "Sep")
      console.log('--can.Create.SEP in state', c)
    },
    sleep(ms: number): Promise<void> {
      return new Promise((resolve) => setTimeout(() => {
        // console.log('resolved')
        resolve()
      }, ms))
    }
  }
}
