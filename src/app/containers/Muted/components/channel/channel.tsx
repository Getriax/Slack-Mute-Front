import * as React from 'react';
import * as style from './style.css';
import { Switch } from '../switch';

interface Props {
  id: string;
  name: string;
  muted: boolean;
  onChange: (id: string) => void;
}

export const channel: React.StatelessComponent<Props> = (props) => {

  return (
    <div
      className={style.channel}
    >
      <p className={style.hash}>#</p>
      <p className={style.chname}>{props.name}</p>
      <div className={style.chmuted}>
      <Switch
        muted={props.muted}
        onChange={props.onChange}
        id={props.id}
        />
      </div>
    </div>
  );
};
