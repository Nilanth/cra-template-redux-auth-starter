import {all, call, put, takeLatest} from 'redux-saga/effects'
import actions from 'redux/Authenticate/actions';
import {postRequest} from 'Config/axiosClient'


function* login(action) {
  try {
    const response = yield call(() => postRequest('login', action.payload));
    yield put({type: actions.LOGIN_SUCCESS, response});
  } catch (e) {
    yield put({type: actions.LOGIN_FAILURE});
  }
}


export default function* rootSaga() {
  yield all([takeLatest(actions.LOGIN, login)]);
}
