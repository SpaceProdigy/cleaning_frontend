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

import { signUpSchema } from "../../../shemas/authShema";
import { useEffect, useState } from "react";
import { FormWrapper } from "./SignUp.styled";
import { registerThunk } from "../../../redux/authOparations";
import { useDispatch, useSelector } from "react-redux";
import { AlertComponent } from "../../../components/AlertComponent/AlertComponent";
import { selectLanguage } from "../../../redux/localOperation";
import { NavLink, useNavigate } from "react-router-dom";
import { selectAuthentificated } from "../../../redux/authSlice";

const SignUp = () => {
  const [actualStateInputs, setActualStateInputs] = useState(
    JSON.parse(localStorage.getItem("signup")) &&
      JSON.parse(localStorage.getItem("signup"))
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
    resolver: yupResolver(signUpSchema),
    mode: "onBlur",
    defaultValues: actualStateInputs ?? { login: "", email: "", password: "" },
  });

  const onSubmit = async (data) => {
    await dispatch(registerThunk(data));

    reset();
    setActualStateInputs(null);
    localStorage.removeItem("signup");
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("signup")) || actualStateInputs) {
      localStorage.setItem("signup", JSON.stringify(actualStateInputs));
    }
  }, [actualStateInputs]);

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          {language === "en" ? "Sign up" : "Зареєструватися"}
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <InputLabel variant="outlined">
            {language === "en" ? "Login" : "Логін"}
          </InputLabel>
          <OutlinedInput
            label={language === "en" ? "Login" : "Логін"}
            placeholder={
              language === "en"
                ? "Enter your login or email"
                : "Введіть свій логін або email"
            }
            onInput={(e) =>
              setActualStateInputs((prevState) => {
                return { ...prevState, login: e.target.value };
              })
            }
            {...register("login")}
          />
          <FormHelperText sx={{ minHeight: 50 }} error>
            {errors.login?.message[language]}
          </FormHelperText>
        </FormControl>

        <FormControl variant="outlined" fullWidth>
          <InputLabel variant="outlined">
            {language === "en" ? "Email" : "Електронна пошта"}
          </InputLabel>
          <OutlinedInput
            label={language === "en" ? "Email" : "Електронна пошта"}
            type="email"
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

        <Box m={1} textAlign="center">
          {language === "en" ? (
            <Typography variant="caption">
              Already registered to{" "}
              <NavLink to={"/signin"} style={{ textDecoration: "none" }}>
                {" "}
                <Typography component="span" variant="caption" color="#3498db">
                  {" "}
                  sign in
                </Typography>
              </NavLink>
              .
            </Typography>
          ) : (
            <Typography variant="caption">
              Вже зареєстрований
              <NavLink to={"/signin"} style={{ textDecoration: "none" }}>
                {" "}
                <Typography component="span" variant="caption" color="#3498db">
                  {" "}
                  увійти{" "}
                </Typography>
              </NavLink>
              в обліковий запис.
            </Typography>
          )}
        </Box>
      </FormWrapper>
      <AlertComponent />
    </>
  );
};

export default SignUp;
