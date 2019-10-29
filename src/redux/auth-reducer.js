import { usersAPI, authAPI } from '../api/social-network-API';
import { stopSubmit } from 'redux-form';

const SET_AUTH_DATA = '/auth/SET_AUTH_DATA-POST';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

const setAuthMeData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth
  }
});

export const authMe = () => {
  return async dispatch => {
    const data = await usersAPI.authMe();
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthMeData(id, email, login, true));
    }
  };
};

export const login = (email, password, rememberMe) => {
  return async dispatch => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(authMe());
    } else {
      const message =
        data.messages.length > 0 ? data.messages[0] : 'Unknown error';
      dispatch(stopSubmit('loginForm', { _error: message }));
    }
  };
};

export const logOut = () => {
  return async dispatch => {
    const data = await authAPI.logOut();
    if (data.resultCode === 0) {
      dispatch(setAuthMeData(null, null, null, false));
    }
  };
};
export default authReducer;
