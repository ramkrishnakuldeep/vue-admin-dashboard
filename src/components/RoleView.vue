<script setup lang="ts">
import { ROLES } from '@/utils/enum';
import { Mic } from '@element-plus/icons-vue';

</script>

<template>
  <div class="role-container">
    <header> Roles </header>
    <section>
      <div class="role" v-for="role in ROLES" :key="role">
        <el-icon>
          <Mic />
        </el-icon>
        {{ role }}
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.role-container {
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

  section {
    @include columnFlex();
    gap: 10px;

    .role {
      @include centeredFlex();
      gap: 5px;
      justify-content: flex-start;
      width: 100%;
      background-color: var(--odd-background);
      padding: 5px 20px;
      text-transform: uppercase;
    }
  }
}
</style>
