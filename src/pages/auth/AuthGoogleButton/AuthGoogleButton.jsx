import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from "@mui/icons-material/Login";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../firebaseConfig";
import PropTypes from "prop-types";

AuthGoogleButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function AuthGoogleButton({ text }) {
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
    >
      {text}
    </Button>
  );
}
