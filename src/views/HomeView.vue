<script setup lang="ts">
import MenuView from '@/components/MenuView.vue';
import { RouterView } from 'vue-router';


</script>

<template>
  <main class="main-container">
    <header> Dashboard </header>
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
