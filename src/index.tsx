import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'infraestructure/i18n/i18n';
import 'assets/styles/global.scss';
import App from 'App';
import store from 'store/store';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';
import breakpoints from './config/breakpoints.config.js';
import { getBreakpoints } from 'utils/breakpoints';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharactersList from 'modules/home/components/CharacterList/CharactersList';
import NotFound from 'modules/shared/components/NotFound/NotFound';
import CharacterDetail from 'modules/detail/components/CharacterDetail/CharacterDetail';
import { I18nextProvider } from 'react-i18next';

setConfiguration({
  breakpoints: getBreakpoints(breakpoints)
});

const base = '/:lng';

ReactDOM.render(
  <Provider store={store}>
    <ScreenClassProvider>
      <BrowserRouter>
        <Routes>
          <Route path={base} element={<App />}>
            <Route path={base} element={<CharactersList />} />
            <Route path={`${base}/character/:id`} element={<CharacterDetail />} />
            <Route path="*" element={<NotFound message="route_not_found" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ScreenClassProvider>
  </Provider>,
  document.getElementById('root')
);
