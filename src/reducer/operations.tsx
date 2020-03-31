import actions from './actions';
import {Dispatch} from 'redux';

const setUser = () => (dispatch: Dispatch) => {
  dispatch(actions.setUser.request());
  dispatch(actions.setUser.success());
  dispatch(actions.setUser.failure());
};

export default {
  setUser,
};
