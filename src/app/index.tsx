import * as React from 'react';
import { Route, Switch } from 'react-router';
import { home as Home } from './containers/Home';
import { authorize as Authorize } from './containers/Authorize';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/authorize" component={Authorize} />
  </Switch>
));
