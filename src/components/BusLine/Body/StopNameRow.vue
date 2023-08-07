<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import BothArrow from '@/assets/BothArrow.vue';
interface PropsStopNameRow {
  rowContent: string;
  rowIndex?: number;
  isTitle?: boolean;
  isSelected?: boolean;
  isDefaultCursor?: boolean;
}
defineProps<PropsStopNameRow>();
defineEmits(['on-click-row']);
</script>

<template>
  <div v-if="isTitle" class="row--title">{{ rowContent }} <BothArrow /></div>
  <div
    v-if="!isTitle"
    class="row"
    :class="{ 'row--selected': isSelected, 'row--defaultCursor': isDefaultCursor }"
    @click="$emit('on-click-row', rowIndex)"
  >
    {{ rowContent }}
  </div>
</template>

<style scoped>
.row {
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0 19px 24px;
  color: var(--text-main-color);
  font-size: 12px;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 1px solid #f3f4f9;
}
.row:hover {
  background-color: var(--container-hover-color);
}
.row--selected {
  background-color: var(--container-hover-color);
}
.row--defaultCursor {
  cursor: default;
}
.row--title {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0 19px 24px;
  color: var(--text-main-color);
  font-size: 12px;
  cursor: default;
  font-weight: 600;
  box-sizing: border-box;
  border-bottom: 1px solid #e2e4ea;
}
</style>
