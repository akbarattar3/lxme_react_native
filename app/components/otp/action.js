import {OtpActionType} from './actionType';
export const callLogin = ({mobileNumber, onSuccess}) => ({
  type: OtpActionType.OTP_LOGIN,
  payload: {
    mobileNumber: mobileNumber,
    onSuccess: onSuccess,
  },
});
