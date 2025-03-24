import { createAsyncThunk } from "@reduxjs/toolkit";

import { notify } from "../components/AlertComponent/notify";

import axios from "axios";

const ENV = import.meta.env;

const BASE_URL = ENV.VITE_BASE_URL;

const localStorString = JSON.parse(
  localStorage.getItem("persist:basicSettings")
);

const language = localStorString
  ? localStorString.language.replace(/"/g, "")
  : "en";

const someThingWrongAlarm = () => {
  notify(
    "error",
    language === "en"
      ? "Something went wrong, please try again later"
      : "Щось пішло не так, спробуйте пізніше"
  );
};

export const getLessonsScheduleThunk = createAsyncThunk(
  "lessons/get",
  async (
    { nameCollection, locationMonth, cancelToken, setTotalPages, page, limit },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}lessons/${nameCollection}/${locationMonth}`,
        {
          cancelToken: cancelToken.token,
          params: {
            page,
            limit,
          },
        }
      );

      setTotalPages(data.totalPages);

      return data.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Запрос отменён", error.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const addLessonThunk = createAsyncThunk(
  "lesson/add",
  async ({ nameCollection, data, language }, { rejectWithValue }) => {
    try {
      const respond = await axios.post(
        `${BASE_URL}lessons/${nameCollection}`,
        data
      );
      notify(
        "success",
        language === "ua" ? "Урок додано успішно" : "Lesson added successfully"
      );

      return respond.data;
    } catch (error) {
      console.log(error);
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const updateLessonByIdThunk = createAsyncThunk(
  "cleaning/updateById",
  async (
    { nameCollection, id, updateValue, language },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.put(
        `${BASE_URL}lessons/${nameCollection}/${id}`,
        updateValue
      );
      notify(
        "success",
        language === "en"
          ? "The Lesson has been updated successfully"
          : "Урок успішно оновлено"
      );

      return data;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const deleteLessonByIdThunk = createAsyncThunk(
  "lesson/deleteById",
  async ({ nameCollection, id, language }, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}lessons/${nameCollection}/${id}`);
      notify(
        "success",
        language === "en"
          ? "The lesson was successfully deleted"
          : "Урок  успішно видалено"
      );

      return id;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);
