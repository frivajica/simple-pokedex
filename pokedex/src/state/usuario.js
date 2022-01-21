import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";

export const loginRequest = createAsyncThunk(
  "LOGIN",
  ({ email, password }) => {
    return {email: email, password: password,}
  }
);

export const logoutRequest = createAsyncThunk("LOGOUT", () => {
	return {}
});

const usuarioReducer = createReducer(
  {},
  {
    [loginRequest.fulfilled]: (state, action) => action.payload,
    [logoutRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default usuarioReducer;