export const maxSizeError = (language) => {
  return alert(
    (() => {
      switch (language) {
        case "en":
          return "The maximum file size must not exceed 5 MB.";
        case "ua":
          return "Максимальний розмір файлу не повинен перевищувати 5 МБ.";
        default:
          return "The maximum file size must not exceed 5 MB.";
      }
    })()
  );
};

export const maxFilesError = (language, maxFiles) => {
  return alert(
    (() => {
      switch (language) {
        case "en":
          return `You can only upload up to ${maxFiles} files.`;
        case "ua":
          return `Ви можете завантажити не більше ${maxFiles} файлів.`;
        default:
          return `You can only upload up to ${maxFiles} files.`;
      }
    })()
  );
};

export const chooseCorrectFile = (language) => {
  return alert(
    (() => {
      switch (language) {
        case "en":
          return "Please select an image (png, jpg, jpeg) or PDF file.";
        case "ua":
          return "Будь ласка, виберіть зображення (png, jpg, jpeg) або файл PDF.";

        default:
          return "Please select an image (png, jpg, jpeg) or PDF file.";
      }
    })()
  );
};
