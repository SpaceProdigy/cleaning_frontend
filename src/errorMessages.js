const errors = async (lang, errorType) => {
  const errorMap = {
    ua: {
      notFound: "Ошибка: элемент не найден!",
      unauthorized: "Ошибка: доступ запрещён!",
      validation: "Ошибка: неверные данные!",
      server: "Ошибка сервера, попробуйте позже.",
      mEmpty: "Повідомлення не може бути порожнім!",
      maxLength: "Максимальна довжина",
    },
    en: {
      notFound: "Error: item not found!",
      unauthorized: "Error: unauthorized access!",
      validation: "Error: invalid data!",
      server: "Server error, please try again later.",
      mEmpty: "Message cannot be empty!",
      maxLength: "Max length",
    },
  };

  const selectedLanguage = errorMap[lang] || errorMap.en;

  const errorMessage =
    selectedLanguage[errorType] || lang === "en"
      ? "Unknown error!"
      : "Невідома помилка!";

  return new Promise((resolve) => resolve(errorMessage));
};

export const errorMessages = async (lang, errorType) => {
  const error = await errors(lang, errorType);
  return error;
};
