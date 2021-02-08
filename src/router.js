import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import HomePage from 'pages/home';
const MainApp = lazy(() => import('pages/main'));

const renderLoader = () => <></>;

export default function RouterApp() {
  return (
    <>
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Suspense fallback={renderLoader()}>
            <Switch>
             {/* home page route */}
             <Route path="/" exact component={HomePage} />

              {/* dynamic app route */}
              <Route path="/play" exact component={MainApp} />

              {/* Redirect to homepage when url is invalid */}
              <Route render={() => <Redirect to={{ pathname: '/' }} />} />
            </Switch>
          </Suspense>
        </QueryParamProvider>
      </Router>
    </>
  );
}
