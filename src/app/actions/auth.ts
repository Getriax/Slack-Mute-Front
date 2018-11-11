import { push } from 'react-router-redux';

import { LoadingActions } from './loading';
import { authorizeUser } from '../api';

export namespace AuthActions {
  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  export const authorizeUserAction = (code: string) => async (dispatch: any) => {
    dispatch(LoadingActions.loadingStarted);
    try {
      const { token } = await authorizeUser(code);
      console.log({ token });
      saveToken(token);
      dispatch(push('/muted'));
    } catch (error) {
      console.error(error);
    }
  };

  export const isAuthorized = () => (dispath: any): boolean => {
    return localStorage.getItem('token') ? true : false;
  }

  export const logoutUserAction = () => (dispatch: any) => {
    localStorage.removeItem('token');
    dispatch(push('/'));
  };
}
