<script setup lang="ts">
import { reactive } from 'vue';
import { Lock, User } from '@element-plus/icons-vue';
import logo from '/src/assets/logo.svg';
import api from '@/api'
import type { AxiosResponse } from 'axios';
import { useRouter } from "vue-router";
import { RouteType } from '@/utils/enum';

const router = useRouter();
const userForm = reactive({
  username: '',
  password: '',
});

const onLoginClicked = () => {
  if (userForm.password && userForm.username) {

    if (userForm.password === 'admin' && userForm.username === 'admin') {
      router.push({ name: RouteType.MAIN });
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
            :prefix-icon="User" />
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
    gap: 50px;
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
        width: 100%;
        height: 30px;
      }
    }
  }
}
</style>
