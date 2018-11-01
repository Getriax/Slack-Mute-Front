import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { routerReducer, RouterState } from 'react-router-redux';

export interface RootState {
  authorized: boolean;
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
  authorized: authReducer as any,
  router: routerReducer as any,
});
