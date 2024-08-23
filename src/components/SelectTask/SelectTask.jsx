import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import { useEffect } from "react";

SelectTask.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf([null]),
  ]),
  taskList: PropTypes.array.isRequired,
  valueSelect: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    .isRequired,
  setValueSelect: PropTypes.func,
  selectError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  setSelectError: PropTypes.func,
};

export default function SelectTask({
  valueSelect,
  setValueSelect,
  selectError,
  setSelectError,
  isEdit,
  isChooseALesson,
  taskList,
}) {
  const language = useSelector(selectLanguage);

  useEffect(() => {
    if (isEdit?.edit && isChooseALesson?.roomNumber) {
      setValueSelect(isChooseALesson.task.id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (valueSelect === "" || !valueSelect) {
      setSelectError(
        language === "en" ? "Task is required" : "Необхідно вказати задачу"
      );
    } else {
      setSelectError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectError, valueSelect]);

  return (
    <FormControl sx={{ width: "100%", maxWidth: 400 }}>
      <InputLabel>
        {language === "en" ? "Choose a task" : "Виберіть задачу"}
      </InputLabel>
      <Select
        label={language === "en" ? "Choose a task" : "Виберіть задачу"}
        value={valueSelect}
        onChange={(e) => setValueSelect(e.target.value)}
      >
        {taskList.map((task, index) => (
          <MenuItem key={index} value={task.id}>
            {task[language]}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{ height: 30, ml: 0 }} error>
        {selectError}
      </FormHelperText>
    </FormControl>
  );
}
