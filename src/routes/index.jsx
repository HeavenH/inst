import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FeedRoute from './FeedRoute';
import UsersRoute from './UsersRoute';
import ProfileRoute from './ProfileRoute';
import NewUserRoute from './NewUserRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <FeedRoute />
    </Route>

    <Route path="/newuser">
      <NewUserRoute />
    </Route>
  </Switch>
);

export default Routes;
