import {all} from 'redux-saga/effects';
import {getLoginWatcher} from '../components/home/saga';
import {getOtpLoginwatcher} from '../components/otp/saga';
// Redux saga: Root saga
export function* rootSaga() {
  yield all([getLoginWatcher(), getOtpLoginwatcher()]);
}
