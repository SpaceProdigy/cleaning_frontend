import { pathPages } from "./pathPages";

export const buttonText = [
  {
    text: {
      en: "Home",
      ua: "Головна",
    },
    path: "/",
  },
];

export const buttonAuthText = [
  {
    text: {
      en: "Sign up",
      ua: "Реєстрація",
    },
    path: "/signup",
  },
  {
    text: {
      en: "Sign in",
      ua: "Увійти",
    },
    path: "/signin",
  },
];

export const buttonScheduleText = [
  {
    text: {
      en: "Blue corridor",
      ua: "Синій корідор",
    },
    path: `${pathPages.blueCorridor}`,
  },
  {
    text: {
      en: "Kitchen 4",
      ua: "Кухня 4",
    },
    path: `${pathPages.kitchen4}`,
  },
];
