import {createSlice} from '@reduxjs/toolkit';

interface User {
  firstName: string;
  lastName: string;
}

interface InitialState {
  user: User;
  isLoading: boolean;
  error: string;
}

const initialState: InitialState = {
  user: {
    firstName: '',
    lastName: '',
  },
  isLoading: false,
  error: '',
};

const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserRequest: (state: InitialState) => {
      state.isLoading = true;
    },
    setUserSuccess: (
      state: InitialState,
      action: {payload: User; type: string},
    ) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    setUserFailure: (
      state: InitialState,
      action: {payload: string; type: string},
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default loginReducer;
