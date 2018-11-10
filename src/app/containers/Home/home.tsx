import * as React from 'react';
import * as style from './style.css';
import { AuthActions } from '../../actions';

const url = 'https://slack.com/oauth/authorize';
const clientId = process.env.CLIENT_ID;
const scopes = [
  'read',
  'post',
];

export const home: React.StatelessComponent<{}> = () => {
  AuthActions.checkIfLoogedIn();

  return (
    <section className={style.container}>
      <h2>Slack Muted</h2>
      <a href={`${url}?scope=${scopes.join(',')}&client_id=${clientId}` }>
      <img alt="Sign in with Slack"
          src="https://platform.slack-edge.com/img/sign_in_with_slack@2x.png" />
      </a>
    </section>
  );
};
