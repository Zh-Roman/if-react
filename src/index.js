import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store, { persistor } from './redux/store';
import { ThemeProviderContext } from './context/ThemeProviderContext';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProviderContext>
        <App />
      </ThemeProviderContext>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
