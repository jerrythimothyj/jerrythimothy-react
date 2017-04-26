import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {getAboutMe, getEmployment, getAcademic, getProjects} from './reducer/profile/actions';
import {setPingMeMessage} from './reducer/contact/actions';
import _ from 'lodash';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({ //all axios can be used, shown in axios documentation
  responseType: 'json'
});

const store = createStore(reducer, compose(
  applyMiddleware(axiosMiddleware(client),thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(getAboutMe())
store.dispatch(getEmployment())
store.dispatch(getAcademic())
store.dispatch(getProjects())

require('./index.html');

// Create app
const container = document.querySelector('#app-container');

// if(window.device && device.platform === 'iOS') {
//   styles.base.paddingTop = '20px'
// }

// function startApp() {
  // Render app
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , container
  );

  // Hot module reloading
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>
        , container
      );
    });
  }
// }
// if (window.cordova) {
//   document.addEventListener('deviceready', startApp, false);
// } else {
//   startApp();
// }
