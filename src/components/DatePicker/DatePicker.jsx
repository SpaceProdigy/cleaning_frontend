import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/uk";
import { ukUA, enUS } from "@mui/x-date-pickers/locales";

import { useEffect, useState } from "react";

import { Box, FormHelperText } from "@mui/material";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";

BasicDatePicker.propTypes = {
  setErrorDate: PropTypes.func,
  errorDate: PropTypes.bool,
  setValueDate: PropTypes.func,
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
};

export default function BasicDatePicker({
  errorDate,
  setErrorDate,
  setValueDate,
  isDay,
}) {
  const [isDate, setIsDate] = useState(
    isDay
      ? dayjs(isDay).format("YYYY-MM-DD")
      : dayjs(new Date()).format("YYYY-MM-DD")
  );

  const [isPast, setIsPast] = useState(null);
  const language = useSelector(selectLanguage);
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  const yearsIsCorrect = datePattern.test(isDate);

  useEffect(() => {
    setValueDate(isDate);
  }, [isDate, setValueDate]);

  useEffect(() => {
    if (
      isDate === "" ||
      isDate === "Invalid Date" ||
      !yearsIsCorrect ||
      isPast
    ) {
      setErrorDate(true);
    } else {
      setErrorDate(false);
    }
  }, [isDate, isPast, setErrorDate, yearsIsCorrect]);

  const errorFnc = () => {
    if (errorDate) {
      if (!yearsIsCorrect) {
        return language === "en" ? "Incorrect date" : "Неправильна дата";
      }
      if (isDate === "") {
        return language === "en"
          ? "Date is required"
          : "Необхідно вказати дату";
      }
      if (isPast) {
        return language === "en"
          ? "You cannot enter a past date"
          : "Не можна вводити минулу дату";
      }
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={
          language === "ua"
            ? ukUA.components.MuiLocalizationProvider.defaultProps.localeText
            : enUS.components.MuiLocalizationProvider.defaultProps.localeText
        }
        adapterLocale={language === "ua" ? "uk" : "en"}
      >
        <DatePicker
          sx={{ width: "100%" }}
          label={language === "en" ? "Select a date" : "Виберіть дату"}
          disablePast={true}
          defaultValue={dayjs(isDay ?? new Date())}
          format="YYYY-MM-DD"
          onChange={(e) => setIsDate(dayjs(e.$d).format("YYYY-MM-DD"))}
          onError={(e) => setIsPast(e)}
        />
        <FormHelperText
          sx={{
            height: 30,
            overflow: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "thin",
          }}
          error
        >
          {errorFnc()}
        </FormHelperText>
      </LocalizationProvider>
    </Box>
  );
}
