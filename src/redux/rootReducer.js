import { combineReducers } from 'redux';
import userAuthReducer from '../ducks/userAuthorization/reducers';
import userQueryReducer from '../ducks/userQuery/reducers';
import queryComponentsReducer from '../ducks/queryUrlComponents/reducers';

const rootReducer = combineReducers({
  userAuthData: userAuthReducer,
  userQueryData: userQueryReducer,
  queryComponents: queryComponentsReducer,
});

export default rootReducer;
