import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store/configureStore';
import App from './containers/app/AppContainer';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <Suspense fallback={<div>Error! Please refresh the page</div>}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </Suspense>,
  mountNode
);
