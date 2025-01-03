<script setup lang="ts">
import { menuTabs } from '@/model/menuTabs';
import store from '@/store';
import type { IMenu } from '@/utils/types';
import { ref } from 'vue';

console.log('menuTabs ', menuTabs);

const submitPermissions = () => {
  let subSubArr: IMenu[] = [];
  let subArr: IMenu[] = [];
  const permissionArr = menuPermissions.value.filter((menu: IMenu) => {
    if (menu.childrens.length === 0) {
      return menu.selected;
    } else {
      const tempSub = menu.childrens.filter((sub: IMenu) => {
        if (sub.childrens.length === 0) {
          return sub.selected;
        } else {
          const tempSubSub = sub.childrens.filter((subSub: IMenu) => {
            return subSub.selected;
          })
          subSubArr = subSubArr.concat(tempSubSub);
        }
      });
      subArr = subArr.concat(tempSub);
    }
  });
  const permissions = [...permissionArr, ...subArr, ...subSubArr].map((menu: IMenu) => menu.type);
  store.dispatch('SET_PERMISSIONS', permissions);
}


const menuPermissions = ref(menuTabs())
</script>

<template>
  <div class="permissions-container">
    <header> Manage permissions </header>

    <div class="permissions-rows">

      <div class="row" v-for="menu in menuPermissions" :key="menu.type">
        <div class="row-item">
          <span> {{ menu.label }} </span>
          <el-switch v-model="menu.selected" />
        </div>
        <div class="sub-row" v-if="menu.selected">
          <div class="row" v-for="sub in menu.childrens" :key="sub.type">
            <div class="row-item">
              <el-checkbox v-model="sub.selected">
                {{ sub.label }}
              </el-checkbox>
            </div>
            <div class="sub-sub" v-if="sub.selected">
              <div class="row" v-for="subSub in sub.childrens" :key="subSub.type">
                <div class="row-item">
                  <el-checkbox v-model="subSub.selected">
                    {{ subSub.label }}
                  </el-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="submit" type="submit" @click="submitPermissions"> Submit </button>

  </div>
</template>
<style lang="scss" scoped>
.permissions-container {
  width: 100%;
  height: 100%;
  @include columnFlex();
  gap: 12px;

  header {
    @include centeredFlex();
    height: 40px;
    font-size: 1.15rem;
    background-color: var(--header-background);
  }

  .permissions-rows {
    flex: 1;
    overflow: auto;
    @include columnFlex();
    gap: 5px;


    .row {
      width: 100%;

      .row-item {
        @include centeredFlex();
        justify-content: space-between;
        height: 50px;
      }
    }

    >.row {
      padding: 5px 10px;
      background-color: var(--even-background);
    }

    .sub-row,
    .sub-sub {
      @include centeredFlex();
      align-items: flex-start;

      .row {
        background-color: var(--even-background);
      }

      .row-item {
        justify-content: center;
      }
    }

    .sub-row {
      gap: 5px;
    }

    .sub-sub {
      flex-wrap: wrap;
      justify-content: flex-start;
      row-gap: 5px;
      column-gap: 5px;

      .row {
        width: calc(50% - 3px);
        background-color: var(--even-background);
      }
    }

  }

  .submit {
    @include centeredFlex();
    height: 40px;
    text-transform: uppercase;
  }

}
</style>
