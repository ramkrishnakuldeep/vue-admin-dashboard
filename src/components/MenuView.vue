<script setup lang="ts">
import store from '@/store';
import type { IMenu } from '@/utils/types';
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const menus = computed(() => store.state.menus);
const myMenus = ref(menus)
const router = useRouter();

const onMenuClick = (menu: IMenu) => {
  menu.active = !menu.active;
  if (menu.params) {
    router.push({ name: menu.route, params: menu.params });
  }
}


</script>

<template>
  <div class="menu-container">
    <div class="menu" v-for="menu in myMenus" :key="menu.type">
      <div class="menu-item" @click="onMenuClick(menu)">
        <div class="name">
          <el-icon :size="20">
            <component :is="menu.icon" />
          </el-icon>
          <span> {{ menu.label }} </span>
        </div>
        <div class="arrow" v-if="menu.childrens.length">
          <el-icon :size="20">
            <ArrowUp v-if="menu.active" />
            <ArrowDown v-else />
          </el-icon>
        </div>
      </div>
      <div class="sub_menu-container" v-if="menu.active">
        <div class="menu" v-for="subMenu in menu.childrens" :key="subMenu.type">
          <div class="menu-item" @click="onMenuClick(subMenu)">
            <div class="name">
              <el-icon :size="20">
                <component :is="subMenu.icon" />
              </el-icon>
              <span> {{ subMenu.label }} </span>
            </div>
            <div class="arrow" v-if="subMenu.childrens.length">
              <el-icon :size="20">
                <ArrowUp v-if="subMenu.active" />
                <ArrowDown v-else />
              </el-icon>
            </div>
          </div>
          <div class="sub_sub-container" v-if="subMenu.active">
            <div class="menu" v-for="subSub in subMenu.childrens" :key="subSub.type">
              <div class="menu-item" @click="onMenuClick(subSub)">
                <div class="name">
                  <el-icon :size="20">
                    <component :is="subSub.icon" />
                  </el-icon>
                  <span> {{ subSub.label }} </span>
                </div>
                <div class="arrow" v-if="subSub.childrens.length">
                  <el-icon :size="20">
                    <ArrowUp v-if="subSub.active" />
                    <ArrowDown v-else />
                  </el-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  background-color: var(--menu-background);
  padding: 10px;
  height: 100%;
  width: 350px;
  flex: 1;
  overflow: auto;

  .menu {

    .menu-item {
      cursor: pointer;
      @include centeredFlex();
      justify-content: space-between;
      height: 40px;

      .name,
      .arrow {
        @include centeredFlex();
        gap: 10px;
      }
    }

    .sub_menu-container {
      padding-left: 16px;
    }

    .sub_sub-container {
      padding-left: 16px;
    }
  }
}
</style>
