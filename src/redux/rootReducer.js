import { combineReducers } from 'redux';
import userAuthReducer from '../ducks/userAuthorization/reducers';

const rootReducer = combineReducers({
  userAuthData: userAuthReducer,
});

export default rootReducer;
