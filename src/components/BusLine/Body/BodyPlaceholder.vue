<script setup lang="ts">
import { defineProps } from 'vue';

interface PropsBodyPlaceholder {
  label: string;
}
defineProps<PropsBodyPlaceholder>();
</script>

<template>
  <div class="box__placeholder">{{ label }}</div>
</template>

<style scoped>
.box__placeholder {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #63666e;
  cursor: default;
}
</style>
