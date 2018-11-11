import * as faker from 'faker';
import { historyReducer } from '../src/app/reducers/history';
import { HistoryActions } from '../src/app/actions';
import { Action, HistoryState, HistoryPoint, History, HistoryDelete } from 'app/models';

const historyPoint = (): HistoryPoint => ({
  muted: [faker.lorem.words(2), faker.lorem.words(2)],
  ts: faker.random.number(),
})

describe('History test suite', () => {
  it('Should start with init state', () => {
    const defaultState: HistoryState = {
      history: [
        {
          muted: ['General', 'Test'],
          ts: 1541960213949,
        },
      ],
      error: false,
    };

    const fakeAction: any = {};

    expect(historyReducer(undefined, fakeAction)).toEqual(defaultState);
  });

  it('Should get hisotry', () => {
    const historyPonts: HistoryPoint[] = [
      historyPoint(),
      historyPoint(),
    ]

    const fatchedHistory: History = {
      message: 'ok',
      history: historyPonts,
    }

    const expected: HistoryState = {
      history: historyPonts,
      error: false,
    };

    const action: Action<History> = {
      type: HistoryActions.Type.GET_HISTORY_SUCCESS,
      payload: fatchedHistory,
    };

    expect(historyReducer(undefined, action)).toEqual(expected);
  });

  it('Should delete from hisotry', () => {
    const historyPonts: HistoryPoint[] = [
      historyPoint(),
      historyPoint(),
    ]

    const deleteHistory: HistoryDelete = {
      message: 'ok',
      removed: historyPonts[0],
      index: 0,
    }

    const initialState: HistoryState = {
      history: historyPonts,
      error: false,
    };

    const expected: HistoryState = {
      history: [historyPonts[1]],
      error: false,
    };

    const action: Action<HistoryDelete> = {
      type: HistoryActions.Type.DELETE_HISTORY_SUCCESS,
      payload: deleteHistory,
    };

    expect(historyReducer(initialState, action)).toEqual(expected);
  });
});
