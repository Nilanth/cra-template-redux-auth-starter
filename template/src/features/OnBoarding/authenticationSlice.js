import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  loader: false,
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login(state) {
      state.loader = true;
    },
    loginSuccess(state, action) {
      state.loader = false;
      state.isAuthenticated = !!action.payload.token
    },
    loginFailure(state) {
      state.loader = false;
      state.isAuthenticated = false;
    },
  },
});

export const { login, loginSuccess, loginFailure } = authenticationSlice.actions;
export default authenticationSlice.reducer;
