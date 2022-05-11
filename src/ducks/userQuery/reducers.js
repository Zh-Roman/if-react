import { handleActions } from 'redux-actions';
import { getUserQueryFailed, getUserQueryRequested, getUserQuerySucceeded } from './actions';

export const initialUserQuery = {
  queryURL: null,
  queryData: null,
  loading: false,
  error: null,
};

const handlers = {
  [getUserQueryRequested]: (state, action) => ({
    ...state,
    loading: true,
    queryURL: action.payload,
  }),
  [getUserQuerySucceeded]: (state, action) => ({
    ...state,
    loading: false,
    queryData: action.payload,
  }),
  [getUserQueryFailed]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
};

export default handleActions(handlers, initialUserQuery);
