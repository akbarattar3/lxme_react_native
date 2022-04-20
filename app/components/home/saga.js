import {request} from '../../globals/services/service';
import {GET_CURRENCY} from '../../globals/services/apiEndPoints';
import {HTTP_METHODS} from '../../globals/services/apiConstants';
import {LoginActionType} from './actionType';
import {takeLatest, put} from 'redux-saga/effects';

function* login(action) {
  const header = {
    language: 'en',
    platform: 2,
    currencysymbol: '$',
    currencycode: 'USD',
  };
  try {
    const {response} = yield request(
      GET_CURRENCY,
      HTTP_METHODS.GET,
      undefined,
      undefined,
      undefined,
      false,
    );
    console.log('Success ', response.data.data);
    yield action.payload.onSuccess(response.data.data);
    yield put({
      type: LoginActionType.LOGIN_SUCCESS,
      payload: {
        data: response.data.data,
      },
    });
  } catch (error) {
    console.log('error ');
    if (error.response) {
    }
  }
}

export function* getLoginWatcher() {
  yield takeLatest(LoginActionType.LOGIN, login);
}
