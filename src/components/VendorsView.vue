<script setup lang="ts">

defineProps<{ vendor: string }>();
</script>

<template>
  <div class="vendors-container">
    Vendors {{ vendor }}
  </div>
</template>
<style lang="scss" scoped></style>
