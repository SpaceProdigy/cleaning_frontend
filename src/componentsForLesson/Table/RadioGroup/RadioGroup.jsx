import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDefaultLesson,
  setDefaultValueLesson,
} from "../../../redux/localOperation";

RowRadioButtonsGroup.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  nameCollection: PropTypes.string.isRequired,
};

export default function RowRadioButtonsGroup({
  isLoading,
  language,
  nameCollection,
}) {
  const dispatch = useDispatch();
  const localFilter = useSelector(selectDefaultLesson);

  return (
    <div>
      <FormControl>
        <FormLabel>
          {language === "en" ? "Show list" : "Показувати список"}
        </FormLabel>
        <RadioGroup
          row
          value={
            localFilter["filter" + nameCollection]
              ? localFilter["filter" + nameCollection]
              : "Fully"
          }
          onChange={(e) =>
            dispatch(
              setDefaultValueLesson({
                ["filter" + nameCollection]: e.target.value,
              })
            )
          }
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
    </div>
  );
}
