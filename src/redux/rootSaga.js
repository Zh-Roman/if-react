import { all } from 'redux-saga/effects';
import userQuerySaga from '../ducks/userQuery/sagas';

export default function* rootSaga() {
  yield all([userQuerySaga()]);
}
