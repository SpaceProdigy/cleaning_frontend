import { createSlice } from "@reduxjs/toolkit";
import {} from "./cleaningOperations";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {
  currentUserThunk,
  userUpdateThunk,
  fetchAdminsThunk,
  updatePermissionsThunk,
  userUpdateRoomThunk,
  addAdminThunk,
  registerThunk,
  deleteAccountThunk,
} from "./authOparations";

const authState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
  authentificated: false,
  permissions: ["viewer"],
  admins: [],
};

const resetAuthState = (state) => {
  state.isLoading = false;
  state.error = null;
  state.userData = null;
  state.token = null;
  state.authentificated = false;
  state.permissions = ["viewer"];
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
  reducers: {
    editVerifyEmail: (state) => {
      state.userData = { ...state.userData, emailVerified: true };
    },
  },
  extraReducers: (builder) =>
    builder
      // ----- REGISTER USER -----
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.rejected, handleRejected)
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.userData = { ...state.userData, ...action.payload };
        }
      })

      // ----- CURRENT USER -----
      .addCase(currentUserThunk.pending, handlePending)
      .addCase(currentUserThunk.rejected, handleRejected)
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.authentificated = true;
          state.userData = action.payload.user;
          state.token = action.payload.accessToken;
          state.permissions = action.payload.permissions;
        } else {
          resetAuthState(state);
        }
      })

      //----- UPDATE ROOM-----
      .addCase(userUpdateRoomThunk.pending, handlePending)
      .addCase(userUpdateRoomThunk.rejected, handleRejected)
      .addCase(userUpdateRoomThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userData = {
          ...state.userData,
          ...{ roomNumber: action.payload?.roomNumber ?? null },
        };
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

      //----- ADD ADMINS -----
      .addCase(addAdminThunk.pending, handlePending)
      .addCase(addAdminThunk.rejected, handleRejected)
      .addCase(addAdminThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.admins.findIndex(
          ({ _id }) => _id === action.payload._id
        );
        if (index !== -1) {
          state.admins.splice(index, 1, action.payload);
        } else {
          state.admins = [...state.admins, action.payload];
        }
      })

      //----- UPDATE ADMINS -----
      .addCase(updatePermissionsThunk.pending, handlePending)
      .addCase(updatePermissionsThunk.rejected, handleRejected)
      .addCase(updatePermissionsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const updatedArr = state.admins.filter(
          ({ userId }) => userId !== action.payload
        );
        state.admins = updatedArr;
      })

      //----- DELETE ACCOUNT -----
      .addCase(deleteAccountThunk.pending, handlePending)
      .addCase(deleteAccountThunk.rejected, handleRejected)
      .addCase(deleteAccountThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload) {
          resetAuthState(state);
        }
      }),
});

const persistConfiAuth = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
export const { editVerifyEmail } = authSlice.actions;

export const authReducer = persistReducer(persistConfiAuth, authSlice.reducer);

export const selectAuthentificated = (state) => state.auth.authentificated;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthUser = (state) => state.auth.userData;
export const selectAuthPermissions = (state) => state.auth.permissions;
export const selectAuthAdmins = (state) => state.auth.admins;
