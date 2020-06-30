// TODO: update CRA and use
// import { combineReducers } from 'modules/redux-immer'

export const combineReducers = (produce: any, reducers = {} as any) => {
  const keys = Object.keys(reducers);
  const initialState = keys.reduce((a: any, k) => {
    a[k] = reducers[k](undefined, {});
    return a;
  }, {});

  return produce((draft: any, action: any) => {
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      draft[key] = reducers[key](draft[key], action);
    }
    return draft;
  }, initialState);
};
