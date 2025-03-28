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
import { lessonsReducer } from "./lessonsSlice";
import { postsReducer } from "./upLoadSlice";
import { booksReducer } from "./booksSlice";

export const store = configureStore({
  reducer: {
    cleaning: cleaningReducer,
    local: localLessonsJillReducer,
    auth: authReducer,
    lessons: lessonsReducer,
    posts: postsReducer,
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
