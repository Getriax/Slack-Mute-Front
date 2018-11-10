import * as React from 'react';
import * as style from './style.css';
import { Channel } from 'app/models/muted';
import { channel as ChannelComponent } from '../channel';

interface Props {
  channels: Channel[];
  onChange: (id: string) => void;
}

export const channelsList: React.StatelessComponent<Props> = (props) => {

  return (
    <div
      className={style.container}
    >
      {props.channels.map(channel => <ChannelComponent
        id={channel.id}
        name={channel.name}
        muted={channel.muted}
        onChange={props.onChange}
        key={channel.id}
      />)}
    </div>
  );
};
