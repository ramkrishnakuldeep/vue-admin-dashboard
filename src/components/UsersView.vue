<script setup lang="ts">
import store from '@/store';
import { ROLES } from '@/utils/enum';
import type { User } from '@/utils/types';
import { CloseBold, Edit, SuccessFilled } from '@element-plus/icons-vue';
import { computed, reactive, ref } from 'vue';
import { uuid } from 'vue-uuid'

const users = computed(() => store.state.users);
const dialogVisible = ref(false);

const isEdit = ref(users.value.map((user: User) => ({ [user.id]: false })));

const userForm = reactive({
  username: '',
  password: '',
  role: '',
  id: ''
})

const editUser = (user: User) => {
  for (const key in isEdit.value) {
    if (Object.prototype.hasOwnProperty.call(isEdit.value, key)) {
      isEdit.value[key] = false;
    }
  }
  isEdit.value[user.id] = true;
  userForm.username = user.username;
  userForm.role = user.role;
}

const clearForm = () => {
  userForm.id = ''
  userForm.username = ''
  userForm.role = ''
  userForm.password = ''
}

const updateUser = (user: User) => {
  isEdit.value[user.id] = false;
  const params = { ...user }
  for (const key in userForm) {
    if (Object.prototype.hasOwnProperty.call(userForm, key)) {
      if (userForm[key]) {
        params[key] = userForm[key]
      }
    }
  }

  store.dispatch('UPDATE_USER', params);
  clearForm();

}
const createUser = () => {
  dialogVisible.value = false;
  store.dispatch('ADD_NEW_USER', { ...userForm, id: uuid.v1() });
  clearForm();
}
</script>

<template>
  <div class="users-container">
    <header> Users </header>
    <div class="user-list">
      <table>
        <thead>
          <th> ID</th>
          <th>Username</th>
          <th> Role</th>
          <th> Action</th>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="id">{{ user.id }}</td>
            <td class="username">
              <el-input style="width: 150px" v-if="isEdit[user.id]" v-model="userForm.username" type="text"
                :placeholder="user.username" />
              <span v-else>{{ user.username }}</span>

            </td>
            <td class="role">
              <div v-if="isEdit[user.id]">
                <el-select style="width: 150px" v-model="userForm.role" placeholder="Select role">
                  <el-option :label="role" :value="role" v-for="role in ROLES" :key="role" />
                </el-select>
              </div>
              <div v-else>
                {{ user.role }}
              </div>
            </td>
            <td class="action">
              <div v-if="isEdit[user.id]" class="action" style="font-size: 24px">
                <el-icon @click="isEdit[user.id] = false">
                  <CloseBold :size="20" color="#FF3B3B" />
                </el-icon>
                <el-icon @click="updateUser(user)">
                  <SuccessFilled :size="20" color="#06C270" />
                </el-icon>

              </div>
              <div v-else style="font-size: 24px">
                <el-icon @click="(e: Event) => editUser(user)">
                  <Edit :size="20" color="#409efc" />
                </el-icon>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="create" @click="dialogVisible = true"> Create User</button>
  </div>
  <el-dialog v-model="dialogVisible" title="Create a user" width="500">
    <div class="create-user">
      <el-form :model="userForm" label-width="auto" style="max-width: 400px">
        <el-form-item label="Username">
          <el-input v-model="userForm.username" placeholder="Username" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="userForm.password" type="password" placeholder="Password" />
        </el-form-item>
        <el-form-item label="Role">
          <el-select v-model="userForm.role" placeholder="Select role">
            <el-option :label="role" :value="role" v-for="role in ROLES" :key="role" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="createUser">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<style lang="scss" scoped>
.users-container {
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

  .user-list {
    width: 100%;
    flex: 1;
    overflow: auto;

    thead {
      background-color: var(--header-background);
      height: 50px;

      th {
        text-transform: uppercase;
      }
    }

    tbody {

      tr {


        &:nth-child(even) {
          background-color: var(--even-background);
        }

        &:nth-child(odd) {
          background-color: var(--odd-background);
        }
      }


      td {
        text-align: center;


        width: 25%;


        &.action {
          div {
            @include centeredFlex();
          }

          .action {
            @include centeredFlex();
            gap: 10px;

            i {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }

  }

  button.create {
    height: 40px;
    text-transform: uppercase;
  }
}
</style>
