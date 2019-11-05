import { authMe } from './auth-reducer';

const INITIAL_SUCCESS = '/app/INITIAL_SUCCESS';
const SET_ERROR = '/app/SET_ERROR';

const initialState = {
  initialized: false,
  globalError: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    case SET_ERROR:
      return {
        ...state,
        globalError: action.globalError
      };

    default:
      return state;
  }
};

const initialSuccess = () => ({ type: INITIAL_SUCCESS });

const setError = globalError => ({ type: SET_ERROR, globalError });

export const initializing = () => {
  return dispatch => {
    const auth = dispatch(authMe());
    Promise.all([auth]).then(() => {
      dispatch(initialSuccess());
    });
  };
};

export const saveError = error => {
  return dispatch => {
    dispatch(setError(error));
    setTimeout(() => dispatch(setError(null)), 3000);
  };
};

export default appReducer;
