import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PropTypes from "prop-types";

RowRadioButtonsGroup.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  filterList: PropTypes.string.isRequired,
  setFilterList: PropTypes.func.isRequired,
};

export default function RowRadioButtonsGroup({
  filterList,
  isLoading,
  language,
  setFilterList,
}) {
  return (
    <FormControl>
      <FormLabel>
        {language === "en" ? "Show list" : "Показувати список"}
      </FormLabel>
      <RadioGroup
        row
        value={filterList}
        onChange={(e) => setFilterList(e.target.value)}
      >
        <FormControlLabel
          disabled={isLoading}
          value="Fully"
          control={<Radio />}
          label={language === "en" ? "Fully" : "Повністю"}
        />
        <FormControlLabel
          disabled={isLoading}
          value="Current week"
          control={<Radio />}
          label={language === "en" ? "Current week" : "Поточний тиждень"}
        />
        <FormControlLabel
          disabled={isLoading}
          value="Hide past dates"
          control={<Radio />}
          label={
            language === "en" ? "Hide past dates" : "Приховати минулі дати"
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
