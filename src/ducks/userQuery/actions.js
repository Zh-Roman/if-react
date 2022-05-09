import { createAction } from 'redux-actions';

export const GET_USER_QUERY_REQUESTED = 'GET_USER_QUERY_REQUESTED';
export const getUserQueryRequested = createAction(GET_USER_QUERY_REQUESTED);
export const getUserQuerySucceeded = createAction('GET_USER_QUERY_SUCCEEDED');
export const getUserQueryFailed = createAction('GET_USER_QUERY_FAILED');
