<script setup lang="ts">
import ButtonSmall from '../../ButtonSmall.vue';
import { defineProps } from 'vue';

interface PropsBusLinesBox {
  boxItems: number[];
  selectedLine?: number;
}
defineProps<PropsBusLinesBox>();
</script>

<template>
  <div class="busLines--container">
    <h1 class="busLines__title">Select Bus Line</h1>
    <ButtonSmall
      v-for="(busLine, index) in boxItems"
      :is-selected="busLine === selectedLine"
      :label="busLine.toString()"
      v-bind:key="index"
    />
  </div>
</template>

<style scoped>
.busLines--container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
  background-color: var(--container-background-color);
  gap: 14px;
  padding: 24px;
  border-radius: 5px;
}
.busLines__title {
  color: var(--text-darker-color);
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  width: 80vw;
}
</style>
