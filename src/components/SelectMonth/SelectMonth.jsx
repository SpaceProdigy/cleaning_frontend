import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { monthArr } from "./month.js";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation.js";
import dayjs from "dayjs";
SelectMonth.propTypes = {
  setSelectMonthCalendar: PropTypes.func,
  selectMonthCalendar: PropTypes.object,
};

export default function SelectMonth({
  setSelectMonthCalendar,
  selectMonthCalendar,
}) {
  const language = useSelector(selectLanguage);

  return (
    <Box sx={{ maxWidth: 400, width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel>
          {language === "en" ? "Select a month" : "Виберіть місяць"}
        </InputLabel>
        <Select
          value={dayjs(selectMonthCalendar).format("YYYY-MM")}
          label={language === "en" ? "Select a month" : "Виберіть місяць"}
          onChange={(e) => {
            console.log(e.target.value);

            setSelectMonthCalendar(dayjs(e.target.value));
          }}
        >
          {monthArr(language).map((month, index) => (
            <MenuItem
              key={month}
              value={`${new Date().getFullYear()}-${
                index + 1 < 10 ? `0${index + 1}` : index + 1
              }`}
            >
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
