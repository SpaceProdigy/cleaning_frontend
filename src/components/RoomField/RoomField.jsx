import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import { useEffect } from "react";
RoomField.propTypes = {
  setValueRoom: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  errorRoom: PropTypes.string,
  setErrorRoom: PropTypes.func,
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf([null]),
  ]),
  valueRoom: PropTypes.string,
  valueSelect: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    .isRequired,
  corridorRange: PropTypes.object,
};

export default function RoomField({
  setValueRoom,
  setErrorRoom,
  errorRoom,
  isEdit,
  isChooseALesson,
}) {
  useEffect(() => {
    if (isEdit?.edit && isChooseALesson?.roomNumber) {
      setValueRoom(isChooseALesson.roomNumber);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const language = useSelector(selectLanguage);

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl sx={{ width: "100%", maxWidth: 400 }}>
        <InputLabel>{language === "ua" ? "Кімната" : "Room"}</InputLabel>
        <OutlinedInput
          onChange={(e) => {
            const text = e.target.value;

            if (text.length > 20) {
              setErrorRoom(
                language === "en" ? `Max 20 characters` : `Максимум 20 символів`
              );
            } else {
              setErrorRoom("");
            }

            setValueRoom(text);
          }}
          label={language === "en" ? "Room" : "Кімната"}
        />
        <FormHelperText sx={{ height: 30, ml: 0 }} error>
          {errorRoom}
        </FormHelperText>
      </FormControl>
    </Box>
  );
}
