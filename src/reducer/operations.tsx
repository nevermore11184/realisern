import loginReducer from './loginReducer';
import {Dispatch} from 'redux';

const setUser = () => (dispatch: Dispatch) => {
  dispatch(loginReducer.actions.setUserRequest());
  dispatch(
    loginReducer.actions.setUserSuccess({
      firstName: 'vincent',
      lastName: 'marnisi',
    }),
  );
  dispatch(loginReducer.actions.setUserFailure('error'));
};

export default {
  setUser,
};
