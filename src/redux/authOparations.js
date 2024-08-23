import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { notify } from "../components/AlertComponent/notify";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { collectionDb } from "../locales/collectionDb";

const auth = getAuth();

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
  "auth /fetchAdmins",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getDocs(collection(db, "admins"));

      const adminsArr = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return adminsArr;
    } catch (error) {
      consolError(error);
      return rejectWithValue(error.message);
    }
  }
);

export const userUpdateThunk = createAsyncThunk(
  "auth /update",
  async (data, { rejectWithValue }) => {
    try {
      await updateProfile(auth.currentUser, data);
      return data;
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
  "auth /currentUser",
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
          },
          permissions: {},
        };

        const response = await getDocs(collection(db, "admins"));

        const adminsArr = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const adminsRole = Object.entries(adminsArr[0]);

        // eslint-disable-next-line no-unused-vars
        const currentUser = adminsRole.find(([admin, emailArr]) =>
          emailArr.includes(email)
        );

        if (currentUser) {
          return {
            ...userInfo,
            permissions: { [currentUser[0]]: true },
            admins: adminsArr,
          };
        }

        return {
          ...userInfo,
          admins: adminsArr,
          permissions: { justUser: true },
        };
      }
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

      await dispatch(userUpdateThunk({ photoURL: newPhotoUrl }));
      return;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const updatePermissionsThunk = createAsyncThunk(
  "auth/updatePermissions",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const docRef = doc(db, collectionDb.admins, "permissions");

      await updateDoc(docRef, data.data);

      if (data.type === "delete") {
        notify(
          "success",
          language === "en"
            ? "This email address has deleted successfully"
            : "Цю електронну адресу успішно видалено"
        );
      }

      if (data.type === "add") {
        notify(
          "success",
          language === "en"
            ? "Administrator added successfully"
            : "Адміністратора додано успішно"
        );
      }

      return data.data;
    } catch (error) {
      console.log(error);
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);
