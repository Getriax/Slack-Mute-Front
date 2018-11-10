import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { default as ReactSwitch } from 'react-switch';
import * as style from './style.css';

interface Props {
  id: string;
  muted: boolean;
  onChange: (id: string) => void;
}

export const mutedSwitch: React.StatelessComponent<Props> = (props) => {

  return (
    <ReactSwitch
      checked={props.muted}
      onChange={() => props.onChange(props.id)}
      width={70}
      height={40}
      handleDiameter={28}
      uncheckedIcon={
        <FontAwesomeIcon
          icon="music"
          size="xs"
          className={style.unchecked}
        />
      }
      checkedIcon={
        <FontAwesomeIcon
          icon="meh-blank"
          size="xs"
          className={style.checked}
        />
      }
    />
  );
};
