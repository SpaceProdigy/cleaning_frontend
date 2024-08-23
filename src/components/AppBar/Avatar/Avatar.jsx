import { IconButton } from "@mui/material";

import { useSelector } from "react-redux";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { selectAuthUser } from "../../../redux/authSlice";
import { PhotoWrapper } from "./Avatar.styled";

export const Avatar = () => {
  const user = useSelector(selectAuthUser);

  return (
    <IconButton sx={{ p: 0, ml: 2 }}>
      {user?.photoURL ? (
        <PhotoWrapper src={user?.photoURL}></PhotoWrapper>
      ) : (
        <AccountCircleIcon fontSize="large" />
      )}
    </IconButton>
  );
};
