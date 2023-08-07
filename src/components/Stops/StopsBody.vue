<script setup lang="ts">
import { defineProps, ref } from 'vue';
import StopNameRow from '@/components/BusLine/Body/StopNameRow.vue';
import TextFieldSearch from '@/components/Stops/TextFieldSearch.vue';
import BothArrow from '@/assets/BothArrow.vue';

interface PropsStopsBody {
  stopsName: string[];
  isLoading: boolean;
}
const props = defineProps<PropsStopsBody>();
const filterStopsName = ref<string[]>(props.stopsName);

const onSearchHandler = (inputValue: string) => {
  if (inputValue !== '') {
    filterStopsName.value = props.stopsName.filter((stopName) => stopName.includes(inputValue));
  } else {
    filterStopsName.value = props.stopsName;
  }
};
</script>

<template>
  <div class="box--container">
    <div class="box__isLoading" v-if="isLoading">stops is loading</div>
    <div v-if="!isLoading" class="box__body">
      <TextFieldSearch @on-search="onSearchHandler" />
      <div class="body__title">
        Bus stops
        <BothArrow />
      </div>
      <StopNameRow
        v-for="(stopName, index) in filterStopsName.length ? filterStopsName : props.stopsName"
        v-bind:key="stopName + index"
        :row-content="stopName"
        :is-default-cursor="true"
      />
    </div>
  </div>
</template>

<style scoped>
@import '../BusLine/Template/container.scss';
.body__title {
  width: 80vw;
  height: 64px;
  padding: 20px 0 19px 22px;
  margin-left: -8px;
  color: var(--text-main-color);
  font-size: 12px;
  cursor: default;
  border-bottom: 1px solid #e2e4ea;
  font-weight: 600;
}
.box__body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80vw;
  max-height: 73vh;
  overflow: auto;
  overflow-x: hidden;
  background-color: var(--container-background-color);
  border-radius: 5px;
  padding: 10px;
}
</style>
