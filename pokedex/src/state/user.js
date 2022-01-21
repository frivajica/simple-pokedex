import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const loginRequest = createAsyncThunk("LOGIN", (data) => {
    return data;
});

export const logoutRequest = createAsyncThunk("LOGOUT", () => {
	return {};
});

const userReducer = createReducer({}, {
    [loginRequest.fulfilled]: (state, action) => action.payload,
    [logoutRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default userReducer;