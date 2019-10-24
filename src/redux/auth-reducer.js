import { usersAPI, authAPI } from '../api/social-network-API';

const SET_AUTH_DATA = 'SET_AUTH_DATA-POST';

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
  return dispatch => {
    usersAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthMeData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(authMe());
      }
    });
  };
};

export const logOut = () => {
  return dispatch => {
    authAPI.logOut().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthMeData(null, null, null, false));
      }
    });
  };
};
export default authReducer;
