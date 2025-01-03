<script setup lang="ts">
import type { IMenu } from '@/utils/types';
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'

const props = defineProps<{ menus: Array<IMenu> }>();
const emit = defineEmits(["clickMenu"]);

const onMenuClick = (menu: IMenu) => {
  console.log('dddd', menu);

  menu.active = !menu.active;

  emit('clickMenu', menu)

}


</script>

<template>
  <div class="menu-container">
    <div class="menu" v-for="menu in props.menus" :key="menu.type">
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
      <div class="sub_menu-container">
        <div class="menu" v-for="subMenu in menu.childrens" :key="subMenu.type">
          <div class="menu-item">
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
          <div class="sub_sub-container">
            <div class="menu" v-for="subSub in subMenu.childrens" :key="subSub.type">
              <div class="menu-item">
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
