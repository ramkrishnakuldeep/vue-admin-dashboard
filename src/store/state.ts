import { ROLES } from '@/utils/enum'
import { getMenus } from '@/utils/func'
import {
  adminPermissions,
  rootPermissions,
  userPermissions,
  vendorPermissions,
} from '@/utils/permissionData'
import type { State } from '@/utils/types'
import { uuid } from 'vue-uuid'

export default {
  loading: false,
  users: [
    {
      username: 'admin',
      password: 'admin',
      roles: [ROLES.ADMIN],
      id: uuid.v1(),
    },
    {
      username: 'root',
      password: 'root',
      roles: [ROLES.ROOT],
      id: uuid.v1(),
    },
    {
      username: 'vendor',
      password: 'vendor',
      roles: [ROLES.VENDOR],
      id: uuid.v1(),
    },
    {
      username: 'kuldeep',
      password: 'kuldeep',
      roles: [ROLES.USER, ROLES.ADMIN],
      id: uuid.v1(),
    },
  ],
  rolePermissions: {
    [ROLES.ROOT]: rootPermissions(),
    [ROLES.ADMIN]: adminPermissions(),
    [ROLES.USER]: userPermissions(),
    [ROLES.VENDOR]: vendorPermissions(),
  },
  userInfo: {
    username: 'admin',
    password: 'admin',
    roles: [ROLES.ADMIN],
  },
  menus: getMenus({ permissions: { [ROLES.ADMIN]: adminPermissions() }, roles: [ROLES.ADMIN] }),
} as State
