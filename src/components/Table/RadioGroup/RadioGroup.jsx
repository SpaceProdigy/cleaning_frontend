import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PropTypes from "prop-types";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { WrapperSelects } from "./RadioGroup.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDefaultLesson,
  setDefaultValueLesson,
} from "../../../redux/localOperation";

RowRadioButtonsGroup.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  setIsFilterTask: PropTypes.func.isRequired,
  isFilterTas: PropTypes.array.isRequired,
  uniqTaskList: PropTypes.object.isRequired,
  room: PropTypes.string.isRequired,
  setRoom: PropTypes.func.isRequired,
  uniqRoomList: PropTypes.array.isRequired,
  nameCollection: PropTypes.string.isRequired,
};

export default function RowRadioButtonsGroup({
  isLoading,
  language,
  setIsFilterTask,
  isFilterTas,
  uniqTaskList,
  room,
  setRoom,
  uniqRoomList,
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
      <WrapperSelects>
        <FormControl size="small" sx={{ width: "150px" }}>
          <InputLabel>{language === "en" ? "Task" : "Завдання"}</InputLabel>
          <Select
            multiple
            value={isFilterTas}
            label={language === "en" ? "Task" : "Завдання"}
            onChange={(e) => setIsFilterTask(e.target.value)}
          >
            <MenuItem value={""}>{language === "en" ? "All" : "Всі"}</MenuItem>
            {uniqTaskList[language]?.map((task, index) => (
              <MenuItem key={nanoid()} value={uniqTaskList.en[index]}>
                {task}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ width: "150px" }} disabled={isLoading}>
          <InputLabel>{language === "en" ? "Room" : "Кімната"}</InputLabel>
          <Select
            value={room}
            label={language === "en" ? "Room" : "Кімната"}
            onChange={(e) => setRoom(e.target.value)}
          >
            <MenuItem value={""}>
              {language === "en" ? "Reset" : "Скинути"}
            </MenuItem>
            {uniqRoomList?.length > 0 &&
              uniqRoomList?.map((roomNumber) => (
                <MenuItem key={nanoid()} value={String(roomNumber)}>
                  {language === "en" ? " Room" : " Кімната"} {roomNumber}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </WrapperSelects>
    </div>
  );
}
