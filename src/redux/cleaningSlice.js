import { createSlice } from "@reduxjs/toolkit";
import {
  getScheduleThunk,
  getScheduleByIdThunk,
  deleteScheduleByIdThunk,
  addScheduleThunk,
  updateScheduleByIdThunk,
  uploadMaterialsThunk,
  deleteFileByNameThunk,
  addCommentByIdThunk,
  deleteCommentByIdThunk,
  getScheduleByRoomThunk,
} from "./cleaningOperations";

const scheduleState = {
  isLoading: false,
  error: null,
  cleaningArr: [],
  missedCleaningArr: [],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const cleaningSlice = createSlice({
  name: "schedule",
  initialState: scheduleState,
  reducers: {
    resetCleaningData: (state) => {
      state.cleaningArr = [];
      state.missedCleaningArr = [];
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getScheduleThunk.pending, handlePending)
      .addCase(getScheduleThunk.rejected, handleRejected)
      .addCase(getScheduleThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cleaningArr = action.payload.data;
      })

      .addCase(getScheduleByRoomThunk.pending, handlePending)
      .addCase(getScheduleByRoomThunk.rejected, handleRejected)
      .addCase(getScheduleByRoomThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.missedCleaningArr = action.payload;
      })

      .addCase(getScheduleByIdThunk.pending, handlePending)
      .addCase(getScheduleByIdThunk.rejected, handleRejected)
      .addCase(getScheduleByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lessonById = action.payload;
      })

      .addCase(deleteScheduleByIdThunk.pending, handlePending)
      .addCase(deleteScheduleByIdThunk.rejected, handleRejected)
      .addCase(deleteScheduleByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedArr = state.cleaningArr.filter(
          ({ _id }) => _id !== action.payload
        );
        state.cleaningArr = updatedArr;
      })
      .addCase(addScheduleThunk.pending, handlePending)
      .addCase(addScheduleThunk.rejected, handleRejected)
      .addCase(addScheduleThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.cleaningArr.push(action.payload);
      })
      .addCase(updateScheduleByIdThunk.pending, handlePending)
      .addCase(updateScheduleByIdThunk.rejected, handleRejected)
      .addCase(updateScheduleByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.cleaningArr.findIndex(
          ({ _id }) => _id === action.payload._id
        );

        if (index !== -1) {
          const currentElement = state.cleaningArr[index];
          const updateElement = { ...currentElement, ...action.payload };

          state.cleaningArr.splice(index, 1, updateElement);
        }
      })
      // UPLOAD FILES
      .addCase(uploadMaterialsThunk.pending, handlePending)
      .addCase(uploadMaterialsThunk.rejected, handleRejected)
      .addCase(uploadMaterialsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.lessonById = { ...state.lessonById, ...action.payload };
      })
      // DELETE FILES
      .addCase(deleteFileByNameThunk.pending, handlePending)
      .addCase(deleteFileByNameThunk.rejected, handleRejected)
      .addCase(deleteFileByNameThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lessonById = { ...state.lessonById, ...action.payload };
      })

      // ADD COMMENT

      .addCase(addCommentByIdThunk.pending, handlePending)
      .addCase(addCommentByIdThunk.rejected, handleRejected)
      .addCase(addCommentByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lessonById = { ...state.lessonById, ...action.payload };
      })

      // DELETE COMMENT

      .addCase(deleteCommentByIdThunk.pending, handlePending)
      .addCase(deleteCommentByIdThunk.rejected, handleRejected)
      .addCase(deleteCommentByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (!state.lessonById.materials) {
          return;
        }

        state.lessonById = {
          ...state.lessonById,
          ...action.payload,
        };
      }),
});

export const { resetCleaningData } = cleaningSlice.actions;
export const cleaningReducer = cleaningSlice.reducer;

export const selectSchedulesLoading = (state) => state.cleaning.isLoading;
export const selectSchedulesArr = (state) => state.cleaning.cleaningArr;
export const selectMissedCleaningArr = (state) =>
  state.cleaning.missedCleaningArr;
export const selectLessonsById = (state) => state.cleaning.lessonById;
