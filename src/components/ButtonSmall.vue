<script setup lang="ts">
import { defineProps } from 'vue';
interface PropsButtonSmall {
  label: string;
  isSelected?: boolean;
}
defineProps<PropsButtonSmall>();
</script>

<template>
  <RouterLink class="button--linkContainer" :to="{ name: 'bus-line-number', params: { nr: label } }">
    <button class="button__item" :class="{ 'button__item--isSelected': isSelected }">{{ label }}</button>
  </RouterLink>
</template>

<style scoped>
.button--linkContainer {
  text-decoration: none;
}

.button__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 32px;
  border-radius: 4px;
  padding: 8px 16px;
  border: none;
  outline: none;
  background-color: var(--primary-color);
  color: var(--container-background-color);
}
.button__item--isSelected {
  background-color: var(--primary-darker-color);
}
</style>
