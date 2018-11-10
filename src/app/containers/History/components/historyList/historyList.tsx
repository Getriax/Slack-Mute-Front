import * as React from 'react';
import * as style from './style.css';
import { HistoryComponent } from '../history';
import { HistoryPoint } from 'app/models/history';

interface Props {
  history: HistoryPoint[];
  onDelete: (index: number) => void;
}

export const historyList: React.StatelessComponent<Props> = (props) => {

  return (
    <div
      className={style.container}
    >
      {props.history.map((history, index) => <HistoryComponent
        history={history} onDelete={props.onDelete} index={index} key={history.ts}
      />)}
    </div>
  );
};
