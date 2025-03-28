import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const initialState = {
  theme: "dark",
  language: "en",
  appBarDrawer: false,
  lessons: {},
};

export const localSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setAppBarDrawer: (state, { payload }) => {
      state.appBarDrawer = payload;
    },
    setDefaultValueLesson: (state, { payload }) => {
      state.lessons = { ...state.lessons, ...payload };
    },
  },
});

export const { setTheme, setLanguage, setAppBarDrawer, setDefaultValueLesson } =
  localSlice.actions;

export const selectTheme = (state) => state.local.theme;
export const selectLanguage = (state) => state.local.language;
export const selectAppBarDrawer = (state) => state.local.appBarDrawer;
export const selectDefaultLesson = (state) => state.local.lessons;

const persistConfiAuth = {
  key: "basicSettings",
  storage,
};

export const localLessonsJillReducer = persistReducer(
  persistConfiAuth,
  localSlice.reducer
);
