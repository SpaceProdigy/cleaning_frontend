import { Button, IconButton, Modal } from "@mui/material";
import BasicDatePicker from "../../../components/DatePicker/DatePicker";

import { selectLanguage } from "../../../redux/localOperation";
import { useSelector } from "react-redux";
import { Wrapper, WrapperClose } from "./ModalAddLesson.styled";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import SelectTask from "../../../components/SelectTask/SelectTask";
import RoomField from "../../../components/RoomField/RoomField";

ModalAddLesson.propTypes = {
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  setIsChooseALesson: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf([null]),
  ]),
  setOpen: PropTypes.func,
  dispatch: PropTypes.func,
  onSubmit: PropTypes.func,
  valueSelect: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    .isRequired,
  open: PropTypes.bool,
  setValueSelect: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.object,
  selectError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  setSelectError: PropTypes.func,
  setValueRoom: PropTypes.func,
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  errorRoom: PropTypes.string,
  setErrorRoom: PropTypes.func,
  valueRoom: PropTypes.number,
  taskList: PropTypes.array.isRequired,
  setErrorDate: PropTypes.func,
  errorDate: PropTypes.bool,
  setValueDate: PropTypes.func,
  corridorRange: PropTypes.object,
};

export default function ModalAddLesson({
  open,
  setOpen,
  onSubmit,
  isEdit,
  isChooseALesson,
  valueSelect,
  setValueSelect,
  selectError,
  setSelectError,
  setValueRoom,
  errorRoom,
  setErrorRoom,
  isDay,
  valueRoom,
  errorDate,
  setErrorDate,
  setValueDate,
  corridorRange,
  taskList,
}) {
  const language = useSelector(selectLanguage);

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
        setErrorDate(false);
      }}
    >
      <Wrapper>
        <WrapperClose>
          <IconButton
            onClick={() => {
              setOpen(false);
              setErrorDate(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </WrapperClose>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 400,
          }}
          onSubmit={(e) => onSubmit(e)}
        >
          <SelectTask
            isEdit={isEdit}
            isChooseALesson={isChooseALesson}
            valueSelect={valueSelect}
            setValueSelect={setValueSelect}
            selectError={selectError}
            setSelectError={setSelectError}
            taskList={taskList}
          />

          {!isEdit?.edit && (
            <BasicDatePicker
              errorDate={errorDate}
              setErrorDate={setErrorDate}
              setValueDate={setValueDate}
              isDay={isDay}
            />
          )}

          <RoomField
            isEdit={isEdit}
            setValueRoom={setValueRoom}
            errorRoom={errorRoom}
            setErrorRoom={setErrorRoom}
            isChooseALesson={isChooseALesson}
            isDay={isDay}
            valueRoom={valueRoom}
            valueSelect={valueSelect}
            corridorRange={corridorRange}
          />

          <Button type="submit" variant="contained" fullWidth size="large">
            {language === "en" ? "Submit" : "Надіслати"}
          </Button>
        </form>
      </Wrapper>
    </Modal>
  );
}
