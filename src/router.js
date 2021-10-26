import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import ContentLoader from 'react-content-loader';
const MainApp = lazy(() => import('pages/main'));

//Added a loader component
const renderLoader = () => (
  <div
    className="container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '6rem',
    }}
  >
    <ContentLoader viewBox="0 0 820 450" height={450} width={820}>
      <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
      <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="280" y="300" rx="5" ry="5" width="260" height="140" />
      <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />
    </ContentLoader>
  </div>
);

export default function RouterApp() {
  return (
    <>
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Suspense fallback={renderLoader()}>
            <Switch>
              {/* dynamic app route */}
              <Route path="/" exact component={MainApp} />

              {/* Redirect to homepage when url is invalid */}
              <Route render={() => <Redirect to={{ pathname: '/' }} />} />
            </Switch>
          </Suspense>
        </QueryParamProvider>
      </Router>
    </>
  );
}
