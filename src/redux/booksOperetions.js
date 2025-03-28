import { createAsyncThunk } from "@reduxjs/toolkit";
import { notify } from "../components/AlertComponent/notify";
import axios from "axios";
import {
  notificationMapObj,
  notifyMessages,
} from "../components/AlertComponent/notifyMessages";

const ENV = import.meta.env;
const BASE_URL = ENV.VITE_BASE_URL;

export const getBooksThunk = createAsyncThunk(
  "books/getAll",
  async ({ cancelToken, page, limit, setTotalPages }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}books/all`, {
        cancelToken,
        params: { page, limit },
      });

      setTotalPages(data?.totalPages);

      return data?.books;
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

export const toggleLikeThunk = createAsyncThunk(
  "books/toggleLike",
  async ({ postId, userId, displayName, avatar }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`${BASE_URL}books/${postId}/like`, {
        userId,
        displayName,
        avatar,
      });
      return { data, postId };
    } catch (error) {
      notify("error", error.response?.data?.error || "Ошибка при лайке");
      return rejectWithValue(error.message);
    }
  }
);

export const upLoadFilesToGoogleDiskAndCloudinaryThunk = createAsyncThunk(
  "books/addBook",
  async ({ cancelToken, language, formData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}books`, formData, {
        cancelToken,
        headers: { "Content-Type": "multipart/form-data" },
      });

      notify(
        "success",
        notifyMessages({
          language,
          notifyType: notificationMapObj.bookDownloaded,
        })
      );

      return data?.newBook;
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

export const deleteBookThunk = createAsyncThunk(
  "book/deleteBook",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}books/${id}`);
      notify("success", "The book was successfully deleted");
      return data.id;
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
