<script setup lang="ts">
import MenuView from '@/components/MenuView.vue';
import router from '@/router';
import store from '@/store';
import { RouteType } from '@/utils/enum';
import { SwitchFilled } from '@element-plus/icons-vue';
import { computed } from 'vue';
import { RouterView } from 'vue-router';

const username = computed(() => store.state.userInfo.username)

const onLogout = () => {
  router.push({ name: RouteType.LOGIN })
}

</script>

<template>
  <main class="main-container">
    <header> Dashboard
      <button class="logout" style="font-size: 24px" @click="onLogout">
        <span class="username"> {{ username }} </span>
        <el-icon>
          <SwitchFilled />
        </el-icon>
      </button>
    </header>
    <section class="main-content">
      <MenuView />
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

    .logout {
      @include centeredFlex();
      border-radius: 8px;
      background-color: transparent;
      color: orange;
      height: 35px;
      position: absolute;
      right: 16px;
      transform: translateX(-50%);
      gap: 10px;

      .username {
        text-transform: capitalize;
      }
    }
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
      width: 75%;
      height: 100%;
      padding: 1rem 0 0;
    }
  }
}
</style>
