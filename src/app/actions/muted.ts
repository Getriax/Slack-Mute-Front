import { getSlackMuted, setSlackMuted } from '../api';
import { Muted } from 'app/models/muted';
import { History } from 'app/models/history';
import { LoadingActions } from './loading';

export namespace MutedActions {
  export enum Type {
    GET_MUTED_SUCCESS = 'GET_MUTED_SUCCESS',
    GET_MUTED_FAILURE = 'GET_MUTED_FAILURE',
    SET_MUTED_SUCCESS = 'SET_MUTED_SUCCESS',
    SET_MUTED_FAILURE = 'SET_MUTED_FAILURE',
  }

  const getMutedSuccess = (muted: Muted) => {
    console.log({ getMuted: muted });

    return {
      type: Type.GET_MUTED_SUCCESS,
      payload: muted,
    };
  };

  const getMutedFailure = {
    type: Type.GET_MUTED_FAILURE,
  };

  const setMutedSuccess = (channelIds: string[]) => ({
    type: Type.SET_MUTED_SUCCESS,
    payload: channelIds,
  });

  const setMutedFailure = {
    type: Type.SET_MUTED_FAILURE,
  };

  export const fetchMutedAction = () => async (dispatch: any) => {
    dispatch(LoadingActions.loadingStarted);
    try {
      const muted: Muted = await getSlackMuted();

      console.log({ muted });

      dispatch(getMutedSuccess(muted));
    } catch (error) {
      console.log({ error });
      dispatch(getMutedFailure);
    }
    dispatch(LoadingActions.loadingFinished);
  };

  export const setMutedAction = (channelIds: string[]) => async (dispatch: any) => {
    dispatch(LoadingActions.loadingStarted);
    try {
      const history: History = await setSlackMuted(channelIds);

      console.log({ history });

      dispatch(setMutedSuccess(channelIds));
    } catch (error) {
      console.log({ error });
      dispatch(setMutedFailure);
    }
    dispatch(LoadingActions.loadingFinished);
  };
}
