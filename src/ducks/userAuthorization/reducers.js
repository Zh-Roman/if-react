import { USER_AUTH } from './actions';

export const initialUserData = {
  userData: null,
};

export const userAuthReducer = (state = initialUserData, action) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        userData: action.payload,
      };
    default:
      return state;
  }
};
