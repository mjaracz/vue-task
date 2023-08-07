<script setup lang="ts">
import { defineProps } from 'vue';
import BusLinesBox from '@/components/BusLine/Template/BusLinesBox.vue';

interface PropsBusLineTemplate {
  busLines: number[];
  isLoading?: boolean;
  selectedLine?: number;
}

defineProps<PropsBusLineTemplate>();
</script>

<template>
  <div class="box--container">
    <div class="box__isLoading" v-if="isLoading">bus lines is loading</div>
    <BusLinesBox v-if="!isLoading" :box-items="busLines" :selected-line="selectedLine" />
  </div>
  <slot name="body"></slot>
</template>

<style scoped>
@import './container.scss';
</style>
