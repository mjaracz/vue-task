import { createStore } from 'vuex';
import { RootState } from '@/store/types';
import { busLine } from '@/store/busLine';

export default createStore<RootState>({
  modules: {
    busLine,
  },
});
