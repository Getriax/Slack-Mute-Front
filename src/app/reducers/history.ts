import { HistoryActions } from '../actions';
import { Action } from 'app/models/action';
import { HistoryDelete, History, HistoryState } from 'app/models/history';

const createHistoryState = (): HistoryState => ({
  history: [
    {
      muted: ['General', 'Test'],
      ts: 1541960213949,
    },
  ],
  error: false,
});

export const historyReducer = (
  state = createHistoryState() , action: Action<History | HistoryDelete>,
) => {
  switch (action.type) {
    case HistoryActions.Type.GET_HISTORY_SUCCESS:
      const { history } = action.payload as History;

      return { history, error: false };
    case HistoryActions.Type.DELETE_HISTORY_SUCCESS:
      const { index } = action.payload as HistoryDelete;

      return {
        history: state.history.filter((value, idx) => idx !== index),
        error: false,
      };
    case HistoryActions.Type.GET_HISTORY_FAILURE:
      return { error: true, ...state };
    case HistoryActions.Type.DELETE_HISTORY_FAILURE:
      return { error: true, ...state };
    default:
      return state;
  }
};
