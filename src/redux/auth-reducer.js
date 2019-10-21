import { usersAPI } from '../api/social-network-API';

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
        ...action.data,
        isAuth: true
      };

    default:
      return state;
  }
};

export const setAuthMeData = (userId, email, login) => ({
  type: SET_AUTH_DATA,
  data: {
    userId,
    email,
    login
  }
});

export const authMe = () => {
  return dispatch => {
    usersAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthMeData(id, email, login));
      }
    });
  };
};

export default authReducer;
