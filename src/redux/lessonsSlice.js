import { createSlice } from "@reduxjs/toolkit";
import {
  addLessonThunk,
  deleteLessonByIdThunk,
  getLessonsScheduleThunk,
  updateLessonByIdThunk,
} from "./lessonsOperations";

const lessonsState = {
  isLoading: false,
  error: null,
  lessonsArr: [],
  LessonsPostArr: [],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const lessonsSlice = createSlice({
  name: "schedule",
  initialState: lessonsState,
  reducers: {
    resetLessonsData: (state) => {
      state.lessonsArr = [];
      state.LessonsPostArr = [];
      state.lessonById = {};
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getLessonsScheduleThunk.pending, handlePending)
      .addCase(getLessonsScheduleThunk.rejected, handleRejected)
      .addCase(getLessonsScheduleThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lessonsArr = action.payload;
      })
      .addCase(addLessonThunk.pending, handlePending)
      .addCase(addLessonThunk.rejected, handleRejected)
      .addCase(addLessonThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.lessonsArr.push(action.payload);
      })
      .addCase(deleteLessonByIdThunk.pending, handlePending)
      .addCase(deleteLessonByIdThunk.rejected, handleRejected)
      .addCase(deleteLessonByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedArr = state.lessonsArr.filter(
          ({ _id }) => _id !== action.payload
        );
        state.lessonsArr = updatedArr;
      })

      .addCase(updateLessonByIdThunk.pending, handlePending)
      .addCase(updateLessonByIdThunk.rejected, handleRejected)
      .addCase(updateLessonByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.lessonsArr.findIndex(
          ({ _id }) => _id === action.payload._id
        );

        if (index !== -1) {
          state.lessonsArr.splice(index, 1, action.payload);
        }
      }),
});

export const { resetLessonsData } = lessonsSlice.actions;
export const lessonsReducer = lessonsSlice.reducer;

export const selectLessonsLoading = (state) => state.lessons.isLoading;
export const selectLessonsSchedulesArr = (state) => state.lessons.lessonsArr;
export const selectLessonsError = (state) => state.lessons.error;
