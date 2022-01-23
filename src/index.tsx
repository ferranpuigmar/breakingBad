import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'infraestructure/i18n/config';
import 'assets/styles/global.scss';
import App from 'App';
import store from 'store/store';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';
import breakpoints from './config/breakpoints.config.js';
import { getBreakpoints } from 'utils/breakpoints';

setConfiguration({
  breakpoints: getBreakpoints(breakpoints)
});

ReactDOM.render(
  <Provider store={store}>
    <ScreenClassProvider>
      <App />
    </ScreenClassProvider>
  </Provider>,
  document.getElementById('root')
);
