import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required({
      en: "Email is required",
      ua: "Пошта обов'язкова до введення",
    })
    .matches(/^[a-zA-Z\d._@-]+$/, {
      message: {
        en: "Email must contain only Latin characters, digits, and special symbols (-, _, @, .)",
        ua: "Пошта повинна містити тільки латинські символи, цифри та спеціальні символи (-, _, @, .)",
      },
    })
    .email({
      en: "Invalid email format",
      ua: "Неправильний формат електронної пошти",
    })
    .min(5, {
      en: "Email must be at least 5 characters long",
      ua: "Пошта повинна містити принаймні 5 символів",
    })
    .max(100, {
      en: "Email must be at max 100 characters long",
      ua: "Пошта не може містити більше 100 символів",
    }),
  password: yup
    .string()
    .trim()
    .required({
      en: "Password is required",
      ua: "Пароль обов'язковий до введення",
    })
    .min(6, {
      en: "Password must be at least 6 characters long",
      ua: "Пароль повинен містити принаймні 6 символів",
    })
    .max(100, {
      en: "Password must be at max 100 characters long",
      ua: "Пароль не може містити більше 100 символів",
    })
    .matches(/^(?=.*[a-zA-Z\d])(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/, {
      message: {
        en: "Password must contain only Latin characters, digits, and special symbols (@, $, !, %, *, ?, &)",
        ua: "Пароль повинен містити тільки латинські символи, цифри та спеціальні символи (@, $, !, %, *, ?, &)",
      },
    })
    .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/, {
      message: {
        en: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        ua: "Пароль повинен містити принаймні одну велику літеру, одну маленьку літеру, одну цифру та один спеціальний символ",
      },
    }),
});

export const signUpSchema = yup.object({
  login: yup
    .string()
    .trim()
    .required({
      en: "Login is required",
      ua: "Логін обов'язковий",
    })
    .matches(/^[a-zA-Z0-9\-_.@]+$/, {
      message: {
        en: "Login must contain only Latin characters and special symbols (-, _, ., @)",
        ua: "Логін має містити лише латинські символи та спеціальні символи (-, _, ., @)",
      },
    })
    .min(2, {
      en: "Login must be at least 5 characters long",
      ua: "Логін повинен містити принаймні 5 символів",
    })
    .max(100, {
      en: "Login must be at max 100 characters long",
      ua: "Логін може містити максимум 100 символів",
    }),
  password: yup
    .string()
    .trim()
    .required({
      en: "Password is required",
      ua: "Пароль обов'язковий",
    })
    .min(6, {
      en: "Password must be at least 6 characters long",
      ua: "Пароль повинен містити принаймні 6 символів",
    })
    .max(100, {
      en: "Password must be at max 100 characters long",
      ua: "Пароль може містити максимум 100 символів",
    })
    .matches(/^[a-zA-Z\d@$!%*?&]+$/, {
      message: {
        en: "Password must contain only Latin characters, digits, and special symbols (@, $, !, %, *, ?, &)",
        ua: "Пароль має містити лише латинські символи, цифри та спеціальні символи (@, $, !, %, *, ?, &)",
      },
    })
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      {
        message: {
          en: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          ua: "Пароль повинен містити принаймні одну велику літеру, одну маленьку літеру, одну цифру та один спеціальний символ",
        },
      }
    ),
  email: yup
    .string()
    .trim()
    .required({
      en: "Email is required",
      ua: "Електронна пошта обов'язкова",
    })
    .matches(/^[a-zA-Z\d._@-]+$/, {
      message: {
        en: "Email must contain only Latin characters, digits, and special symbols (-, _, @, .)",
        ua: "Електронна пошта має містити лише латинські символи, цифри та спеціальні символи (-, _, @, .)",
      },
    })
    .email({
      en: "Invalid email format",
      ua: "Невірний формат електронної пошти",
    })
    .min(5, {
      en: "Email must be at least 5 characters long",
      ua: "Електронна пошта повинна містити принаймні 5 символів",
    })
    .max(100, {
      en: "Email must be at max 100 characters long",
      ua: "Електронна пошта може містити максимум 100 символів",
    }),
});
