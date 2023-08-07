<script setup lang="ts">
import { defineEmits } from 'vue';
import SearchIcon from '@/assets/SearchIcon.vue';

defineEmits(['on-search']);
</script>

<template>
  <div class="boxInput">
    <input
      type="text"
      class="boxInput__textField"
      placeholder="Search.."
      @input="$emit('on-search', $event.target.value)"
    />
    <SearchIcon />
  </div>
</template>

<style scoped>
.boxInput {
  width: 288px;
  height: 40px;
  padding: 12px 16px;
  background-color: var(--container-background-color);
  border: 1px solid var(--container-border-color);
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 12px 0;
  justify-self: flex-start;
}
.boxInput__textField {
  width: 100%;
  font-size: 12px;
  color: var(--text-disabled-color);
  font-family: 'Inter', sans-serif;
  background-color: var(--container-background-color);
  border: none;
  outline: none;
}
</style>
