import { authMe } from './auth-reducer';

const INITIAL_SUCCESS = '/app/INITIAL_SUCCESS';
const SET_ERROR = '/app/SET_ERROR';

const initialState = {
  initialized: false,
  globalError: null as any // need to check
}

export type InitialStateType = typeof initialState 

const appReducer = (state = initialState, action: any): InitialStateType => {
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


type InitialSuccessActionType = {
  type: typeof INITIAL_SUCCESS
}
const initialSuccess = (): InitialSuccessActionType => ({ type: INITIAL_SUCCESS })

type SetErrorActionType = {
  type: typeof SET_ERROR
  globalError: any // need to check!
}
const setError = (globalError: any): SetErrorActionType => ({ type: SET_ERROR, globalError });

export const initializing = () => {
  return (dispatch: any) => {
    const auth = dispatch(authMe());
    Promise.all([auth]).then(() => {
      dispatch(initialSuccess());
    });
  };
};

export const saveError = (error: any) => {
  return (dispatch: any) => {
    dispatch(setError(error));
    setTimeout(() => dispatch(setError(null)), 3000);
  };
};

export default appReducer;
