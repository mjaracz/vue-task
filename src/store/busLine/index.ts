import { Module } from 'vuex';
import { BusLineState } from '@/store/busLine/types';
import { actions } from '@/store/busLine/actions';
import { getters } from '@/store/busLine/getters';
import { mutations } from '@/store/busLine/mutations';
import { RootState } from '@/store/types';

export const state: BusLineState = {
  stops: [],
  error: '',
  isLoading: false,
};

export const busLine: Module<BusLineState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
