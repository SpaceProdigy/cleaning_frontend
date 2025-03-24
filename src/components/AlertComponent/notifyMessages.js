export const notificationMapObj = {
  alreadySentToGroup: "alreadySentToGroup",
  sentToGroup: `sentToGroup`,
  validation: "validation",
  server: "server",
  mEmpty: "mEmpty",
  maxLength: "maxLength",
  upLoadURLNotFound: "upLoadURLNotFound",
  postSuccessfullyCreated: "postSuccessfullyCreated",
  maxSize: "maxSize",
};

const notification = ({ language, notifyType, nameCollection, extraText }) => {
  const notificationMap = {
    ua: {
      alreadySentToGroup: `Сьогодні вже надіслано нагадування для групи ${nameCollection}.`,
      sentToGroup: `Сповіщення надіслано до групи ${nameCollection}.`,
      validation: "Ошибка: неверные данные!",
      server: "Ошибка сервера, попробуйте позже.",
      mEmpty: "Повідомлення не може бути порожнім!",
      maxLength: "Максимальна довжина",
      upLoadURLNotFound: "URL не знайдено у відповіді сервера!",
      postSuccessfullyCreated: "Пост успішно створено",
      maxSize: `Максимальний розмір файлу ${extraText}`,
    },
    en: {
      alreadySentToGroup: `A reminder has already been sent for the group ${nameCollection} today.`,
      sentToGroup: `Notification sent to group ${nameCollection}.`,
      validation: "Error: invalid data!",
      server: "Server error, please try again later.",
      mEmpty: "Message cannot be empty!",
      maxLength: "Max length",
      upLoadURLNotFound: "URL not found in server response!",
      postSuccessfullyCreated: "Post successfully created",
      maxSize: `Мaximum file size ${extraText}`,
    },
  };

  const selectedLanguage = notificationMap[language] || notificationMap.en;

  const notifyMessage =
    selectedLanguage[notifyType] ||
    (language === "en" ? "Unknown error!" : "Невідома помилка!");

  return notifyMessage;
};

export const notifyMessages = ({
  language,
  notifyType,
  nameCollection = "",
  extraText = "",
}) => {
  const error = notification({
    language,
    notifyType,
    nameCollection,
    extraText,
  });
  return error;
};
