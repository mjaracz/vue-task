<script setup lang="ts">
import { useStore } from 'vuex';
import { RootState } from '@/store/types';
import { computed, onUpdated, reactive } from 'vue';
import { useRoute } from 'vue-router';
import BusLineTemplate from '@/components/BusLine/Template/BusLineTemplate.vue';
import BusLineBody from '@/components/BusLine/Body/BusLineBody.vue';

const store = useStore<RootState>();
const route = useRoute();
const busLines = computed(() => store.getters.selectBusLines);
const stopsName = computed(() => store.getters.selectStopsNameByBus(stopsState.selectedLine));
const stopTime = computed(() => store.getters.selectStopTimes(stopsState.selectedLine, stopsState.selectedStop));
const stopsState = reactive({
  selectedStop: '',
  selectedLine: parseInt(route.params.nr.toString()),
});

onUpdated(() => {
  stopsState.selectedLine = parseInt(route.params.nr.toString());
});
const selectStopName = (selectedStopName: string) => {
  stopsState.selectedStop = selectedStopName;
};
</script>

<template>
  <BusLineTemplate :bus-lines="busLines" :selected-line="stopsState.selectedLine">
    <template #body>
      <BusLineBody @select-stop="selectStopName" :first-box-items="stopsName" :second-box-item="stopTime" />
    </template>
  </BusLineTemplate>
</template>

<style scoped></style>
