<script setup lang="ts">
import store from '@/store';
import { ROLES, MENUS } from '@/utils/enum';
import { toRef } from 'vue';
import { computed } from 'vue';


const props = defineProps<{ role: ROLES }>();

const rolePermissions = computed(() => store.state.rolePermissions);

const roleForm = toRef(() => rolePermissions.value[props.role]);

const submitConfig = () => {
  store.dispatch('SET_ROLE_PERMISSION', { role: props.role, data: roleForm.value });
}

</script>

<template>
  <div class="permission-container">
    <header> {{ role }} Permission config </header>
    <div class="permission-content">

      <div v-for="(val, key) in roleForm" :key="key" class="row">
        <div class="name">
          {{ Object.keys(MENUS)[Object.values(MENUS).indexOf(key)] }}
        </div>
        <div class="permission">
          <div v-for="(value, col) in val" :key="col" class="item">
            <div class="col-name">{{ col }}</div>
            <el-checkbox v-model="val[col]"></el-checkbox>
          </div>
        </div>
      </div>
    </div>
    <button class="submit" @click="submitConfig"> Submit</button>
  </div>
</template>
<style lang="scss" scoped>
.permission-container {

  height: 100%;
  @include columnFlex();
  gap: 12px;

  header {
    @include centeredFlex();
    height: 40px;
    font-size: 1.15rem;
    background-color: var(--header-background);
  }

  .permission-content {
    flex: 1;
    overflow: auto;

    .row {
      @include centeredFlex();
      padding: 5px 10px;

      &:nth-child(odd) {
        background-color: var(--odd-background);
      }

      &:nth-child(even) {
        background-color: var(--even-background);
      }

      justify-content: flex-start;

      .name {
        width: 300px;
      }

      .permission {
        width: 100%;
        flex: 1;
        @include centeredFlex();


        .item {
          @include columnFlex();
          align-items: center;

          .col-name {
            text-transform: uppercase;
          }
        }
      }
    }
  }

  .submit {
    height: 40px;
    cursor: pointer;
  }
}
</style>
