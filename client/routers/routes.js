import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PublicRoute from './PublicRoute';
import NotFound from '../components/error/NotFound';

const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));

const Router = () => (
  <Fragment>
    <Switch>

      <PublicRoute exact path="/" component={AsyncDashboard} />

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
