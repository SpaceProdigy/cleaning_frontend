import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from "@mui/icons-material/Login";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../firebaseConfig";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectAuthLoading } from "../../../redux/authSlice";

AuthGoogleButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function AuthGoogleButton({ text }) {
  const isLoading = useSelector(selectAuthLoading);

  const handleClickGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <Button
      type="button"
      onClick={handleClickGoogle}
      variant="contained"
      fullWidth
      size="large"
      endIcon={<LoginIcon />}
      startIcon={<GoogleIcon />}
      disabled={isLoading}
    >
      {text}
    </Button>
  );
}
