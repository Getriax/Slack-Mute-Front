import {
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAILURE,
} from '../actions/types';

import { Action } from 'app/models/action';

export const authReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return { authorized: true, ...state };
    case AUTHORIZATION_FAILURE:
      return { authorized: false, ...state };
    default:
      return state;
  }
};
