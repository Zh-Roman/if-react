import {
  takeLatest, put, delay, call, select,
} from 'redux-saga/effects';
import { GET_USER_QUERY_REQUESTED, getUserQueryFailed, getUserQuerySucceeded } from './actions';
import {
  adultsValueSelector,
  childrenValueSelector, dateFromValueSelector, dateToValueSelector,
  roomsValueSelector,
  searchValueSelector,
} from '../queryUrlComponents/selectors';
import ApiClient from '../../api/apiClient';

export function* getUserQuerySaga() {
  try {
    const searchValueUrl = yield select(searchValueSelector);
    const adultsValueUrl = yield select(adultsValueSelector);
    const childrenValueUrl = yield select(childrenValueSelector);
    const roomsValueUrl = yield select(roomsValueSelector);
    const dateFromValueUrl = yield select(dateFromValueSelector);
    const dateToValueUrl = yield select(dateToValueSelector);
    const params = `search=${searchValueUrl}&dateFrom=${dateFromValueUrl}&dateTo=${dateToValueUrl}&adults=${adultsValueUrl}&children=${childrenValueUrl}&rooms=${roomsValueUrl}`;
    yield delay(3000); /* <-------     I just want you to see the loadingProcess process */
    let response = yield call(ApiClient.userRequestApi.getUserRequest, [params]);
    if (response.length === 0 || response.length === undefined || response.status >= 400) {
      yield put(getUserQuerySucceeded(null));
      yield put(getUserQueryFailed('404 page not found'));
      response = null;
    }
    yield put(getUserQuerySucceeded(response));
  } catch (e) {
    yield put(getUserQueryFailed(e.message));
  }
}

export default function* userQuerySaga() {
  yield takeLatest(GET_USER_QUERY_REQUESTED, getUserQuerySaga);
}
