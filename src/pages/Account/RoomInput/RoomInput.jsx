import {
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { userUpdateRoomThunk } from "../../../redux/authOparations";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { RoomWrapper } from "./RoomInput.styled";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";

export default function RoomInput({
  isRoomInput,
  setIsRoomInput,
  roomValue,
  setRoomValue,
  dispatch,
  user,
  isLoading,
}) {
  const language = useSelector(selectLanguage);
  const hendleLoginInput = () => {
    setIsRoomInput(true);
  };

  const hendleRoomInputClose = () => {
    setIsRoomInput(false);
  };

  const hendleAddRoom = async () => {
    await dispatch(
      userUpdateRoomThunk({ id: user.uid, roomNumber: Number(roomValue) })
    );
    if (roomValue) {
      setIsRoomInput(false);
    }
  };

  const handleChange = (newValue) => {
    // Проверяем, состоит ли строка только из цифр
    const onlyNumbers = newValue.replace(/\D/g, ""); // \D означает все, кроме цифр

    if (onlyNumbers.length <= 5) {
      setRoomValue(onlyNumbers);
    }
  };

  return (
    <>
      <Typography>
        {language === "en" ? "Room:" : "Кімніта:"}{" "}
        {!user?.roomNumber && !isRoomInput && (
          <Typography variant="caption" component="span">
            {language === "en"
              ? "Enter your room number"
              : "Введіть номер вашої кімнати"}
          </Typography>
        )}
        <Typography variant="subtitle2" component="span">
          {!isRoomInput && user?.roomNumber}
        </Typography>
      </Typography>
      {!isRoomInput && (
        <IconButton
          color="info"
          onClick={hendleLoginInput}
          disabled={isLoading}
        >
          <EditIcon />
        </IconButton>
      )}
      {isRoomInput && (
        <RoomWrapper>
          <TextField
            value={roomValue}
            onChange={(e) => handleChange(e.target.value)}
            variant="standard"
            helperText="Max 5 characters"
            style={{ minWidth: 150 }}
          />
          {roomValue.length > 0 && (
            <IconButton
              color="success"
              onClick={hendleAddRoom}
              disabled={isLoading}
            >
              {!isLoading && <AddCircleIcon />}
              {isLoading && <CircularProgress size="20px" />}
            </IconButton>
          )}

          <IconButton
            color="info"
            onClick={hendleRoomInputClose}
            disabled={isLoading}
          >
            <CloseIcon />
          </IconButton>
        </RoomWrapper>
      )}
    </>
  );
}

RoomInput.propTypes = {
  setIsRoomInput: PropTypes.func.isRequired,
  roomValue: PropTypes.string.isRequired,
  isRoomInput: PropTypes.bool.isRequired,
  setRoomValue: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
