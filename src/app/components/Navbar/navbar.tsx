import * as React from 'react';
import { Link } from 'react-router-dom';
import * as style from './style.css';

interface Props {
  logout: () => void;
  selected: string;
}

const tabClass = (selected: string, name: string): string => {
  if (selected === name) {
    return `${style.tab} ${style.selected}`;
  }

  return style.tab;
}

export const navbar: React.StatelessComponent<Props> = (props) => {
  return (
    <section className={style.container}>
      <p className={style.logo}>SlackMuted</p>
      <Link to="/muted" className={tabClass(props.selected, 'muted')}>Muted</Link>
      <Link to="/history" className={tabClass(props.selected, 'history')}>Hisotry</Link>
      <a className={style.logout} onClick={props.logout}>Log out</a>
    </section>
  );
};
