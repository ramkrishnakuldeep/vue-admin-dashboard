<script setup lang="ts">
import MenuView from '@/components/MenuView.vue';
import { menuTabs } from '@/model/menuTabs';
import store from '@/store';
import type { IMenu } from '@/utils/types';
import { computed } from 'vue';
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();

const filteredMenus = computed(() => {
  const menuPermissions = store.state.menuPermissions;
  return menuTabs().filter((menu: IMenu) => {
    if (menu.childrens.length === 0) {
      return menuPermissions.includes(menu.type);
    } else {
      menu.childrens = menu.childrens.filter((subMenu: IMenu) => {
        if (subMenu.childrens.length === 0) {
          return menuPermissions.includes(subMenu.type);
        } else {
          subMenu.childrens = subMenu.childrens.filter((subSubMenu: IMenu) => {
            return menuPermissions.includes(subSubMenu.type);
          });
          return subMenu.childrens.length !== 0 ? true : false;
        }
      });
      return menu.childrens.length !== 0 ? true : false
    }
  });
});

const onMenuClick = (menu: IMenu) => {
  console.log('fff', onMenuClick);
  router.push({ name: menu.route });
}

</script>

<template>
  <main class="main-container">
    <header> Dashboard </header>
    <section class="main-content">
      <MenuView :menus="filteredMenus" @click-menu="onMenuClick" />
      <section class="route-container">
        <RouterView />
      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  @include columnFlex();
  height: 100%;

  header {
    height: 50px;
    width: 100%;
    @include centeredFlex();
    font-size: 1.25rem;
    background-color: var(--header-background);
    text-transform: uppercase;
  }

  .main-content {
    flex: 1;
    overflow: auto;
    @include centeredFlex();
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;


    section.route-container {
      width: 100%;
      height: 100%;
      padding: 1rem 0 0;
    }
  }
}
</style>
