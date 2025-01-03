<template>
  <div v-if="loading" class="loading">
    <img :src="`${store.state.assetsPath}/loadingIcon.gif`" alt="Loading" />
  </div>
</template>

<script setup lang="ts">
import store from '@/store';
import { computed } from "vue";

const loading = computed(() => store.state.loading);
</script>

<style lang="scss" scoped>
.loading {
  z-index: 1;
  @include centeredFlex();
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);

  img {
    width: 300px;
  }
}
</style>
