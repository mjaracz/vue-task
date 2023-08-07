<script setup lang="ts">
import { defineProps, defineEmits, reactive } from 'vue';
import { useRoute } from 'vue-router';
import StopNameRow from './StopNameRow.vue';
import BodyHeader from './BodyHeader.vue';
import BodyPlaceholder from './BodyPlaceholder.vue';

interface PropsBusLineBody {
  firstBoxItems: string[];
  secondBoxItem: string[];
}
const props = defineProps<PropsBusLineBody>();
const route = useRoute();
const emit = defineEmits(['select-stop']);
const selectedStop = reactive({
  index: 0,
  name: '',
});

const onClickStopName = (selectedRowIndex: number) => {
  selectedStop.index = selectedRowIndex;
  selectedStop.name = props.firstBoxItems[--selectedRowIndex];
  emit('select-stop', props.firstBoxItems[selectedRowIndex]);
};
</script>

<template>
  <div class="busLineBody">
    <div class="busLineBody__box" :class="{ 'busLineBody__box--noData': !firstBoxItems?.length }">
      <BodyHeader :label="`Bus line: ${route.params.nr}`" v-if="firstBoxItems?.length" />
      <StopNameRow v-if="firstBoxItems?.length" :is-title="true" row-content="Bus Stops" />
      <StopNameRow
        v-for="(stopName, index) in firstBoxItems"
        v-bind:key="stopName + index"
        :row-content="stopName"
        :row-index="++index"
        :is-selected="selectedStop.index === index"
        @on-click-row="onClickStopName"
      />
      <BodyPlaceholder v-if="!firstBoxItems?.length" label="Please select the bus line first" />
    </div>
    <div class="busLineBody__box" :class="{ 'busLineBody__box--noData': !secondBoxItem?.length }">
      <BodyHeader v-if="secondBoxItem?.length" :label="`Bus stop: ${selectedStop.name}`" />
      <StopNameRow v-if="secondBoxItem?.length" :is-title="true" row-content="Time" />
      <StopNameRow
        v-for="(stopTime, index) in secondBoxItem"
        v-bind:key="stopTime + index"
        :row-content="stopTime"
        :row-index="++index"
        :is-default-cursor="true"
      />
      <BodyPlaceholder
        v-if="!secondBoxItem?.length"
        :label="
          !secondBoxItem.length && !firstBoxItems.length
            ? 'Please select the bus line first'
            : 'Please select the stop first'
        "
      />
    </div>
  </div>
</template>

<style scoped>
.busLineBody {
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.busLineBody__box {
  width: 39.5vw;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%239A9DA4FF' stroke-width='2' stroke-dasharray='24' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 4px;
  background-color: var(--container-background-color);
  margin: 24px 0.5vw;
  box-sizing: border-box;
  overflow: auto;
}
.busLineBody__box--noData {
  justify-content: center;
}

@media (max-width: 808px) {
  .busLineBody__box {
    width: 80vw;
  }
}
</style>
