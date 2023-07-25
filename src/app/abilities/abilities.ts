import { AbilityBuilder, AnyMongoAbility, createMongoAbility } from '@casl/ability'
import { hasRole } from 'src/modules/Application/actions/HasRole'
import { IUser } from 'src/modules/Application/models/User/UserInterface'

export default function defineAbilityFor(user: IUser): AnyMongoAbility {
  const roles = user.roles
  const { can, build } = new AbilityBuilder(createMongoAbility)

  if (hasRole(roles, 'admin')) {
    console.log('Admin User')
    can('manage', 'all')
    return build()
  }

  if (hasRole(roles, 'guest')) {
    console.log('Guest User')
    can(['create', 'read', 'update'], 'Hazob', { created_by: 'Meidika', status_id: 1 })
  }

  can('read', 'all')
  return build()
}
