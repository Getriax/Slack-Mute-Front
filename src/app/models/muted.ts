export interface ChannelFetch {
  [id: string]: string;
}

export interface Muted {
  messge: string;
  channels: ChannelFetch;
  muted: string[];
}

export interface Channel {
  id: string;
  name: string;
  muted: boolean;
}

export interface ChannelsState {
  channels: Channel[];
  error: boolean;
}
