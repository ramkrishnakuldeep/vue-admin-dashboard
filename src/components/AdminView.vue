<script setup lang="ts">
</script>

<template>
  <div class="admin-container">
    <header> Admin </header>
    <section>
      Admin service details
    </section>
  </div>
</template>
<style lang="scss" scoped>
.admin-container {
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
}
</style>
