import { handleActions } from 'redux-actions';
import {
  getAdultsValue,
  getChildrenValue,
  getDateFromValue,
  getDateToValue,
  getRoomsValue,
  getSearchValue,
} from './actions';

export const initialQueryComponents = {
  searchValue: '',
  adultsValue: '',
  childrenValue: '',
  roomsValue: '',
  dateFromValue: '',
  dateToValue: '',
};

const handler = {
  [getSearchValue]: (state, action) => ({
    ...state,
    searchValue: action.payload,
  }),
  [getAdultsValue]: (state, action) => ({
    ...state,
    adultsValue: action.payload,
  }),
  [getChildrenValue]: (state, action) => ({
    ...state,
    childrenValue: action.payload,
  }),
  [getRoomsValue]: (state, action) => ({
    ...state,
    roomsValue: action.payload,
  }),
  [getDateFromValue]: (state, action) => ({
    ...state,
    dateFromValue: action.payload,
  }),
  [getDateToValue]: (state, action) => ({
    ...state,
    dateToValue: action.payload,
  }),
};
export default handleActions(handler, initialQueryComponents);
