import * as React from 'react';
import './style.css';

interface Props {
  index: number;
  onDelete: (index: number) => void;
}

export const deleteButton: React.StatelessComponent<Props> = (props) => {

  return (
    <button onClick={() => props.onDelete(props.index)}>Delete</button>
  );
};
