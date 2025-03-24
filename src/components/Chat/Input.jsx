import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { FormHelperText, Input } from "@mui/material";
import PropTypes from "prop-types";
import { StyledTextField } from "./Chat.styled";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/authSlice";
import { nanoid } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { useState } from "react";
import { selectLanguage } from "../../redux/localOperation";
import { errorMessages } from "../../errorMessages";

CustomizedInput.propTypes = {
  setChatMessages: PropTypes.func.isRequired,
};

export default function CustomizedInput({ setChatMessages }) {
  const user = useSelector(selectAuthUser);
  const language = useSelector(selectLanguage);

  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const newSms = {
    id: nanoid(),
    photoURL: user?.photoURL,
    displayName: user?.displayName,
    uid: user?.uid,
    text: text.trim(),
    time: dayjs(),
  };

  const handleChange = async (e) => {
    const inputText = e.target.value;

    if (inputText.length > 1000) {
      setError(
        errorMessages({
          lang: language,
          errorType: "maxLength",
          length: 1000,
        })
      );
      return;
    } else {
      setError("");
    }

    setText(inputText);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedText = text.trim();

    if (!trimmedText) {
      setError(errorMessages({ lang: language, errorType: "mEmpty" }));
      return;
    }

    setChatMessages((prevState) => [newSms, ...prevState]);
    setText("");
    setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: "15px 4px 5px 4px",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <StyledTextField sx={{ ml: 1, flex: 1 }}>
        <Input
          value={text}
          error={!!error}
          multiline
          maxRows={5}
          placeholder="Chat MM"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setError("")}
        />
        <FormHelperText error={!!error} sx={{ minHeight: "20px" }}>
          {error}
        </FormHelperText>
      </StyledTextField>

      <IconButton type="submit" color="primary" sx={{ p: "10px", ml: "5px" }}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
