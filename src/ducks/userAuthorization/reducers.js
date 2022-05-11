import { handleActions } from 'redux-actions';
import actionUserAuth from './actions';

export const initialUserData = {
  userData: null,
};

const handlers = {
  [actionUserAuth]: (state, action) => ({
    ...state,
    userData: action.payload,
  }),
};
export default handleActions(handlers, initialUserData);
