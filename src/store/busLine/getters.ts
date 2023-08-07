import { GetterTree } from 'vuex';
import { BusLineState } from '@/store/busLine/types';
import { RootState } from '@/store/types';

export const getters: GetterTree<BusLineState, RootState> = {
  selectBusLines(state): number[] {
    return state.stops
      .map((stopItem) => {
        return stopItem.line;
      })
      .filter((stop, index, arr) => {
        return arr.indexOf(stop) === index;
      });
  },
  selectAllStopsName(state): string[] {
    return state.stops
      .map((stop) => {
        return stop.stop;
      })
      .filter((stop, index, arr) => {
        return arr.indexOf(stop) === index;
      })
      .sort();
  },
  selectStopsNameByBus:
    (state) =>
    (busLine: number): string[] => {
      return state.stops
        .filter((stopItem) => stopItem.line === busLine)
        .sort((stop, stop1) => stop.order - stop1.order)
        .map((stopItem) => stopItem.stop)
        .filter((stopName, index, arr) => arr.indexOf(stopName) === index);
    },
  selectStopTimes: (state) => (selectedLine: number, selectedStop: string) => {
    return state.stops
      .filter((stopItem) => stopItem.line === selectedLine && stopItem.stop === selectedStop)
      .sort((stop, stop1) => {
        const preparedTime = stop.time.replace(':', '.');
        const preparedTime1 = stop1.time.replace(':', '.');
        return parseFloat(preparedTime) - parseFloat(preparedTime1);
      })
      .map((stopItem) => stopItem.time)
      .filter((stopTime, index, arr) => arr.indexOf(stopTime) === index);
  },
};
