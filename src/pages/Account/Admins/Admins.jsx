import { nanoid } from "@reduxjs/toolkit";
import {
  AdminWrapper,
  FormWrapper,
  InfoWrapper,
  InputsWrapper,
  TextWrapper,
  WrapperDeleteButton,
} from "./Admins.styled";

import DeleteIcon from "@mui/icons-material/Delete";

import PropTypes from "prop-types";
import {
  Box,
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
import { addAdminThunk, fetchAdminsThunk } from "../../../redux/authOparations";
import { pathPages } from "../../../locales/pathPages";
import { useSelector } from "react-redux";
import { selectAuthAdmins } from "../../../redux/authSlice";

const adminsArr = [
  ...Object.values(pathPages).slice(0, -3),
  "superAdmin",
  "admin",
];

export default function Admins({ dispatch, isLoading }) {
  const [selectAdmins, setSelectAdmins] = useState("admin");
  const [emailInput, setEmailInput] = useState("");

  const admins = useSelector(selectAuthAdmins);

  const handleClick = () => {
    dispatch(fetchAdminsThunk(adminsArr));
  };

  const handleDeleteAdmin = (MD_id) => {
    dispatch(
      addAdminThunk({
        type: "delete",
        userId: MD_id,
      })
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

    dispatch(
      addAdminThunk({
        userId: !emailInput.includes("@") ? emailInput : null,
        role: selectAdmins,
        email: emailInput.includes("@") ? emailInput : null,
        type: "add",
      })
    );
  };

  return (
    <>
      <InfoWrapper>
        <Box>
          <Button
            type="button"
            disabled={isLoading}
            variant="contained"
            onClick={handleClick}
          >
            Fetch admins
          </Button>
        </Box>

        <AdminWrapper>
          {admins?.length > 0 &&
            admins?.map(({ email, role, userId, displayName, _id }) => {
              if (role.includes("viewer") && role.length === 1) {
                return;
              }
              return (
                <TextWrapper key={_id} elevation={3}>
                  <WrapperDeleteButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDeleteAdmin(_id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </WrapperDeleteButton>

                  <Typography variant="subtitle2">
                    ROLE:
                    {role.map((item, _, arr) =>
                      arr.length > 1 ? ` ${item} /` : ` ${item} `
                    )}
                  </Typography>
                  <Typography variant="subtitle2">ID: {userId}</Typography>
                  <Typography variant="subtitle2">Email: {email}</Typography>
                  <Typography variant="subtitle2">
                    Login: {displayName}
                  </Typography>
                </TextWrapper>
              );
            })}
        </AdminWrapper>
        <Paper elevation={2} sx={{ p: "20px", width: "100%" }}>
          <FormWrapper onSubmit={handleSubmit}>
            <Paper elevation={3} sx={{ p: "20px", width: "100%" }}>
              <Typography textAlign="center" color="#FFD700">
                Add Email or ID
              </Typography>
            </Paper>
            <InputsWrapper elevation={3}>
              <FormControl fullWidth>
                <InputLabel>Roles</InputLabel>
                <Select
                  value={selectAdmins}
                  label="Roles"
                  onChange={(e) => setSelectAdmins(e.target.value)}
                >
                  {adminsArr.map((el) => (
                    <MenuItem key={nanoid()} value={el}>
                      {el}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                sx={{ mt: 2 }}
                label="Email or ID"
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
  language: PropTypes.string.isRequired,
};
