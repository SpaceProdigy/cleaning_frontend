import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  getPostsThunk,
  getPostByIdThunk,
  upLoadFilesToTelegramAndCloudinaryThunk,
  toggleLikeThunk,
  deletePostThunk,
  getLessonsPostsByTagThunk,
} from "./upLoadOperetions";

const postsState = {
  isLoading: false,
  error: null,
  postsByCategory: {},
  currentPost: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const postsSlice = createSlice({
  name: "posts",
  initialState: postsState,

  extraReducers: (builder) =>
    builder
      .addCase(getPostsThunk.pending, handlePending)
      .addCase(getPostsThunk.rejected, handleRejected)
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (!action.payload) {
          return;
        }

        const { nameCollection, data } = action.payload;
        state.postsByCategory[nameCollection] = data;
      })
      .addCase(getLessonsPostsByTagThunk.pending, handlePending)
      .addCase(getLessonsPostsByTagThunk.rejected, handleRejected)
      .addCase(getLessonsPostsByTagThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (!action.payload) {
          return;
        }
        const { nameCollection, data } = action.payload;
        state.postsByCategory[nameCollection] = data;
      })

      // Получение одного поста по ID
      .addCase(getPostByIdThunk.pending, handlePending)
      .addCase(getPostByIdThunk.rejected, handleRejected)
      .addCase(getPostByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPost = action.payload;
      })

      .addCase(upLoadFilesToTelegramAndCloudinaryThunk.pending, handlePending)
      .addCase(upLoadFilesToTelegramAndCloudinaryThunk.rejected, handleRejected)
      .addCase(
        upLoadFilesToTelegramAndCloudinaryThunk.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;

          if (!action.payload) {
            return;
          }
          const { nameCollection, data } = action.payload;
          state.postsByCategory[nameCollection] = [
            data,
            ...(state.postsByCategory[nameCollection] || []),
          ];
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
        const { postId, data, nameCollection } = action.payload;

        const postIndex = state.postsByCategory[nameCollection].findIndex(
          (post) => post._id === postId
        );
        if (postIndex !== -1) {
          state.postsByCategory[nameCollection][postIndex] = {
            ...state.postsByCategory[nameCollection][postIndex],
            likes: data.likes,
            likedBy: data.likedBy,
          };
        }

        // Обновляем лайки в текущем открытом посте
        if (state.currentPost?._id === postId) {
          state.currentPost = {
            ...state.currentPost,
            likes: data.likes,
            likedBy: data.likedBy,
          };
        }
      })
      // Обработка удаления поста
      .addCase(deletePostThunk.pending, handlePending)
      .addCase(deletePostThunk.rejected, handleRejected)
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (!action.payload) {
          return;
        }
        const { id, nameCollection } = action.payload;

        // Удаляем пост из списка
        if (id) {
          state.postsByCategory[nameCollection] = state.postsByCategory[
            nameCollection
          ].filter((post) => post._id !== id);

          // Если удален текущий пост, сбрасываем currentPost
          if (state.currentPost?._id === id) {
            state.currentPost = null;
          }
        }
      }),
});

export const postsReducer = postsSlice.reducer;

export const selectPostLoading = (state) => state.posts.isLoading;
const selectPostsByCategory = (state) => state.posts.postsByCategory;
export const selectPostsArr = (nameCollection) =>
  createSelector(
    [selectPostsByCategory],
    (postsByCategory) => postsByCategory[nameCollection] || []
  );

export const selectCurrentPost = (state) => state.posts.currentPost;
