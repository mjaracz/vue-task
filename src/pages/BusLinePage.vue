<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '@/store/types';
import BusLineTemplate from '@/components/BusLine/Template/BusLineTemplate.vue';
import BusLineBody from '@/components/BusLine/Body/BusLineBody.vue';

const store = useStore<RootState>();
const busLines = computed<number[]>(() => store.getters.selectBusLines);
const busLineIsLoading = computed<boolean>(() => store.state.busLine.isLoading);

onMounted(() => {
  if (!busLines.value.length) store.dispatch('fetchStops');
});
</script>

<template>
  <BusLineTemplate :is-loading="busLineIsLoading" :bus-lines="busLines">
    <template #body>
      <BusLineBody :first-box-items="[]" :second-box-item="[]" />
    </template>
  </BusLineTemplate>
</template>

<style scoped></style>
