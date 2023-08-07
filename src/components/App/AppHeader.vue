<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router';
import { reactive } from 'vue';

const headerState = reactive({
  busLineIsSelected: false,
  stopsIsSelected: false,
  lastPathElement: '',
});

const onClickBusLinesLink = () => {
  headerState.busLineIsSelected = !headerState.busLineIsSelected;
  headerState.stopsIsSelected = false;
};
const onClickStopsLink = () => {
  headerState.stopsIsSelected = !headerState.stopsIsSelected;
  headerState.busLineIsSelected = false;
};
const route = useRoute();
</script>

<template>
  <header class="header">
    <slot name="title"></slot>
    <nav class="nav">
      <RouterLink
        class="nav__item"
        :class="{
          'nav__item--isClicked': headerState.busLineIsSelected || route.path.includes('/bus-line'),
        }"
        :to="{ name: 'bus-line' }"
        @click="onClickBusLinesLink"
      >
        Bus Lines
      </RouterLink>
      <RouterLink
        class="nav__item"
        :class="{ 'nav__item--isClicked': headerState.stopsIsSelected || route.path.includes('/stops') }"
        :to="{ name: 'stops' }"
        @click="onClickStopsLink"
      >
        Stops
      </RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  flex-direction: column;
}

.nav {
  background: var(--container-background-color);
  width: 80vw;
  height: 90px;
  border-radius: 5px;
  padding: 0 24px;
}

.nav__item {
  text-decoration: none;
  height: 100%;
  width: 113px;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-disabled-color);
  font-weight: 500;
  transition: 20ms;
  box-sizing: content-box;

  &:hover {
    color: var(--text-main-color);
    border-bottom: 2px solid var(--primary-color);
  }
}

.nav__item--isClicked {
  color: var(--text-main-color);
  border-bottom: 2px solid var(--primary-color);
}
</style>
