import { authMe } from './auth-reducer';

const INITIAL_SUCCESS = '/app/INITIAL_SUCCESS';

const initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};

const initialSuccess = () => ({ type: INITIAL_SUCCESS });

export const initializing = () => {
  return dispatch => {
    const auth = dispatch(authMe());
    Promise.all([auth]).then(() => {
      dispatch(initialSuccess());
    });
  };
};

export default appReducer;
