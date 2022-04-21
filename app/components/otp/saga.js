import {request} from '../../globals/services/service';
import {
  GET_CURRENCY,
  GET_CURRENCY_FAULTY,
} from '../../globals/services/apiEndPoints';
import {HTTP_METHODS} from '../../globals/services/apiConstants';
import {OtpActionType} from './actionType';
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
      action.payload.mobileNumber === '9620407863'
        ? GET_CURRENCY
        : GET_CURRENCY_FAULTY,
      HTTP_METHODS.GET,
      undefined,
      action.payload.mobileNumber,
      header,
      false,
    );
    console.log('Success ', response.data.data);
    yield action.payload.onSuccess(response.data.data);
    yield put({
      type: OtpActionType.LOGIN_SUCCESS,
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

export function* getOtpLoginwatcher() {
  yield takeLatest(OtpActionType.OTP_LOGIN, login);
}
