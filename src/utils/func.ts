import menuTabs from '@/model/menuTabs'
import type { IMenu } from './types'
import { ROLES, type MENUS } from './enum'
import type { permissions } from '@/utils/types'

export const getMenus = ({
  permissions,
  roles,
}: {
  permissions: { [key in ROLES]: Record<MENUS, permissions> }
  roles: ROLES[]
}) => {
  const menuKeys: MENUS[] = []

  for (let j = 0; j < roles.length; j++) {
    const rolePermissions = permissions[roles[j]]

    for (const key in rolePermissions) {
      if (Object.prototype.hasOwnProperty.call(rolePermissions, key)) {
        const hasAccess = Object.values(rolePermissions[key as MENUS]).filter((val) => val)
        if (hasAccess.length) {
          menuKeys.push(key as MENUS)
        }
      }
    }
  }

  const mainMenus = [...menuTabs()]

  return mainMenus.filter((menu: IMenu) => {
    if (menu.childrens.length === 0) {
      return menuKeys.includes(menu.type)
    } else {
      const subMenus = menu.childrens.filter((sub: IMenu) => {
        if (sub.childrens.length === 0) {
          return menuKeys.includes(sub.type)
        } else {
          const subSubMenus = sub.childrens.filter((subSub: IMenu) => {
            return menuKeys.includes(subSub.type)
          })
          sub.childrens = subSubMenus
          return subSubMenus.length !== 0
        }
      })
      menu.childrens = subMenus
      return subMenus.length !== 0
    }
  })
}
