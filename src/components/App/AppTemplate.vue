<script setup lang="ts">
import { defineProps } from 'vue';
import AppHeader from '@/components/App/AppHeader.vue';

interface TemplateProps {
  title: string;
}
defineProps<TemplateProps>();
</script>

<template>
  <AppHeader>
    <template #title>
      <div class="title--container">
        <h1 class="title">{{ title }}</h1>
      </div>
    </template>
  </AppHeader>
</template>

<style scoped>
.title--container {
  width: 80vw;
  margin: 4px 0;
}

.title {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}
</style>
