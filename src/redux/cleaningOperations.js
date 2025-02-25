import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { db, storage } from "../../firebaseConfig";
import { notify } from "../components/AlertComponent/notify";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { collectionDb } from "../locales/collectionDb";

import axios from "axios";
import { notifyMessages } from "../components/AlertComponent/notifyMessages";

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

export const getScheduleThunk = createAsyncThunk(
  "cleaning/get",
  async (
    { nameCollection, locationMonth, cancelToken, setTotalPages, page, limit },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}cleaning/${nameCollection}/${locationMonth}`,
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

export const getScheduleByRoomThunk = createAsyncThunk(
  "cleaning/getByRoom",
  async (
    {
      nameCollection,
      roomNumber,
      cancelToken,
      isTidied,
      page,
      limit,
      setTotalPages,
      setTotalItems,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}cleaning/${nameCollection}/room/${roomNumber}/${isTidied}`,
        {
          cancelToken: cancelToken.token,
          params: {
            page,
            limit,
          },
        }
      );

      setTotalItems(data.total);
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

export const sendRemindThunk = createAsyncThunk(
  "cleaning/sendRemind",
  async (
    { nameCollection, cancelToken, language, setAlreadySent },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}telegram/${nameCollection}/`,
        {
          cancelToken: cancelToken.token,
          params: {},
        }
      );

      if (data.alreadySent) {
        setAlreadySent(data.alreadySent);
        notify(
          "warning",
          notifyMessages({
            language,
            notifyType: "alreadySentToGroup",
            nameCollection,
          })
        );
      } else {
        notify(
          "success",
          notifyMessages({
            language,
            notifyType: "sentToGroup",
            nameCollection,
          })
        );
      }

      return data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Запрос отменён", error.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const addScheduleThunk = createAsyncThunk(
  "cleaning/add",
  async ({ nameCollection, data, language }, { rejectWithValue }) => {
    try {
      const respond = await axios.post(
        `${BASE_URL}cleaning/${nameCollection}`,
        data
      );
      notify(
        "success",
        language === "en"
          ? "Schedule added successfully"
          : "Розклад  додано успішно"
      );

      return respond.data;
    } catch (error) {
      console.log(error);
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const getScheduleByIdThunk = createAsyncThunk(
  "cleaning/getById",
  async ({ nameCollection, currentId }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, nameCollection, currentId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (!docSnap.data().materials) {
          notify(
            "info",
            language === "en"
              ? "Information about the schedule was not found or you have not added schedule yet"
              : "Інформація про розклад не знайдена або ви ще не додали розклад"
          );
        }
        const data = docSnap.data();
        return {
          ...data,
          timestamp: data.timestamp.toDate().toISOString(),
          id: docSnap.id,
        };
      }
    } catch (error) {
      someThingWrongAlarm();

      return rejectWithValue(error.message);
    }
  }
);

export const deleteScheduleByIdThunk = createAsyncThunk(
  "cleaning/deleteById",
  async ({ nameCollection, id, language }, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}cleaning/${nameCollection}/${id}`);
      notify(
        "success",
        language === "en"
          ? "The schedule was successfully deleted"
          : "Розклад  успішно видалено"
      );

      return id;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const updateScheduleByIdThunk = createAsyncThunk(
  "cleaning/updateById",
  async (
    { nameCollection, id, updateValue, language },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch(
        `${BASE_URL}cleaning/${nameCollection}/${id}`,
        updateValue
      );
      notify(
        "success",
        language === "en"
          ? "The schedule has been updated successfully"
          : "Розклад успішно оновлено"
      );

      return data;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const uploadMaterialsThunk = createAsyncThunk(
  "lessonsWithJillMaterials /uploadFiles",
  async (
    { data, setLoadingProgress, id, lessonMaterials },
    { rejectWithValue }
  ) => {
    try {
      if (data.length === 0) return;
      console.log(data);
      const storage = getStorage();
      const uploadPromises = [];

      await data.forEach((file, index) => {
        const imageRef = ref(storage, `files/${id}/` + file.name);
        const uploadTask = uploadBytesResumable(imageRef, file);
        const uploadPromise = new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

              setLoadingProgress((prevState) => {
                const updatedProgress = [...prevState];
                updatedProgress[index] = { index, progress };
                return updatedProgress;
              });

              switch (snapshot.state) {
                case "paused":
                  // console.log("Upload is paused");
                  break;
                case "running":
                  // console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              // A full list of error codes is available at
              // https://firebase.google.com/docs/storage/web/handle-errors
              switch (error.code) {
                case "storage/unauthorized":
                  // User doesn't have permission to access the object
                  break;
                case "storage/canceled":
                  // User canceled the upload
                  break;

                // ...

                case "storage/unknown":
                  // Unknown error occurred, inspect error.serverResponse
                  break;
              }
              reject(error);
            },
            () => {
              // Upload completed successfully, now we can get the download URL
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                if (file.type === "application/pdf") {
                  resolve({ pdf: downloadURL, name: file.name });
                } else {
                  resolve({ images: downloadURL, name: file.name });
                }
              });
            }
          );
        });
        uploadPromises.push(uploadPromise);
      });

      const uploadResults = await Promise.all(uploadPromises);

      const docRef = doc(db, collectionDb.lessonsWithJill, id);

      await updateDoc(docRef, {
        materials: lessonMaterials
          ? [...lessonMaterials, ...uploadResults]
          : uploadResults,
      });

      notify(
        "success",
        language === "en"
          ? "Materials added successfully"
          : "Матеріали додано успішно"
      );

      return {
        materials: lessonMaterials
          ? [...lessonMaterials, ...uploadResults]
          : uploadResults,
      };
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFileByNameThunk = createAsyncThunk(
  "lessonsWith/deleteByName",
  async ({ name, id, nameCollection, updateValue }, { rejectWithValue }) => {
    try {
      if (!name) return;

      const fileRef = ref(storage, `files/${id}/${name}`);

      await deleteObject(fileRef);

      const docRef = doc(db, nameCollection, id);

      await updateDoc(docRef, updateValue);

      notify(
        "success",
        language === "en"
          ? "The file was successfully deleted"
          : "Файл успішно видалено"
      );

      return updateValue;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const addCommentByIdThunk = createAsyncThunk(
  "lessonsWith/addComment",
  async ({ nameCollection, id, updateValue }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, nameCollection, id);

      await updateDoc(docRef, updateValue);

      notify(
        "success",
        language === "en"
          ? "Comment added successfully"
          : "Коментар успішно додано"
      );

      return updateValue;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCommentByIdThunk = createAsyncThunk(
  "lessonsWith/deleteComment",
  async ({ id, updatedComments, nameCollection }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, nameCollection, id);

      await updateDoc(docRef, updatedComments);

      notify(
        "success",
        language === "en"
          ? "Comment delete successfully"
          : "Коментар успішно видалино"
      );

      return updatedComments;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);
