import { useState } from "react";
import { deleteAccountThunk } from "../../../redux/authOparations";
import { Button, Input, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { notify } from "../../../components/AlertComponent/notify";

export const DeleteAccountButton = ({
  user,
  language,
  isLoading,
  dispatch,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDeleteAccount = async () => {
    if (!email || !password) {
      return;
    }
    const result = await dispatch(
      deleteAccountThunk({
        email: email.trim(),
        password: password.trim(),
        userId: user?.uid,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      notify(
        "success",
        language === "en"
          ? "Account deleted successfully!"
          : "Обліковий запис успішно видалено!"
      );
    } else {
      notify(
        "error",
        language === "en"
          ? "Error when deleting the account: " + result.payload
          : "Помилка при видаленні облікового запису: " + result.payload
      );
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        p: "20px",
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <Typography variant="h6">
        {language === "en"
          ? "Deleting an account"
          : "Видалення облікового запису"}
      </Typography>
      <Input
        type="email"
        placeholder={language === "en" ? "Your email" : "Ваш email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder={language === "en" ? "Your password" : "Ваш пароль"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        disabled={isLoading}
        variant="contained"
        onClick={handleDeleteAccount}
      >
        {language === "en" ? "Delete account" : "Видалити акаунт"}
      </Button>
    </Paper>
  );
};

export default DeleteAccountButton;

DeleteAccountButton.propTypes = {
  user: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};
