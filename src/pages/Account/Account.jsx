import { useDispatch, useSelector } from "react-redux";
import {
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

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem("timeLeft");
    return savedTime ? JSON.parse(savedTime) : 60;
  });

  const [isActive, setIsActive] = useState(() => {
    const savedActiveState = localStorage.getItem("isActive");
    return savedActiveState ? JSON.parse(savedActiveState) : false;
  });

  useEffect(() => {
    if (!user?.emailVerified) {
      let timer;
      if (isActive && timeLeft > 0) {
        timer = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
      } else if (timeLeft === 0) {
        clearInterval(timer);
        setIsActive(false);
      }

      localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
      localStorage.setItem("isActive", JSON.stringify(isActive));

      return () => clearInterval(timer);
    }
  }, [isActive, timeLeft, user?.emailVerified]);

  const handleVerifiEmail = () => {
    dispatch(verifiEmailThunk({ setIsActive }));
    setTimeLeft(60);
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
            <Typography variant="caption" textAlign="center">
              {language === "en"
                ? "Verify your email to have more opportunities"
                : "Веріфікуй свій емейл щоб мати більше можливостей"}
            </Typography>
            {timeLeft > 0 ? (
              <Typography textAlign="center">{timeLeft}</Typography>
            ) : (
              <Button
                type="button"
                size="small"
                onClick={handleVerifiEmail}
                disabled={isActive || isLoading}
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
    </MainWrapper>
  );
}
