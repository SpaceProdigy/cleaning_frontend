import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser,
} from "firebase/auth";
import { notify } from "../components/AlertComponent/notify";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import axios from "axios";
import { storage } from "../../firebaseConfig";

const auth = getAuth();

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

const consolError = async (error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log("errorCode", errorCode);
  console.log("errorMessage", errorMessage);
};

const isEn = async () => {
  const localStorString = JSON.parse(
    localStorage.getItem("persist:basicSettings")
  );
  const language = await localStorString.language.replace(/"/g, "");
  return language;
};

export const fetchAdminsThunk = createAsyncThunk(
  "auth/fetchAdmins",
  async (adminsArr, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}users/admins`, {
        headers: {
          adminsarr: JSON.stringify(adminsArr),
        },
      });

      return data;
    } catch (error) {
      consolError(error);
      return rejectWithValue(error.message);
    }
  }
);

export const userUpdateThunk = createAsyncThunk(
  "auth/update",
  async (
    { photoURL, displayName, userId, type = false },
    { rejectWithValue }
  ) => {
    try {
      if (type === "updateDisplayName") {
        await updateProfile(auth.currentUser, { displayName });

        await axios.patch(`${BASE_URL}users/${userId}`, {
          displayName,
        });

        notify(
          "success",
          language === "en"
            ? "The login has been updated successfully."
            : "Логін успішно оновлено"
        );

        return { displayName };
      }

      if (type === "updatePhotoURL") {
        await updateProfile(auth.currentUser, { photoURL });
        notify(
          "success",
          language === "en"
            ? "The Photo has been updated successfully."
            : "Фото успішно оновлено"
        );
        return { photoURL };
      }
    } catch (error) {
      consolError(error);
      return rejectWithValue(error.message);
    }
  }
);

export const verifiEmailThunk = createAsyncThunk(
  "auth/verifiEmail",
  async (_, { rejectWithValue }) => {
    try {
      await sendEmailVerification(auth.currentUser);

      const language = await isEn();

      notify(
        "success",
        language === "en"
          ? "Check your email."
          : "Перевірте вашу електронну пошту."
      );
    } catch (error) {
      consolError(error);
      return rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth /register",
  async (data, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      await updateProfile(auth.currentUser, {
        displayName: data.login,
      });

      const { displayName, uid, email } = auth.currentUser;

      await axios.patch(
        `${BASE_URL}users/${uid}`,
        {
          displayName,
        },
        { params: { email: email ?? null } }
      );

      return { displayName };
    } catch (error) {
      const language = await isEn();
      notify(
        "error",
        language === "ua" && error.code === "auth/email-already-in-use"
          ? "E-mail вже використовується"
          : error.code
      );
      consolError(error);
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth /login",
  async (data, { rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      const language = await isEn();
      notify(
        "error",
        language === "ua" && error.code === "auth/invalid-credential"
          ? "Невірно введено логін або пароль."
          : error.code
      );
      consolError(error);
      return rejectWithValue(error.message);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  "auth/currentUser",
  async (data, { rejectWithValue }) => {
    try {
      if (data) {
        const {
          accessToken,
          displayName,
          email,
          emailVerified,
          isAnonymous,
          phoneNumber,
          photoURL,
          uid,
        } = data;

        const response = await axios.get(`${BASE_URL}users/${uid}`, {
          params: {
            email,
            displayName,
          },
        });

        const userInfo = {
          accessToken: { accessToken },
          user: {
            displayName,
            email,
            emailVerified,
            isAnonymous,
            phoneNumber,
            photoURL,
            uid,
            roomNumber: response?.data?.roomNumber ?? null,
          },
          permissions: [...(response?.data?.role ?? "viewer")],
        };

        return userInfo;
      }
    } catch (error) {
      consolError(error);
      return rejectWithValue(error.message);
    }
  }
);

export const addAdminThunk = createAsyncThunk(
  "auth/addAdmin",
  async ({ userId, role, email, type }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `${BASE_URL}users/admins${userId ? `/${userId}` : ""}`,
        {
          role,
        },
        {
          headers: {
            email: email ?? null,
            remove: type === "delete" ? true : null,
          },
        }
      );

      if (type === "delete") {
        notify(
          "success",
          language === "en"
            ? "Rights successfully removed"
            : "Права успішно видалено"
        );
      }

      if (type === "add") {
        notify(
          "success",
          language === "en"
            ? "Rights successfully added"
            : "Права успішно додано"
        );
      }

      return data;
    } catch (error) {
      consolError(error);
      return rejectWithValue(error.message);
    }
  }
);

export const userUpdateRoomThunk = createAsyncThunk(
  "auth/updateRoom",
  async ({ id, roomNumber, email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `${BASE_URL}users/${id}`,
        {
          roomNumber,
        },
        { params: { email: email ?? null } }
      );

      notify(
        "success",
        language === "en"
          ? "The room has been updated successfully."
          : "Кімнату успішно оновлено"
      );
      return data;
    } catch (error) {
      consolError(error);
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth /logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      consolError(error);
      return rejectWithValue(error.message);
    }
  }
);

export const uploadPhotoThunk = createAsyncThunk(
  "user/uploadPhoto",
  async ({ data, setLoadingProgress, id }, { rejectWithValue, dispatch }) => {
    try {
      if (data.length === 0) return;

      const storage = getStorage();
      const imageRef = ref(storage, `users/${id}/` + "avatar");
      const uploadTask = uploadBytesResumable(imageRef, data);
      const newPhotoUrl = await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            setLoadingProgress(progress);

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
          async () => {
            // Upload completed successfully, now we can get the download URL
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            } catch (error) {
              reject(error);
            }
          }
        );
      });

      await dispatch(
        userUpdateThunk({ photoURL: newPhotoUrl, type: "updatePhotoURL" })
      );
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const updatePermissionsThunk = createAsyncThunk(
  "auth/updatePermissions",
  async ({ updateRole, type, userId }, { rejectWithValue }) => {
    try {
      console.log(updateRole);
      await axios.patch(`${BASE_URL}users/${userId}`, updateRole);

      if (type === "delete") {
        notify(
          "success",
          language === "en"
            ? "This email address has deleted successfully"
            : "Цю електронну адресу успішно видалено"
        );
      }

      if (type === "add") {
        notify(
          "success",
          language === "en"
            ? "Administrator added successfully"
            : "Адміністратора додано успішно"
        );
      }

      return userId;
    } catch (error) {
      console.log(error);
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAccountThunk = createAsyncThunk(
  "auth/deleteAccount",
  async ({ email, password, userId }, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;

      if (!user) throw new Error("Usser not found");

      // Firebase требует недавней авторизации перед удалением
      const credential = EmailAuthProvider.credential(email, password);
      await reauthenticateWithCredential(user, credential);

      const folderRef = ref(storage, `users/${userId}`);
      const fileList = await listAll(folderRef);

      // Удаляем каждый файл поочередно
      for (const item of fileList.items) {
        await deleteObject(item); // Удаляем файл
        console.log(`Файл ${item.name} удален!`);
      }

      await deleteUser(user); // Удаляем аккаунт

      return true; // Успешное удаление
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
