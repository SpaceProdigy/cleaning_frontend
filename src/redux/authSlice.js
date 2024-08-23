import { createSlice } from "@reduxjs/toolkit";
import {} from "./cleaningOperations";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {
  currentUserThunk,
  userUpdateThunk,
  fetchAdminsThunk,
  updatePermissionsThunk,
} from "./authOparations";

const authState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
  authentificated: false,
  permissions: {
    superAdmin: false,
  },
  admins: [[]],
};

const resetAuthState = (state) => {
  state.isLoading = false;
  state.error = null;
  state.userData = null;
  state.token = null;
  state.authentificated = false;
  state.permissions = {
    jill: false,
    superAdmin: false,
  };
  state.admins = [];
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  extraReducers: (builder) =>
    builder
      // ----- CURRENT USER -----
      .addCase(currentUserThunk.pending, handlePending)
      .addCase(currentUserThunk.rejected, handleRejected)
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.authentificated = true;
          state.userData = action.payload.user;
          state.token = action.payload.accessToken;
          state.permissions = {
            ...state.permissions,
            ...action.payload.permissions,
          };
          state.admins = action.payload.admins;
        } else {
          resetAuthState(state);
        }
      })

      //----- UPDATE USER -----
      .addCase(userUpdateThunk.pending, handlePending)
      .addCase(userUpdateThunk.rejected, handleRejected)
      .addCase(userUpdateThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userData = { ...state.userData, ...action.payload };
      })
      //----- FETCH ADMINS -----
      .addCase(fetchAdminsThunk.pending, handlePending)
      .addCase(fetchAdminsThunk.rejected, handleRejected)
      .addCase(fetchAdminsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.admins = action.payload;
      })

      //----- UPDATE ADMINS -----
      .addCase(updatePermissionsThunk.pending, handlePending)
      .addCase(updatePermissionsThunk.rejected, handleRejected)
      .addCase(updatePermissionsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.admins = [{ ...state.admins[0], ...action.payload }];
      }),
});

const persistConfiAuth = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const authReducer = persistReducer(persistConfiAuth, authSlice.reducer);

export const selectAuthentificated = (state) => state.auth.authentificated;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthUser = (state) => state.auth.userData;
export const selectAuthPermissions = (state) => state.auth.permissions;
export const selectAuthAdmins = (state) => state.auth.admins;
