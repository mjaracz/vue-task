<script lang="ts" setup>
import { RouterView } from 'vue-router';
import AppTemplate from '@/components/App/AppTemplate.vue';
</script>

<template>
  <AppTemplate title="Timetable"></AppTemplate>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

* {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f3f4f9 !important;
  overflow-x: hidden;
}

:root {
  --text-darker-color: #1a1a1a;
  --text-main-color: #33373c;
  --text-disabled-color: #9a9da4;
  --primary-color: #1952e1;
  --primary-darker-color: #2e3e6e;
  --container-background-color: #ffffff;
  --container-border-color: #e2e4ea;
  --container-hover-color: #f8f8fb;
}
</style>
