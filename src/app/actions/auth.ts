import { push } from 'react-router-redux';

import {
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAILURE,
} from './types';

import { authorizeUser } from '../api';

const authorizeUserActionCompletedSuccess = {
  type: AUTHORIZATION_SUCCESS,
};

const authorizeUserActionCompletedFailure = {
  type: AUTHORIZATION_FAILURE,
};

const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const authorizeUserAction = (code: string) => async (dispatch: any) => {
  try {
    const { token } = await authorizeUser(code);
    console.log({ token });
    saveToken(token);
    dispatch(authorizeUserActionCompletedSuccess);
    dispatch(push('/'));
  } catch (error) {
    dispatch(authorizeUserActionCompletedFailure);
  }
};
