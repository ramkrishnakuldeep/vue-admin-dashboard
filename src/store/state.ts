import { MENUS, PROJECT_MENUS, ROLES } from '@/utils/enum'
import { uuid } from 'vue-uuid'

export default {
  loading: false,
  users: [
    {
      username: 'admin',
      password: 'admin',
      role: ROLES.ADMIN,
      id: uuid.v1(),
    },
    {
      username: 'root',
      password: 'root',
      role: ROLES.ROOT,
      id: uuid.v1(),
    },
  ],
  menuPermissions: [
    MENUS.USER,
    MENUS.ADMIN,
    MENUS.PERMISSIONS,
    MENUS.LOGS,
    MENUS.PROJECTS,
    PROJECT_MENUS.PROJECT_ODOMETER,
    PROJECT_MENUS.PROJECT_PIECHART,
    MENUS.ROLES,
  ],
}
