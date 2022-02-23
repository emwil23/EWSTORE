import './sass/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

//Component
import App from './Components/App';
import { store, persistor } from './storeConfig';



ReactDom.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);
