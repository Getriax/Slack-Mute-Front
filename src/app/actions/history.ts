import { getMutedHistory, deleteHistoryIndex } from '../api';
import { LoadingActions } from './loading';
import { History, HistoryDelete } from 'app/models/history';

export namespace HistoryActions {
  export enum Type {
    GET_HISTORY_SUCCESS = 'GET_HISTORY_SUCCESS',
    GET_HISTORY_FAILURE = 'GET_HISTORY_FAILURE',
    DELETE_HISTORY_SUCCESS = 'DELETE_HISTORY_SUCCESS',
    DELETE_HISTORY_FAILURE = 'DELETE_HISTORY_FAILURE',
  }

  const getHistorySuccess = (history: History) => ({
    type: Type.GET_HISTORY_SUCCESS,
    payload: history,
  });

  const getHistoryFailure = {
    type: Type.GET_HISTORY_FAILURE,
  };

  const deleteHistorySuccess = (removed: HistoryDelete) => ({
    type: Type.DELETE_HISTORY_SUCCESS,
    payload: removed,
  });

  const deleteHistoryFailure = {
    type: Type.DELETE_HISTORY_FAILURE,
  };

  export const fetchHisotryAction = () => async (dispatch: any) => {
    dispatch(LoadingActions.loadingStarted);
    try {
      const history: History = await getMutedHistory();

      console.log({ history });

      dispatch(getHistorySuccess(history));
    } catch (error) {
      console.log({ error });
      dispatch(getHistoryFailure);
    }
    dispatch(LoadingActions.loadingFinished);
  };

  export const deleteHisotryAction = (index: number) => async (dispatch: any) => {
    dispatch(LoadingActions.loadingStarted);
    try {
      const historyDelete: HistoryDelete = await deleteHistoryIndex(index);

      console.log({ historyDelete });

      dispatch(deleteHistorySuccess(historyDelete));
    } catch (error) {
      console.log({ error });
      dispatch(deleteHistoryFailure);
    }
    dispatch(LoadingActions.loadingFinished);
  };
}
