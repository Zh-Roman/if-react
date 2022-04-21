import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { initialUserData, userAuthReducer } from '../ducks/userAuthorization/reducers';

export default createStore(
  userAuthReducer,
  initialUserData,
  devToolsEnhancer(),
);
