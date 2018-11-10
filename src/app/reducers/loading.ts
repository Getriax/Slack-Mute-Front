import { LoadingActions } from '../actions';
import { Action } from 'app/models/action';

export const loadingReducer = (state = {}, action: Action<any>) => {
  switch (action.type) {
    case LoadingActions.Type.LOADING_STARTED:
      return true;
    case LoadingActions.Type.LOADING_FINISHED:
      return false;
    default:
      return state;
  }
};
