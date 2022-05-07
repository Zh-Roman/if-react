import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
import initialState from './initialState';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: localStorage,
  blacklist: [],
  whitelist: ['userAuthData'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  initialState,
  devToolsEnhancer(),
);
export const persistor = persistStore(store);
export default store;
