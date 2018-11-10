import { AuthActions } from '../actions';
import { Action } from 'app/models/action';

export const authReducer = (state = {}, action: Action<object>) => {
  switch (action.type) {
    case AuthActions.Type.AUTHORIZATION_SUCCESS:
      return true;
    case AuthActions.Type.AUTHORIZATION_FAILURE:
      return false;
    case AuthActions.Type.LOG_OUT:
      return false;
    default:
      return state;
  }
};
