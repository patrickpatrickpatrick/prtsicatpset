import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Items from './components/items'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Items} />
        </div>
      </ConnectedRouter>
    </Provider>
  </div>
  ,document.getElementById('root')
);

registerServiceWorker();
