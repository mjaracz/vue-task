import { MutationTree } from 'vuex';
import { BusLineState, Stop } from './types';

export const mutations: MutationTree<BusLineState> = {
  fetchStops(state) {
    state.isLoading = true;
  },
  loadStops(state, payload: Stop[]) {
    state.error = '';
    state.isLoading = false;
    state.stops = payload;
  },
  loadError(state, errorMsg: string) {
    state.error = errorMsg;
    state.stops = [];
  },
};
