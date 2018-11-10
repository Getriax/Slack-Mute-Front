import * as React from 'react';
import { Link } from 'react-router-dom';
import * as style from './style.css';

export const navbar: React.StatelessComponent<{}> = () => {
  return (
    <section className={style.container}>
      <Link to="/muted" className={style.tab}>Muted</Link>
      <Link to="/history" className={style.tab}>Hisotry</Link>
      <Link to="/" className={style.tab}>Log out</Link>
    </section>
  );
};
