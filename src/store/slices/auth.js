import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, refreshToken: null, account: null };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthTokens: function (state, action) {
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
    },
    setAccount: function (state, action) {
      state.account = action.payload;
    },
    logout: function (state) {
      state.account = null;
      state.refreshToken = null;
      state.token = null;
    },
  },
});

export default authSlice;
