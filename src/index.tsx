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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharactersList from 'modules/home/components/CharacterList/CharactersList';
import NotFound from 'modules/shared/components/NotFound/NotFound';
import CharacterDetail from 'modules/detail/components/CharacterDetail/CharacterDetail';

setConfiguration({
  breakpoints: getBreakpoints(breakpoints)
});

ReactDOM.render(
  <Provider store={store}>
    <ScreenClassProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<CharactersList />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ScreenClassProvider>
  </Provider>,
  document.getElementById('root')
);
