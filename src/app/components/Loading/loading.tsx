import * as React from 'react';
import * as style from './style.css';

interface Porps {
  loading: boolean;
}

export const loading: React.StatelessComponent<Porps> = (props) => {
  if (props.loading) {
    return (
      <section className={style.container}>
        <div className={style.lds}><div></div><div></div></div>
      </section>
    );
  }

  return null;
};
