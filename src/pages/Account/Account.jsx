import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthLoading,
  selectAuthPermissions,
  selectAuthUser,
} from "../../redux/authSlice";
import { Button, Typography } from "@mui/material";
import { InfoWrapper, MainWrapper, TextWrapper } from "./Account.styled";
import { selectLanguage } from "../../redux/localOperation";
import { logOutThunk } from "../../redux/authOparations";

import { useState } from "react";
import LoginInput from "./LoginInput/LoginInput";
import UserPhoto from "./UserPhoto/UserPhoto";
import { AlertComponent } from "../../components/AlertComponent/AlertComponent";
import Admins from "./Admins/Admins";
import RoomInput from "./RoomInput/RoomInput";

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

        <TextWrapper elevation={2}>
          <Typography>
            {language === "en" ? "Email:" : "Пошта:"}{" "}
            <Typography variant="subtitle2" component="span">
              {user?.email}
            </Typography>
          </Typography>
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
