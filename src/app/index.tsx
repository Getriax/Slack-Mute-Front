import * as React from 'react';
import { Switch, Route } from 'react-router';
import { home as Home } from './containers/Home';
import { authorize as Authorize } from './containers/Authorize';
import { muted as Muted } from './containers/Muted';
import { history as History } from './containers/History';
import { confirgureFontAwesome, PrivateRoute, PublicRoute } from './utils';
import {  } from './utils';
import { hot } from 'react-hot-loader';

confirgureFontAwesome();

export const App = hot(module)(() => (
  <Switch>
    <PublicRoute exact path="/" component={Home} />
    <Route path="/authorize" component={Authorize} />
    <PrivateRoute path="/muted" component={Muted} />
    <PrivateRoute path="/history" component={History} />
  </Switch>
));
