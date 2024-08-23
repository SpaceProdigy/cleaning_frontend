import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { localLessonsJillReducer } from "./localOperation";

import { authReducer } from "./authSlice";
import { cleaningReducer } from "./cleaningSlice";

export const store = configureStore({
  reducer: {
    cleaning: cleaningReducer,
    local: localLessonsJillReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
