import { createAsyncThunk } from "@reduxjs/toolkit";
import { notify } from "../components/AlertComponent/notify";
import axios from "axios";
import {
  notificationMapObj,
  notifyMessages,
} from "../components/AlertComponent/notifyMessages";

const ENV = import.meta.env;
const BASE_URL = ENV.VITE_BASE_URL;

export const getPostsThunk = createAsyncThunk(
  "get/posts",
  async (
    { cancelToken, page, limit, nameCollection, setTotalPages },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get(`${BASE_URL}posts/all`, {
        cancelToken,
        params: { page, limit },
      });

      if (!nameCollection) {
        console.error("⚠️ nameCollection не был передан в getPostsThunk!");
        return rejectWithValue("nameCollection is missing");
      }

      setTotalPages(data?.totalPages);

      return { nameCollection, data: data.posts };
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("error", "Request canceled");

        return; // Ничего не делаем, если запрос был отменен
      }
      console.log(error.response?.data.message);
      notify("error", error.response?.data.message || error.message);

      return rejectWithValue(error.message); // Возвращаем ошибку в rejectWithValue
    }
  }
);

export const getLessonsPostsByTagThunk = createAsyncThunk(
  "lessonsPosts/getByTag",
  async (
    { tag, page, limit, setTotalPages, cancelToken, nameCollection },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get(`${BASE_URL}posts/all/tag`, {
        cancelToken: cancelToken?.token,
        params: { tag, page, limit },
      });

      setTotalPages(data.totalPages);

      return { nameCollection, data: data.posts };
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Запрос отменён", error.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const getPostByIdThunk = createAsyncThunk(
  "posts/getPostById",
  async (id, { rejectWithValue, getState }) => {
    try {
      const { currentPost } = getState();
      if (currentPost?._id === id) return currentPost;
      const { data } = await axios.get(`${BASE_URL}posts/${id}`);

      return data;
    } catch (error) {
      notify("error", error.response?.data?.error || "Error loading post");
      return rejectWithValue(error.message);
    }
  }
);

export const toggleLikeThunk = createAsyncThunk(
  "posts/toggleLike",
  async (
    { postId, userId, displayName, avatar, nameCollection },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch(`${BASE_URL}posts/${postId}/like`, {
        userId,
        displayName,
        avatar,
      });
      return { data, postId, nameCollection };
    } catch (error) {
      notify("error", error.response?.data?.error || "Ошибка при лайке");
      return rejectWithValue(error.message);
    }
  }
);

export const upLoadFilesToTelegramAndCloudinaryThunk = createAsyncThunk(
  "upLoad/fileToTelegram",
  async (
    { cancelToken, language, formData, nameCollection },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post(`${BASE_URL}upload/files`, formData, {
        cancelToken,
        headers: { "Content-Type": "multipart/form-data" },
      });

      notify(
        "success",
        notifyMessages({
          language,
          notifyType: notificationMapObj.postSuccessfullyCreated,
        })
      );

      return { nameCollection, data: data?.newPost };
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
        return; // Ничего не делаем, если запрос был отменен
      }

      const errorMessage = error.response?.data?.error; // Получаем объект ошибки с сервера
      if (errorMessage) {
        const message = errorMessage[language] || errorMessage.en; // Получаем ошибку на нужном языке (по умолчанию на английском)

        notify("error", message);
      }

      return rejectWithValue(error.message); // Возвращаем ошибку в rejectWithValue
    }
  }
);

export const deletePostThunk = createAsyncThunk(
  "posts/deletePost",
  async ({ nameCollection, id }, { rejectWithValue }) => {
    try {
      // Отправляем запрос на удаление поста по его ID
      const { data } = await axios.delete(`${BASE_URL}posts/${id}`);

      // Если удаление прошло успешно, возвращаем данные (например, сообщение об успешном удалении)
      return { nameCollection, id: data.id };
    } catch (error) {
      // Если ошибка при удалении, выводим уведомление и возвращаем ошибку
      notify(
        "error",
        error.response?.data?.error || "Error when deleting a post"
      );
      return rejectWithValue(error.message); // Возвращаем ошибку в rejectWithValue
    }
  }
);
