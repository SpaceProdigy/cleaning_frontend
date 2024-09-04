import dayjs from "dayjs";
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

export const drawerTextKitchen = {
  en: "Kitchen cleaning schedule",
  ua: "Графік прибирання кухні",
};
export const drawerTextCorridor = {
  en: "Corridor cleaning schedule",
  ua: "Графік прибирання коридору",
};

export const buttonAuthText = [
  {
    text: {
      en: "Sign up",
      ua: "Реєстрація",
    },
    path: `${pathPages.signUp}`,
  },
  {
    text: {
      en: "Sign in",
      ua: "Увійти",
    },
    path: `${pathPages.signIn}`,
  },
];

export const buttonScheduleCorridorText = [
  {
    text: {
      en: "Blue corridor",
      ua: "Синій корідор",
    },
    path: `${pathPages.blueCorridor}/${dayjs().format("YYYY-MM")}`,
  },
  {
    text: {
      en: "Yellow corridor",
      ua: "Жовтий корідор",
    },
    path: `${pathPages.yellowCorridor}/${dayjs().format("YYYY-MM")}`,
  },
  {
    text: {
      en: "Red corridor",
      ua: "Червоний корідор",
    },
    path: `${pathPages.redCorridor}/${dayjs().format("YYYY-MM")}`,
  },
];

export const buttonScheduleKitchenText = [
  {
    text: {
      en: "Kitchen 3",
      ua: "Кухня 3",
    },
    path: `${pathPages.kitchen3}/${dayjs().format("YYYY-MM")}`,
  },
  {
    text: {
      en: "Kitchen 4",
      ua: "Кухня 4",
    },
    path: `${pathPages.kitchen4}/${dayjs().format("YYYY-MM")}`,
  },
  {
    text: {
      en: "Kitchen 5",
      ua: "Кухня 5",
    },
    path: `${pathPages.kitchen5}/${dayjs().format("YYYY-MM")}`,
  },
  {
    text: {
      en: "Kitchen 6",
      ua: "Кухня 6",
    },
    path: `${pathPages.kitchen6}/${dayjs().format("YYYY-MM")}`,
  },
];
