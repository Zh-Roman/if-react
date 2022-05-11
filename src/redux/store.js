import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
import { composeWithDevTools } from '@redux-devtools/extension';
import { logger } from 'redux-logger/src';
import initialState from './initialState';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware, logger),
);
const persistConfig = {
  key: 'root',
  storage: localStorage,
  blacklist: ['userQueryData', 'queryComponents'],
  whitelist: ['userAuthData'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers,
);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default store;
