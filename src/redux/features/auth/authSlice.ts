import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  idToken: null,
  isAuthenticated: false,
  pendingOTPVerification: false
}
export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { email, localId, accessToken, refreshToken, idToken } = action.payload;
      state.user = { email, localId };
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.idToken = idToken;
      state.isAuthenticated = true;
      state.pendingOTPVerification = false;
    },
    setPendingOTP: (state, action) => {
      state.pendingOTPVerification = true;
      state.user = { email: action.payload.email };
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.idToken = null;
      state.isAuthenticated = false;
      state.pendingOTPVerification = false;
    },
    clearOTPPending: (state) => {
      state.pendingOTPVerification = false;
    }
  }
})
export const { setCredentials, setPendingOTP, logout, clearOTPPending } = authSlice.actions;
export default authSlice.reducer;
// selectors
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectPendingOTP = (state: RootState) => state.auth.pendingOTPVerification;
