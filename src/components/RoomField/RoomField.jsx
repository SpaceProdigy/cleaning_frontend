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
  valueRoom: PropTypes.number,
  valueSelect: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    .isRequired,
  corridorRange: PropTypes.object,
};

export default function RoomField({
  setValueRoom,
  setErrorRoom,
  corridorRange,
  errorRoom,
  isEdit,
  isChooseALesson,
  valueRoom,
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
        <InputLabel>{language === "en" ? "Room" : "Кімната"}</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={valueRoom}
          onChange={(e) => {
            let onlyNumbers = e.target.value.replace(/\D/g, "");
            if (onlyNumbers.length > 3) {
              onlyNumbers = onlyNumbers.slice(0, 3);
            }

            const numericValue = Number(onlyNumbers);

            if (
              numericValue < corridorRange.min ||
              numericValue > corridorRange.max
            ) {
              setErrorRoom(
                language === "en"
                  ? `Range of rooms ${corridorRange.min}-${corridorRange.max}`
                  : `Діапазон кімнат ${corridorRange.min}-${corridorRange.max}`
              );
            } else {
              setErrorRoom("");
            }
            setValueRoom(numericValue);
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
