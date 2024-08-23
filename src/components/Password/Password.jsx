import { Box, IconButton, Modal, Typography, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef, useState } from "react";
import {
  NumberBox,
  StyledInput,
  StyledLink,
  Wrapper,
  WrapperBack,
  WrapperClose,
  WrapperNumberBox,
} from "./Password.styled";
import { motion } from "framer-motion";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";

import PropTypes from "prop-types";

export const Password = ({
  passwordKey,
  sessionKey,
  buttonBack = false,
  closeClickInside = false,
  openWithInitilizat = false,
  openModal = false,
  setOpenModal = false,
  buttonClose = false,
}) => {
  const language = useSelector(selectLanguage);
  const [open, setOpen] = useState(
    openWithInitilizat ?? !sessionStorage.getItem(sessionKey)
  );
  const [isFocus, setIsFocus] = useState(null);
  const refInput = useRef({ 1: "", 2: "", 3: "", 4: "" });
  const [password, setPassword] = useState({ 1: "", 2: "", 3: "", 4: "" });
  const key = Object.values(password).join("");

  const theme = useTheme();

  const handleClose = () => setOpen(false);
  const keyError = key.length === 4 && passwordKey !== key;
  const keySuccess = passwordKey === key;

  const { state } = useLocation();

  useEffect(() => {
    if (keySuccess) {
      sessionStorage.setItem(sessionKey, "access");

      setTimeout(() => {
        if (setOpenModal) {
          setOpenModal(false);
        }
        handleClose();
      }, 500);
    }
  }, [keySuccess, sessionKey, setOpenModal]);

  useEffect(() => {
    if (key.length === 4) {
      refInput.current[isFocus].blur();
    }
  }, [isFocus, key.length]);

  const handleChange = (event, item) => {
    const value = event.target.value;
    const inputValue = value.replace(/\D/g, "");

    setPassword(() => {
      return { ...password, [event.target.id]: inputValue.slice(0, 1) };
    });

    if (!isNaN(value) && value !== "") {
      if (item === 4) {
        refInput.current[1].focus();
        return;
      }
      refInput.current[item + 1].focus();
    }
  };

  const handleKeyDown = (e, item) => {
    if (e.keyCode === 39) {
      if (item === 4) {
        return refInput.current[1].focus();
      }
      refInput.current[item + 1].focus();
    }
    if (e.keyCode === 37) {
      if (item === 1) {
        return refInput.current[4].focus();
      }
      refInput.current[item - 1].focus();
      refInput.current[item - 1];
    }

    if (e.keyCode === 8) {
      if (key.length === 0) {
        refInput.current[item].blur();
      }
      e.preventDefault();

      if (item === 1) {
        setPassword((prevPassword) => ({
          ...prevPassword,
          [item]: "",
        }));
        refInput.current[4].focus();
        return;
      }
      refInput.current[item - 1].focus();
      setPassword((prevPassword) => ({
        ...prevPassword,
        [item]: "",
      }));
    }
  };

  const borderNumber = (item) => {
    if (key === passwordKey) {
      return theme?.palette?.success?.main;
    }
    if (key.length === 4 && passwordKey !== key) {
      return theme?.palette?.error?.main;
    }

    if (password[item]) {
      return theme?.palette?.info?.main;
    }
    return theme?.palette?.text?.primary;
  };
  return (
    <>
      <Modal
        open={openModal ? openModal : open}
        onClose={() => {
          if (closeClickInside) {
            setOpen(false);
          }
          if (setOpenModal) {
            setOpenModal(false);
          }
        }}
      >
        <Wrapper>
          {buttonBack && (
            <WrapperBack>
              <StyledLink to={state ?? "/"}>
                <IconButton>
                  <ArrowBackIcon />
                </IconButton>
              </StyledLink>
            </WrapperBack>
          )}
          {buttonClose && (
            <WrapperClose>
              <IconButton
                onClick={() => {
                  if (setOpenModal) {
                    setOpenModal(false);
                  } else {
                    setOpen(false);
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
            </WrapperClose>
          )}

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2">
              {language === "en" ? "Enter password" : "Введіть пароль"}
            </Typography>

            <Box sx={{ position: "relative", width: 200, height: 50 }}>
              <WrapperNumberBox
                error={keyError ? "+" : ""}
                success={keySuccess ? "+" : ""}
              >
                {[1, 2, 3, 4].map((item, index) => (
                  <NumberBox
                    key={index}
                    tab={Number(item) <= Number(password[item]) ? "+" : ""}
                    borderColor={borderNumber(item)}
                  >
                    <StyledInput
                      ref={(el) => {
                        refInput.current[item] = el;
                      }}
                      id={item}
                      onChange={(e) => handleChange(e, item)}
                      value={password[item]}
                      autoComplete="off"
                      autoFocus={item === 1}
                      onKeyDown={(e) => handleKeyDown(e, item)}
                      onFocus={() => setIsFocus(item)}
                      type="tel"
                    />
                  </NumberBox>
                ))}
              </WrapperNumberBox>
            </Box>

            <motion.div
              animate={{ opacity: keyError || keySuccess ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ height: 50, width: "100%" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={0}
                color={
                  keyError
                    ? theme.palette.error.main
                    : theme.palette.success.main
                }
              >
                {keyError &&
                  (language === "en" ? (
                    <>
                      <Typography
                        variant="subtitle2"
                        component="span"
                        textAlign="center"
                      >
                        The password is incorrect,
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        component="span"
                        textAlign="center"
                      >
                        please try again
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography
                        variant="subtitle2"
                        component="span"
                        textAlign="center"
                      >
                        Пароль невірний,
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        component="span"
                        textAlign="center"
                      >
                        спробуйте ще раз
                      </Typography>
                    </>
                  ))}
                <Typography variant="h6" component="span" textAlign="center">
                  {keySuccess && (language === "en" ? "Success" : "Yспіх")}
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Wrapper>
      </Modal>
    </>
  );
};

Password.propTypes = {
  passwordKey: PropTypes.string.isRequired,
  sessionKey: PropTypes.string.isRequired,
  buttonBack: PropTypes.bool,
  closeClickInside: PropTypes.bool,
  openWithInitilizat: PropTypes.bool,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  buttonClose: PropTypes.bool,
};
