import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { monthArr } from "./month.js";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation.js";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { selectLessonsLoading } from "../../redux/cleaningSlice.js";

SelectMonth.propTypes = {
  nameCollection: PropTypes.string.isRequired,
  locationMonth: PropTypes.string.isRequired,
};

export default function SelectMonth({ nameCollection, locationMonth }) {
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectLessonsLoading);
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 400, width: "100%", p: "10px" }}>
      <FormControl fullWidth disabled={isLoading}>
        <InputLabel>
          {language === "en" ? "Select a month" : "Виберіть місяць"}
        </InputLabel>
        <Select
          value={locationMonth}
          label={language === "en" ? "Select a month" : "Виберіть місяць"}
          onChange={(e) => {
            const newUrl = `/${nameCollection}/${dayjs(e.target.value).format(
              "YYYY-MM"
            )}`;

            navigate(newUrl, { replace: true });
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
