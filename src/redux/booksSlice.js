import { createSlice } from "@reduxjs/toolkit";
import {
  deleteBookThunk,
  getBooksThunk,
  toggleLikeThunk,
  upLoadFilesToGoogleDiskAndCloudinaryThunk,
} from "./booksOperetions";

const booksState = {
  isLoading: false,
  error: null,
  booksArr: [],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const booksSlice = createSlice({
  name: "books",
  initialState: booksState,

  extraReducers: (builder) =>
    builder
      .addCase(getBooksThunk.pending, handlePending)
      .addCase(getBooksThunk.rejected, handleRejected)
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (!action.payload) {
          return;
        }
        state.booksArr = action.payload;
      })

      .addCase(upLoadFilesToGoogleDiskAndCloudinaryThunk.pending, handlePending)
      .addCase(
        upLoadFilesToGoogleDiskAndCloudinaryThunk.rejected,
        handleRejected
      )
      .addCase(
        upLoadFilesToGoogleDiskAndCloudinaryThunk.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;

          if (!action.payload) {
            return;
          }

          state.booksArr = [action.payload, ...state.booksArr];
        }
      )

      // Обработка лайка
      .addCase(toggleLikeThunk.pending, handlePending)
      .addCase(toggleLikeThunk.rejected, handleRejected)
      .addCase(toggleLikeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (!action.payload) {
          return;
        }
        const { postId, data } = action.payload;

        const postIndex = state.booksArr.findIndex(
          (book) => book._id === postId
        );
        if (postIndex !== -1) {
          state.booksArr[postIndex] = {
            ...state.booksArr[postIndex],
            likes: data.likes,
            likedBy: data.likedBy,
          };
        }
      })
      // Обработка удаления поста
      .addCase(deleteBookThunk.pending, handlePending)
      .addCase(deleteBookThunk.rejected, handleRejected)
      .addCase(deleteBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (!action.payload) {
          return;
        }
        const id = action.payload;

        if (id) {
          state.booksArr = state.booksArr.filter((book) => book._id !== id);
        }
      }),
});

export const booksReducer = booksSlice.reducer;

export const selectBooksLoading = (state) => state.books.isLoading;
export const selectBooksArr = (state) => state.books.booksArr;
