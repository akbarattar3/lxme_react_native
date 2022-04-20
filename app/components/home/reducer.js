import {LoginActionType} from './actionType';

const initialState = {
  languageData: [],
};

// to save something in database or persistance
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginActionType.LOGIN_SUCCESS:
      return {
        ...state,
        languageData: action.payload.data,
      };
    default: {
      return state;
    }
  }
};
export default LoginReducer;
