import { useDispatch, useSelector } from "react-redux";
import {
  editVerifyEmail,
  selectAuthLoading,
  selectAuthPermissions,
  selectAuthUser,
} from "../../redux/authSlice";
import { Button, Typography } from "@mui/material";
import { InfoWrapper, MainWrapper, TextWrapper } from "./Account.styled";
import { selectLanguage } from "../../redux/localOperation";
import { logOutThunk, verifiEmailThunk } from "../../redux/authOparations";

import { useEffect, useState } from "react";
import LoginInput from "./LoginInput/LoginInput";
import UserPhoto from "./UserPhoto/UserPhoto";
import { AlertComponent } from "../../components/AlertComponent/AlertComponent";
import Admins from "./Admins/Admins";
import RoomInput from "./RoomInput/RoomInput";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DeleteAccountButton from "./DeleteAccountButton/DeleteAccountButton";
import { auth } from "../../../firebaseConfig";
import { notify } from "../../components/AlertComponent/notify";

const TIMER_KEY = "requestCooldown";

export default function Account() {
  const user = useSelector(selectAuthUser);
  const permissions = useSelector(selectAuthPermissions);
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectAuthLoading);
  const [isLoginInput, setIsLoginInput] = useState(false);
  const [loginValue, setLoginValue] = useState(user?.displayName ?? "");
  const [isRoomInput, setIsRoomInput] = useState(false);
  const [roomValue, setRoomValue] = useState(
    user?.roomNumber ? String(user?.roomNumber) : ""
  );

  const dispatch = useDispatch();

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const cooldown = localStorage.getItem(TIMER_KEY);

    if (cooldown) {
      const remaining = Math.max(0, parseInt(cooldown, 10) - Date.now());

      if (remaining > 0) {
        setTimeLeft(Math.ceil(remaining / 1000));
        const interval = setInterval(() => {
          setTimeLeft((prev) => Math.max(0, prev - 1));
        }, 1000);
        return () => clearInterval(interval);
      }
    }
  }, []);

  const handleChekVerifiEmail = async () => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      try {
        await currentUser.reload();

        if (currentUser.emailVerified) {
          dispatch(editVerifyEmail());
          notify(
            "success",
            language === "en"
              ? "Email is verified!"
              : "Електронна пошта перевірена!"
          );
        } else {
          notify(
            "warning",
            language === "en"
              ? "Email is not verified!"
              : "Електронна пошта не перевірена!"
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleVerifiEmail = () => {
    dispatch(verifiEmailThunk());
    const cooldownTime = Date.now() + 60 * 1000; // 1 минута
    localStorage.setItem(TIMER_KEY, cooldownTime);
    setTimeLeft(60);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const hendleLogOut = () => dispatch(logOutThunk());
  return (
    <MainWrapper>
      <AlertComponent />
      <UserPhoto
        user={user}
        language={language}
        isLoading={isLoading}
        dispatch={dispatch}
      />
      <InfoWrapper>
        <TextWrapper elevation={2}>
          <LoginInput
            setIsLoginInput={setIsLoginInput}
            loginValue={loginValue}
            dispatch={dispatch}
            setLoginValue={setLoginValue}
            isLoginInput={isLoginInput}
            user={user}
            isLoading={isLoading}
          />
        </TextWrapper>

        {!user?.emailVerified && (
          <>
            <>
              <Typography variant="caption" textAlign="center">
                {language === "en"
                  ? "Verify your email to have more opportunities"
                  : "Веріфікуй свій емейл щоб мати більше можливостей"}
              </Typography>
              <Typography variant="caption" textAlign="center">
                {language === "en"
                  ? "If you have already verified, refresh the page or click the button"
                  : "Якщо ви вже верифікувалися, оновіть сторінку або натисніть кнопку"}
              </Typography>
              <Button
                type="button"
                size="small"
                onClick={handleChekVerifiEmail}
                disabled={isLoading}
              >
                {language === "en"
                  ? "verification check"
                  : "перевірка верифікації"}
              </Button>
            </>

            {timeLeft > 0 ? (
              <Typography textAlign="center">{timeLeft}</Typography>
            ) : (
              <Button
                type="button"
                size="small"
                onClick={handleVerifiEmail}
                disabled={isLoading}
              >
                {language === "en" ? "to verify" : "верифікувати"}
              </Button>
            )}
          </>
        )}

        <TextWrapper elevation={2}>
          <Typography>
            {language === "en" ? "Email:" : "Пошта:"}{" "}
            <Typography variant="subtitle2" component="span">
              {user?.email}
            </Typography>
          </Typography>

          {user?.emailVerified ? (
            <VerifiedUserIcon color="success" />
          ) : (
            <GppMaybeIcon color="warning" />
          )}
        </TextWrapper>
        <TextWrapper elevation={2}>
          <Typography whiteSpace="nowrap">
            User ID:{" "}
            <Typography variant="subtitle2" component="span">
              {user?.uid}
            </Typography>
          </Typography>
        </TextWrapper>

        <TextWrapper elevation={2}>
          <RoomInput
            isRoomInput={isRoomInput}
            setIsRoomInput={setIsRoomInput}
            roomValue={roomValue}
            setRoomValue={setRoomValue}
            dispatch={dispatch}
            user={user}
            isLoading={isLoading}
          />
        </TextWrapper>

        <TextWrapper elevation={2}>
          <Typography>
            {language === "en" ? "Role:" : "Роль:"}{" "}
            <Typography variant="subtitle2" component="span" color="#008000">
              {permissions.map((item, index, arr) =>
                arr.length === 1
                  ? item.toLocaleUpperCase()
                  : index === 0
                  ? item.toLocaleUpperCase()
                  : ` / ${item.toLocaleUpperCase()}`
              )}
            </Typography>
          </Typography>
        </TextWrapper>
      </InfoWrapper>
      {permissions.includes("superAdmin") && (
        <Admins dispatch={dispatch} isLoading={isLoading} language={language} />
      )}

      <Button type="button" variant="contained" onClick={hendleLogOut}>
        {language === "en" ? "Log out" : "Вийти"}
      </Button>
      <DeleteAccountButton
        language={language}
        user={user}
        isLoading={isLoading}
        dispatch={dispatch}
      />
    </MainWrapper>
  );
}
