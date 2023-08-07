import { ActionTree } from 'vuex';
import { BusLineState, Stop } from '@/store/busLine/types';
import { RootState } from '@/store/types';

export const actions: ActionTree<BusLineState, RootState> = {
  fetchStops({ commit }) {
    commit('fetchStops');
    fetch('http://localhost:3000/stops')
      .then((res) => res.json())
      .then((data: Stop[]) =>
        commit(
          'loadStops',
          data.sort((stop, stop1) => stop.line - stop1.line),
        ),
      )
      .catch((errMsg: string) => commit('loadError', errMsg));
  },
};
