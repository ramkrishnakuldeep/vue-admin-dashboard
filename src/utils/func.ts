import menuTabs from '@/model/menuTabs'
import type { IMenu } from './interface'
import { ROLES, type MENUS } from './enum'
import type { IPermissions } from '@/utils/interface'

export const getMenus = ({
  permissions,
  roles,
}: {
  permissions: { [key in ROLES]: Record<MENUS, IPermissions> }
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

export const getPermissions = ({
  permissions,
  roles,
}: {
  permissions: { [key in ROLES]: Record<MENUS, IPermissions> }
  roles: ROLES[]
}) => {
  const tempPer = roles.reduce((acc: any, role: ROLES) => {
    const menuPermission: Record<MENUS, IPermissions> = permissions[role]
    for (const menu in menuPermission) {
      if (Object.prototype.hasOwnProperty.call(menuPermission, menu)) {
        if (!acc[menu]) {
          acc = JSON.parse(JSON.stringify(menuPermission))
        } else {
          for (const key in acc[menu]) {
            if (Object.prototype.hasOwnProperty.call(acc[menu], key)) {
              acc[menu][key] = acc[menu][key] || menuPermission[menu][key]
            }
          }
        }
      }
    }
    return acc
  }, {})
  return tempPer
}
