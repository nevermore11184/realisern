import Immutable from 'seamless-immutable';
import types from './types';
import createReducer from './utils/createReducer';

// dynamic interfaces
type User = {
  name: string;
};

interface UserInterface {
  payload: User;
}

// static interfaces
interface ErrorPayload {
  payload: string;
}

interface Request {
  set: (property: string, value: boolean) => any;
}

interface Error {
  merge: (property: {isLoading: boolean; error: string}) => any;
}

// declarations
export const initialState = Immutable.from({
  isLoading: false,
  user: {},
  error: '',
});

const actionHandlers = {
  [types.SET_USER.request]: (state: Request) => state.set('isLoading', true),

  [types.SET_USER.success]: (
    state: {merge: (property: {user: User; isLoading: boolean}) => any},
    {payload}: UserInterface,
  ) =>
    state.merge({
      user: payload,
      isLoading: false,
    }),

  [types.SET_USER.failure]: (state: Error, {payload}: ErrorPayload) =>
    state.merge({
      isLoading: false,
      error: payload,
    }),
};

export default createReducer(initialState, actionHandlers);
