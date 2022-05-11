import { initialUserData } from '../ducks/userAuthorization/reducers';
import { initialUserQuery } from '../ducks/userQuery/reducers';
import { initialQueryComponents } from '../ducks/queryUrlComponents/reducers';

const initialState = {
  userAuthData: initialUserData,
  userQueryData: initialUserQuery,
  queryComponents: initialQueryComponents,
};

export default initialState;
