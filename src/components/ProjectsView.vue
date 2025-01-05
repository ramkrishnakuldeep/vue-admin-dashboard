<script setup lang="ts">
defineProps<{ project: string }>();
</script>

<template>
  <div class="projects-container">
    Projects {{ project }}
  </div>
</template>
<style lang="scss" scoped></style>
