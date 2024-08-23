import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { FormWrapper } from "./SignIn.styled";
import { useEffect, useState } from "react";
import { loginSchema } from "../../../shemas/authShema";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../../redux/authOparations";
import { AlertComponent } from "../../../components/AlertComponent/AlertComponent";
import { selectLanguage } from "../../../redux/localOperation";
import { NavLink, useNavigate } from "react-router-dom";
import { selectAuthentificated } from "../../../redux/authSlice";

const SignIn = () => {
  const [actualStateInputs, setActualStateInputs] = useState(
    JSON.parse(localStorage.getItem("signin")) &&
      JSON.parse(localStorage.getItem("signin"))
  );

  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);
  const navigate = useNavigate();
  useEffect(() => {
    if (authentificated) {
      navigate("/");
    }
  }, [authentificated, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
    defaultValues: actualStateInputs && actualStateInputs,
  });

  const onSubmit = async (data) => {
    await dispatch(loginThunk(data));
    reset();
    setActualStateInputs();
    localStorage.removeItem("signin");
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("signin")) || actualStateInputs) {
      localStorage.setItem("signin", JSON.stringify(actualStateInputs));
    }
  }, [actualStateInputs]);

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          {language === "en" ? "Sign in" : "Увійти"}
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <InputLabel variant="outlined">
            {language === "en" ? "Email" : "Електронна пошта"}
          </InputLabel>
          <OutlinedInput
            label={language === "en" ? "Email" : "Електронна пошта"}
            placeholder={
              language === "en"
                ? "Enter your email"
                : "Введіть свою електронну адресу"
            }
            onInput={(e) =>
              setActualStateInputs((prevState) => {
                return { ...prevState, email: e.target.value };
              })
            }
            {...register("email")}
          />
          <FormHelperText sx={{ minHeight: 50 }} error>
            {errors.email?.message[language]}
          </FormHelperText>
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel variant="outlined">
            {language === "en" ? "Password" : "Пароль"}
          </InputLabel>
          <OutlinedInput
            label={language === "en" ? "Password" : "Пароль"}
            type="password"
            placeholder={
              language === "en" ? "Enter your password" : "Введіть ваш пароль"
            }
            {...register("password")}
          />

          <FormHelperText sx={{ minHeight: 40 }} error>
            {errors.password?.message[language]}
          </FormHelperText>
        </FormControl>
        <Button type="submit" variant="contained" fullWidth size="large">
          {language === "en" ? "Submit" : "Надіслати"}
        </Button>
      </FormWrapper>
      <Box m={1} textAlign="center">
        {language === "en" ? (
          <Typography variant="caption">
            I don&apos;t have an account.
            <NavLink to={"/signup"} style={{ textDecoration: "none" }}>
              <Typography component="span" variant="caption" color="#3498db">
                {" "}
                Sign up
              </Typography>
            </NavLink>
            .
          </Typography>
        ) : (
          <Typography variant="caption">
            У мене немає облікового запису.
            <NavLink to={"/signup"} style={{ textDecoration: "none" }}>
              {" "}
              <Typography component="span" variant="caption" color="#3498db">
                {" "}
                Зареєструватися
              </Typography>
            </NavLink>
            .
          </Typography>
        )}
      </Box>
      <AlertComponent />
    </>
  );
};

export default SignIn;
