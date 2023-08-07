import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BusLinePage from '@/pages/BusLinePage.vue';
import BusLineSelectedPage from '@/pages/BusLineSelectedPage.vue';
import StopsPage from '@/pages/StopsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/bus-line',
  },
  {
    path: '/bus-line',
    name: 'bus-line',
    component: BusLinePage,
  },
  {
    path: '/bus-line/:nr',
    name: 'bus-line-number',
    component: BusLineSelectedPage,
  },
  {
    path: '/stops',
    name: 'stops',
    component: StopsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
