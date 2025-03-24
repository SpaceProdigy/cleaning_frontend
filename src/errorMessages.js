const errors = ({ lang, errorType, length = "" }) => {
  const errorMap = {
    ua: {
      minimumThatUpload:
        "Мінімум, який потрібно додати для завантаження, — 5 символів.",
      mEmpty: "Повідомлення не може бути порожнім!",
      maxLength: `Максимальна довжина ${length}`,
      minLength: `Мінемальна довжина ${length}`,
      required: "Це поле є обов'язковим",
      invalidUrl: "Вставте дійсне посилання",
    },
    en: {
      minimumThatUpload:
        "The minimum that you need to add to upload is 5 characters.",
      mEmpty: "Message cannot be empty!",
      maxLength: `Max length ${length}`,
      minLength: `Min length ${length}`,
      required: "This field is required",
      invalidUrl: "Insert a valid link",
    },
  };

  const selectedLanguage = errorMap[lang.toLowerCase()] || errorMap.en;
  const errorMessage = selectedLanguage[errorType]
    ? selectedLanguage[errorType]
    : lang === "en"
    ? "Unknown error!"
    : "Невідома помилка!";

  return errorMessage; // Прямой возврат
};

export const errorMessages = ({ lang, errorType, length }) => {
  return errors({ lang, errorType: errorType.trim(), length });
};
