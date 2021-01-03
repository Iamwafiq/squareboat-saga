import { call, put, takeLatest } from 'redux-saga/effects';
import { getDataSuccess, getDataFailed } from './actions';
import { GET_DATA } from './constants';
import { getDataApi } from '../../utils/api';

function* getData(dObj) {
  try {
    const res = yield call(getDataApi, {}); //Api call by calling a function(blocking-function)
    if (res.userId) {
      yield put(getDataSuccess({ response: res }));
    } else {
      yield put(getDataFailed({ message: 'failed' }));
    }
  } catch (e) {
    yield put(getDataFailed({ message: 'failed' }));
  }
}

function* homeSaga() {
  yield takeLatest(GET_DATA, getData);
}

export default homeSaga;
