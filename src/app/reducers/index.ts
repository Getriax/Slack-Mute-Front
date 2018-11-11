import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { mutedReducer } from './muted';
import { ChannelsState } from 'app/models/muted';
import { HistoryState } from 'app/models/history';
import { historyReducer } from './history';
import { loadingReducer } from './loading';

export interface RootState {
  loading: false;
  mutedHistory: HistoryState;
  muted: ChannelsState;
  router: RouterState;
}

// export namespace RootState {
//   export type TodoState = TodoModel[];
// }

export { RouterState };
// export { RootState, RouterState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  loading: loadingReducer as any,
  mutedHistory: historyReducer as any,
  muted: mutedReducer as any,
  router: routerReducer as any,
});
