export interface Stop {
  line: number;
  stop: string;
  order: number;
  time: string;
}

export interface BusLineState {
  stops: Stop[];
  error: string;
  isLoading: boolean;
}
