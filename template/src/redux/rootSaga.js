import { all } from 'redux-saga/effects';
import authenticateSaga from 'redux/Authenticate/saga';

export default function* rootSaga(getState){
    console.log('asdasd',getState);
    yield all([
        authenticateSaga()
    ]);
}
