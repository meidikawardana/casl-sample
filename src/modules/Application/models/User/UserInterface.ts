import { IModel } from 'src/app/models/ModelInterface'
import { IRole } from 'src/modules/Application/models/User/RoleInterface'

export interface IUser extends IModel {
  roles: IRole[] | []
}
