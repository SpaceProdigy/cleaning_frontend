import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PropTypes from "prop-types";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { WrapperSelects } from "./RadioGroup.styled";

RowRadioButtonsGroup.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  filterList: PropTypes.string.isRequired,
  setFilterList: PropTypes.func.isRequired,
  setIsFilterTask: PropTypes.func.isRequired,
  isFilterTas: PropTypes.string.isRequired,
  uniqTaskList: PropTypes.object.isRequired,
  room: PropTypes.string.isRequired,
  setRoom: PropTypes.func.isRequired,
  uniqRoomList: PropTypes.array.isRequired,
};

export default function RowRadioButtonsGroup({
  filterList,
  isLoading,
  language,
  setFilterList,
  setIsFilterTask,
  isFilterTas,
  uniqTaskList,
  room,
  setRoom,
  uniqRoomList,
}) {
  return (
    <div>
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
      <WrapperSelects>
        <FormControl size="small" sx={{ width: "150px" }}>
          <InputLabel>{language === "en" ? "Task" : "Завдання"}</InputLabel>
          <Select
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
