const notification = ({ language, notifyType, nameCollection }) => {
  const notificationMap = {
    ua: {
      alreadySentToGroup: `Сьогодні вже надіслано нагадування для групи ${nameCollection}.`,
      sentToGroup: `Сповіщення надіслано до групи ${nameCollection}.`,
      validation: "Ошибка: неверные данные!",
      server: "Ошибка сервера, попробуйте позже.",
      mEmpty: "Повідомлення не може бути порожнім!",
      maxLength: "Максимальна довжина",
    },
    en: {
      alreadySentToGroup: `A reminder has already been sent for the group ${nameCollection} today.`,
      sentToGroup: `Notification sent to group ${nameCollection}.`,
      validation: "Error: invalid data!",
      server: "Server error, please try again later.",
      mEmpty: "Message cannot be empty!",
      maxLength: "Max length",
    },
  };

  const selectedLanguage = notificationMap[language] || notificationMap.en;

  const notifyMessage =
    selectedLanguage[notifyType] ||
    (language === "en" ? "Unknown error!" : "Невідома помилка!");

  return notifyMessage;
};

export const notifyMessages = ({ language, notifyType, nameCollection }) => {
  const error = notification({ language, notifyType, nameCollection });
  return error;
};
