import { nanoid } from "@reduxjs/toolkit";
import {
  AdminWrapper,
  FormWrapper,
  InfoWrapper,
  InputsWrapper,
  TextWrapper,
} from "./Admins.styled";

import DeleteIcon from "@mui/icons-material/Delete";

import PropTypes from "prop-types";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { updatePermissionsThunk } from "../../../redux/authOparations";
import { notify } from "../../../components/AlertComponent/notify";

export default function Admins({ dispatch, isLoading, admins, language }) {
  const [selectAdmins, setSelectAdmins] = useState("superAdmin");
  const [emailInput, setEmailInput] = useState("");

  const allPermissions = Object.entries(admins[0]);

  const currentPermissions = allPermissions
    .filter(([key]) => key !== "id")
    .map(([key, value]) => ({ key, value }));

  const handleDelete = async (key, email) => {
    if (!key || !email) {
      return;
    }
    const copyArr = [...admins[0][key]];
    const updateArr = copyArr.filter((currentEmail) => currentEmail !== email);

    await dispatch(
      updatePermissionsThunk({ data: { [key]: updateArr }, type: "delete" })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !selectAdmins ||
      !emailInput ||
      emailInput === "" ||
      selectAdmins === ""
    ) {
      return;
    }

    const updateArr = [...admins[0][selectAdmins]];

    if (updateArr.includes(emailInput.trim())) {
      notify(
        "error",
        language === "en"
          ? "This email address already exists"
          : "Ця електронна адреса вже існує"
      );
      return;
    }
    updateArr.push(emailInput.trim());

    dispatch(
      updatePermissionsThunk({
        data: { [selectAdmins]: updateArr },
        type: "add",
      })
    );
    setEmailInput("");
  };

  return (
    <>
      <InfoWrapper>
        {currentPermissions &&
          currentPermissions.map((el) => (
            <AdminWrapper key={nanoid()} elevation={2}>
              <Typography variant="h6" color="#9ACD32">
                {el.key.toLocaleUpperCase()}
              </Typography>
              {el.value.length > 0 ? (
                el.value.map((email) => (
                  <TextWrapper key={nanoid()} elevation={3}>
                    <Typography>{email}</Typography>

                    <IconButton
                      color="error"
                      disabled={isLoading}
                      onClick={() => handleDelete(el.key, email)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TextWrapper>
                ))
              ) : (
                <Typography variant="subtitle2" color="#800080">
                  {language === "en"
                    ? " No admins here yet"
                    : "Тут ще немає адміністраторів"}
                </Typography>
              )}
            </AdminWrapper>
          ))}

        <Paper elevation={2} sx={{ p: "20px" }}>
          <FormWrapper onSubmit={handleSubmit}>
            <Paper elevation={3} sx={{ p: "20px", width: "100%" }}>
              <Typography textAlign="center" color="#FFD700">
                Add Email
              </Typography>
            </Paper>
            <InputsWrapper elevation={3}>
              <FormControl fullWidth>
                <InputLabel>Admins</InputLabel>
                <Select
                  value={selectAdmins}
                  label="Admins"
                  onChange={(e) => setSelectAdmins(e.target.value)}
                >
                  {currentPermissions.map((el) => (
                    <MenuItem key={nanoid()} value={el.key}>
                      {el.key}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                sx={{ mt: 2 }}
                label="Email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <Button type="submit" disabled={isLoading}>
                Submit
              </Button>
            </InputsWrapper>
          </FormWrapper>
        </Paper>
      </InfoWrapper>
    </>
  );
}

Admins.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  admins: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
};
