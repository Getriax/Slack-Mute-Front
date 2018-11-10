import { MutedActions } from '../actions';
import { Action } from 'app/models/action';
import { Muted, ChannelsState } from 'app/models/muted';

const createEmptyChannels = (): ChannelsState => ({
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
});

export const mutedReducer = (state = createEmptyChannels() , action: Action<Muted | string[]>) => {
  switch (action.type) {
    case MutedActions.Type.GET_MUTED_SUCCESS:
      const { channels, muted } = action.payload as Muted;
      console.log({ channels, muted });
      const channelIds = Object.keys(channels);

      return {
        channels: channelIds.map(key => ({
          id: key,
          name: channels[key],
          muted: muted.includes(key),
        })),
        error: false,
      };
    case MutedActions.Type.SET_MUTED_SUCCESS:
      const ids = action.payload as string[];

      const { channels: updateChannels } = state;

      return {
        channels: updateChannels.map(channel => Object.assign(
          channel,
          { muted: ids.includes(channel.id) },
          )),
        error: false,
      };
    case MutedActions.Type.GET_MUTED_FAILURE:
      return { error: true, ...state };
    case MutedActions.Type.SET_MUTED_FAILURE:
      return { error: true, ...state };
    default:
      return state;
  }
};
