import * as React from 'react';
import * as style from './style.css';
import { DeleteButton } from '../deleteButton';
import { HistoryPoint } from 'app/models/history';

interface Props {
  index: number;
  history: HistoryPoint;
  onDelete: (index: number) => void;
}

export const hisotry: React.StatelessComponent<Props> = (props) => {
  const hisotryTime = new Date(props.history.ts);

  return (
    <div
      className={style.history}
    >
      <div className={style.time}>
        <p>{hisotryTime.toLocaleDateString()}</p>
        <p>{hisotryTime.getHours()}:{hisotryTime.getMinutes()}:{hisotryTime.getSeconds()}</p>
      </div>
      <div className={style.hisnames}>
      {props.history.muted.map((name, index) => (
        <p className={style.hisname} key={index}>{name}</p>
      ))}
      </div>
      <div className={style.button}>
        <DeleteButton index={props.index} onDelete={props.onDelete}/>
      </div>
    </div>
  );
};
