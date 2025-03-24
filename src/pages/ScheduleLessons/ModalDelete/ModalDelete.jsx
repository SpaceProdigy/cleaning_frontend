import CloseIcon from "@mui/icons-material/Close";

import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";
import { Wrapper, WrapperClose } from "./ModalDelete.stylled";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { deleteLessonByIdThunk } from "../../../redux/lessonsOperations";

ModalDelete.propTypes = {
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  deleteItem: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  nameCollection: PropTypes.string.isRequired,
  setDeleteItem: PropTypes.func.isRequired,
};

export default function ModalDelete({
  isDeleteModal,
  setIsDeleteModal,
  deleteItem,
  dispatch,
  nameCollection,
  setDeleteItem,
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
          {deleteItem && (
            <Typography
              variant="subtitle2"
              textAlign="center"
              sx={(theme) => ({ color: theme.palette.warning.main })}
            >
              {`${dayjs(deleteItem.date).format("DD.MM.YYYY")} ${
                language === "ua" ? "Локація:" : "Location:"
              } ${deleteItem.place}, ${language === "ua" ? "Час: " : "Time: "}
            ${dayjs(deleteItem.startTime).format("HH:mm")}:   ${dayjs(
                deleteItem.endTime
              ).format("HH:mm")}`}
            </Typography>
          )}

          <Typography
            variant="subtitle2"
            textAlign="center"
            sx={(theme) => ({ color: theme.palette.error.main })}
          >
            {language === "en"
              ? "Warning: If you delete this lesson, it cannot be restored."
              : "Попередження: якщо ви видалите цей урок, його не можна буде відновити."}
          </Typography>
          <Box display="flex" gap="20px">
            <Button onClick={() => setIsDeleteModal(false)}>
              {language === "en" ? "Close" : "Закрити"}
            </Button>
            <Button
              onClick={() => {
                dispatch(
                  deleteLessonByIdThunk({
                    nameCollection,
                    language,
                    id: deleteItem._id,
                  })
                ).finally(() => setDeleteItem({}));

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
