import CloseIcon from "@mui/icons-material/Close";

import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";
import { deleteScheduleByIdThunk } from "../../../redux/cleaningOperations";
import { Wrapper, WrapperClose } from "./ModalDelete.stylled";
import PropTypes from "prop-types";

ModalDelete.propTypes = {
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  setIsChooseALesson: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf([null]),
  ]),
  dispatch: PropTypes.func,
  nameCollection: PropTypes.string.isRequired,
};

export default function ModalDelete({
  isDeleteModal,
  setIsDeleteModal,
  isChooseALesson,
  setIsChooseALesson,
  dispatch,
  nameCollection,
}) {
  const language = useSelector(selectLanguage);
  return (
    <Modal
      open={isDeleteModal}
      onClose={() => {
        setIsDeleteModal(false);
      }}
    >
      <Wrapper>
        <WrapperClose>
          <IconButton
            onClick={() => {
              setIsDeleteModal(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </WrapperClose>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="20px"
        >
          {isChooseALesson && (
            <Typography
              variant="subtitle2"
              textAlign="center"
              sx={(theme) => ({ color: theme.palette.warning.main })}
            >{`${isChooseALesson.date} ${
              language === "en" ? "Room:" : "Кімната:"
            } ${isChooseALesson.roomNumber} ${
              language === "en" ? "Task:" : "Задача:"
            } ${isChooseALesson.task[language]}`}</Typography>
          )}

          <Typography
            variant="subtitle2"
            textAlign="center"
            sx={(theme) => ({ color: theme.palette.error.main })}
          >
            {language === "en"
              ? "Warning: If you delete this cleanup, it cannot be restored."
              : "Попередження: якщо ви видалите це прибирання, його не можна буде відновити."}
          </Typography>
          <Box display="flex" gap="20px">
            <Button onClick={() => setIsDeleteModal(false)}>
              {language === "en" ? "Close" : "Закрити"}
            </Button>
            <Button
              onClick={() => {
                dispatch(
                  deleteScheduleByIdThunk({
                    nameCollection,
                    id: isChooseALesson._id,
                    language,
                  })
                );
                setIsChooseALesson(null);
                setIsDeleteModal(false);
              }}
            >
              {language === "en" ? "Delete" : "Видалити"}
            </Button>
          </Box>
        </Box>
      </Wrapper>
    </Modal>
  );
}
