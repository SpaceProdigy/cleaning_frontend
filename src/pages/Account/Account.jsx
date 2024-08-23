import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthAdmins,
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

export default function Account() {
  const user = useSelector(selectAuthUser);
  const permissions = useSelector(selectAuthPermissions);
  const admins = useSelector(selectAuthAdmins);
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectAuthLoading);
  const [isLoginInput, setIsLoginInput] = useState(false);
  const [loginValue, setLoginValue] = useState(user?.displayName ?? "");

  const dispatch = useDispatch();

  const allPermissions = Object.entries(permissions);
  const currentPermissions = allPermissions.find((el) => {
    if (el.includes(true)) {
      return el;
    }
  });

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
            Email:{" "}
            <Typography variant="subtitle2" component="span">
              {user?.email}
            </Typography>
          </Typography>
        </TextWrapper>
        <TextWrapper elevation={2}>
          <Typography whiteSpace="nowrap">
            User UID:{" "}
            <Typography variant="subtitle2" component="span">
              {user?.uid}
            </Typography>
          </Typography>
        </TextWrapper>

        {currentPermissions && (
          <TextWrapper elevation={2}>
            <Typography>
              Role:{" "}
              <Typography variant="subtitle2" component="span" color="#008000">
                {currentPermissions[0].toLocaleUpperCase()}
              </Typography>
            </Typography>
          </TextWrapper>
        )}
      </InfoWrapper>
      {permissions?.superAdmin && (
        <Admins
          dispatch={dispatch}
          isLoading={isLoading}
          admins={admins}
          language={language}
        />
      )}

      <Button type="button" variant="contained" onClick={hendleLogOut}>
        {language === "en" ? "Log out" : "Вийти"}
      </Button>
    </MainWrapper>
  );
}
