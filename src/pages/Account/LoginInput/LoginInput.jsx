import {
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { userUpdateThunk } from "../../../redux/authOparations";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { LoginWrapper } from "./LoginInput.styled";
import PropTypes from "prop-types";

export default function LoginInput({
  setIsLoginInput,
  loginValue,
  dispatch,
  setLoginValue,
  isLoginInput,
  user,
  isLoading,
}) {
  const hendleLoginInput = () => {
    setIsLoginInput(true);
  };

  const hendleLoginInputClose = () => {
    setIsLoginInput(false);
  };

  const hendleAddLogin = async () => {
    await dispatch(userUpdateThunk({ displayName: loginValue }));
    if (loginValue) {
      setIsLoginInput(false);
    }
  };

  const handleChange = (newValue) => {
    if (newValue.length <= 30) {
      setLoginValue(newValue);
    }
  };
  return (
    <>
      <Typography>
        Login:{" "}
        <Typography variant="subtitle2" component="span">
          {!isLoginInput && user?.displayName}
        </Typography>
      </Typography>
      {!isLoginInput && (
        <IconButton
          color="info"
          onClick={hendleLoginInput}
          disabled={isLoading}
        >
          <EditIcon />
        </IconButton>
      )}
      {isLoginInput && (
        <LoginWrapper>
          <TextField
            value={loginValue}
            onChange={(e) => handleChange(e.target.value)}
            variant="standard"
            helperText="Max 30 characters"
            style={{ minWidth: 150 }}
          />
          {loginValue.length > 2 && (
            <IconButton
              color="success"
              onClick={hendleAddLogin}
              disabled={isLoading}
            >
              {!isLoading && <AddCircleIcon />}
              {isLoading && <CircularProgress size="20px" />}
            </IconButton>
          )}

          <IconButton
            color="info"
            onClick={hendleLoginInputClose}
            disabled={isLoading}
          >
            <CloseIcon />
          </IconButton>
        </LoginWrapper>
      )}
    </>
  );
}

LoginInput.propTypes = {
  setIsLoginInput: PropTypes.func.isRequired,
  loginValue: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  setLoginValue: PropTypes.func.isRequired,
  isLoginInput: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
