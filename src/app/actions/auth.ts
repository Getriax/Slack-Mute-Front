import { push } from 'react-router-redux';

import { LoadingActions } from './loading';
import { authorizeUser } from '../api';

export namespace AuthActions {
  export enum Type {
    AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS',
    AUTHORIZATION_FAILURE = 'AUTHORIZATION_FAILURE',
    LOG_OUT = 'LOG_OUT',
  }

  const authorizeUserActionCompletedSuccess = {
    type: Type.AUTHORIZATION_SUCCESS,
  };

  const authorizeUserActionCompletedFailure = {
    type: Type.AUTHORIZATION_FAILURE,
  };

  const logoutAction = {
    type: Type.LOG_OUT,
  };

  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  export const authorizeUserAction = (code: string) => async (dispatch: any) => {
    dispatch(LoadingActions.loadingStarted);
    try {
      const { token } = await authorizeUser(code);
      console.log({ token });
      saveToken(token);
      dispatch(authorizeUserActionCompletedSuccess);
      dispatch(push('/muted'));
    } catch (error) {
      dispatch(authorizeUserActionCompletedFailure);
    }
    dispatch(LoadingActions.loadingFinished);
  };

  export const checkIfLoogedIn = () => (dispath: any) => localStorage.getItem('token')
    ? dispath(authorizeUserActionCompletedSuccess)
    : dispath(authorizeUserActionCompletedFailure);

  export const logoutUserAction = () => (dispatch: any) => dispatch(logoutAction);
}
