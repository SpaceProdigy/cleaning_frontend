import * as yup from "yup";

export const lessonsShema = (language) =>
  yup.object({
    location: yup
      .string()
      .required(
        language === "en" ? "Place is required" : "Необхідно вибрати місце"
      ),

    // time: yup
    //   .string()

    //   .required(
    //     language === "en" ? "Time is required" : "Необхідно вказати час"
    //   )
    //   .matches(
    //     /^[\d:-]+$/,
    //     language === "en" ? "Incorrect time" : "Неправильний час"
    //   ),
  });
