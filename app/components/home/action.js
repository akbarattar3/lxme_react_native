import {LoginActionType} from './actionType';
export const callLogin = ({onSuccess}) => ({
  type: LoginActionType.LOGIN,
  payload: {
    onSuccess: onSuccess,
  },
});
