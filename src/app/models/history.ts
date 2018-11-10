export interface HistoryPoint {
  muted: string[];
  ts: number;
}

export interface History {
  message: string;
  history: HistoryPoint[];
}

export interface HistoryDelete {
  message: string;
  removed: HistoryPoint;
  index: number;
}

export interface HistoryState {
  history: HistoryPoint[];
  error: boolean;
}
