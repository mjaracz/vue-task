<script setup lang="ts">
import { defineProps } from 'vue';

interface PropsBodyHeader {
  label: string;
}
defineProps<PropsBodyHeader>();
</script>

<template>
  <header class="box__header">{{ label }}</header>
</template>

<style scoped>
.box__header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  padding: 24px 24px 8px 24px;
  cursor: default;
}
</style>
