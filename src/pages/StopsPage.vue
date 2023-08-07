<script setup lang="ts">
import StopsBody from '@/components/Stops/StopsBody.vue';
import { computed, onMounted, onUpdated, ref } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '@/store/types';

const store = useStore<RootState>();
const stopsName = computed(() => store.getters.selectAllStopsName);
const stopsNameRef = ref<string[]>([]);
const isLoading = computed(() => store.state.busLine.isLoading);

onMounted(() => {
  if (!stopsName.value.length) {
    store.dispatch('fetchStops');
  }
});
onUpdated(() => {
  stopsNameRef.value = stopsName.value;
});
</script>
<template>
  <StopsBody :is-loading="isLoading" :stops-name="stopsNameRef" />
</template>

<style scoped></style>
