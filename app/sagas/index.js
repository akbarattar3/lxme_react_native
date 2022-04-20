import {all} from 'redux-saga/effects';
import {getLoginWatcher} from '../components/home/saga';
// Redux saga: Root saga
export function* rootSaga() {
  yield all([
    //getProviderNameWatcher(),
    getLoginWatcher(),
  ]);
}
