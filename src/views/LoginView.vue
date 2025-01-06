<script setup lang="ts">
import { reactive } from 'vue';
import { Lock, Avatar } from '@element-plus/icons-vue';
import logo from '/src/assets/logo.svg';
import api from '@/api'
import type { AxiosResponse } from 'axios';
import { useRouter } from "vue-router";
import { computed } from 'vue';
import store from '@/store';
import type { IUser } from '@/utils/interface';

const router = useRouter();
const userForm = reactive({
  username: '',
  password: '',
});

const users = computed(() => store.state.users);
const menus = computed(() => store.state.menus);

const onLoginClicked = () => {
  if (userForm.password && userForm.username) {
    const user: IUser[] = users.value.filter((user: IUser) => user.username === userForm.username)
    if (user.length) {
      store.dispatch('SET_MENUS', user[0].roles);
      store.dispatch('SET_USER', user[0]);
      const firstMenu = menus.value[0].childrens.length ? menus.value[0].childrens[0].childrens.length ? menus.value[0].childrens[0].childrens[0] : menus.value[0].childrens[0] : menus.value[0]
      router.push({ name: firstMenu.route, params: firstMenu.params });
    } else {
      api.doLogin(userForm).then((response: AxiosResponse) => {
        console.log('response', response);
      });
    }
  }
};


</script>

<template>
  <div class="login">
    <div class="content">
      <div class="logo">
        <img :src="logo" alt="" />
      </div>

      <el-form class="form-withdraw" :model="userForm" label-width="auto" @submit.prevent autocomplete="off">
        <el-form-item>
          <el-input style="width: 240px" v-model="userForm.username" type="text" placeholder="Username" clearable
            :prefix-icon="Avatar" />
        </el-form-item>
        <el-form-item>
          <el-input style="width: 240px" v-model="userForm.password" type="password" placeholder="Password" clearable
            :prefix-icon="Lock" />
        </el-form-item>
        <button class="login-btn" @click="onLoginClicked">
          Login
        </button>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login {
  margin: auto;
  height: 100%;
  @include centeredFlex();

  .content {
    @include columnFlex();
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100%;
    width: 100%;
    max-width: 400px;
    margin: auto;

    .logo {
      img {
        width: 100px;
      }
    }

    form {
      @include columnFlex();
      align-items: center;

      .login-btn {
        width: 240px;
        height: 35px;
      }
    }
  }
}
</style>
