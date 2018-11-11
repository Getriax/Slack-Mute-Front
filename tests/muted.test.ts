import * as faker from 'faker';
import { mutedReducer } from '../src/app/reducers/muted';
import { MutedActions } from '../src/app/actions';
import { ChannelsState, Muted, ChannelFetch, Action } from 'app/models';

const channelFetch = (id: string): ChannelFetch => ({
  [id]: faker.lorem.words(2),
})

describe('Muted test suite', () => {
  it('Should start with init state', () => {
    const defaultState: ChannelsState = {
      channels: [
        {
          id: '123',
          name: 'General',
          muted: false,
        },
        {
          id: '124',
          name: 'Managment',
          muted: true,
        },
        {
          id: '125',
          name: 'Team',
          muted: true,
        },
      ],
      error: false,
    };

    const fakeAction: any = {};

    expect(mutedReducer(undefined, fakeAction)).toEqual(defaultState);
  });

  it('Should get muted channels', () => {
    const channels: ChannelFetch = {
      ...channelFetch('A'),
      ...channelFetch('B'),
    }

    const mutedChannels: Muted = {
      messge: 'ok',
      channels,
      muted: ['A'],
    };

    const expected: ChannelsState = {
      channels: [
        {
          id: 'A',
          name: channels['A'],
          muted: true,
        },
        {
          id: 'B',
          name: channels['B'],
          muted: false,
        }
      ],
      error: false,
    };

    const action: Action<Muted> = {
      type: MutedActions.Type.GET_MUTED_SUCCESS,
      payload: mutedChannels,
    };

    expect(mutedReducer(undefined, action)).toEqual(expected);
  });

  it('Should update muted channels', () => {
    const channels: ChannelFetch = {
      ...channelFetch('A'),
      ...channelFetch('B'),
    }

    const initialState: ChannelsState = {
      channels: [
        {
          id: 'A',
          name: channels['A'],
          muted: true,
        },
        {
          id: 'B',
          name: channels['B'],
          muted: false,
        }
      ],
      error: false,
    };

    const expected: ChannelsState = {
      channels: [
        {
          id: 'A',
          name: channels['A'],
          muted: true,
        },
        {
          id: 'B',
          name: channels['B'],
          muted: true,
        }
      ],
      error: false,
    };

    const action: Action<string[]> = {
      type: MutedActions.Type.SET_MUTED_SUCCESS,
      payload: ['A', 'B'],
    };

    expect(mutedReducer(initialState, action)).toEqual(expected);
  });
});
