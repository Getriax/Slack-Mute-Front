import * as React from 'react';
import { Route, Switch } from 'react-router';
import { home as Home } from './containers/Home';
import { authorize as Authorize } from './containers/Authorize';
import { muted as Muted } from './containers/Muted';
import { history as History } from './containers/History';
import { confirgureFontAwesome } from './utils';
import { hot } from 'react-hot-loader';

confirgureFontAwesome();

export const App = hot(module)(() => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/authorize" component={Authorize} />
    <Route path="/muted" component={Muted} />
    <Route path="/history" component={History} />
  </Switch>
));
