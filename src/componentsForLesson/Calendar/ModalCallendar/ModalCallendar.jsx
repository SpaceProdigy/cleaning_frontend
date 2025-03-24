import {
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import {
  ButtonWrapper,
  TextWrapper,
  WrapperClose,
  WrapperInfo,
  WrapperInfoItem,
} from "./ModalCallendar.styled";
import dayjs from "dayjs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLessonsLoading } from "../../../redux/lessonsSlice";

export const ModalCalendar = ({
  currentDay,
  handleClose,
  language,
  handleAddALesson,
  isDay,
  setDeleteItem,
  permissions,
  setIsDeleteModal,
  setEditItem,
}) => {
  const [isFocuse] = useState(false);
  const isLoading = useSelector(selectLessonsLoading);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Paper elevation={2}>
        <ClickAwayListener
          onClickAway={() => {
            if (isFocuse) {
              return;
            }
            handleClose();
          }}
        >
          <Box>
            <WrapperClose>
              <Typography variant="subtitle2">
                {dayjs(isDay).format("YYYY-MM-DD")}
              </Typography>

              <IconButton onClick={handleClose} size="small">
                <CloseIcon fontSize="small" />
              </IconButton>
            </WrapperClose>

            {permissions && (
              <>
                <MenuList>
                  <MenuItem
                    disabled={isLoading}
                    onClick={() => {
                      setEditItem({});
                      handleAddALesson();
                    }}
                  >
                    <ListItemText>
                      {language === "en" ? "Add Lesson" : "Додайти урок"}
                    </ListItemText>
                    <ListItemIcon sx={{ ml: 2 }}>
                      <AddCircleIcon color="success" />
                    </ListItemIcon>
                  </MenuItem>
                </MenuList>
              </>
            )}

            {currentDay?.map(({ place, startTime, endTime }, index, arr) => (
              <WrapperInfo key={index}>
                <Divider sx={{ width: "100%" }} />

                <WrapperInfoItem>
                  <TextWrapper>
                    <Typography
                      variant="subtitle2"
                      sx={(theme) => ({ color: theme.palette.success.main })}
                    >{`${place}`}</Typography>
                    <Typography
                      variant="subtitle2"
                      sx={(theme) => ({ color: theme.palette.success.main })}
                    >
                      {`${dayjs(startTime).format("HH:mm")}:${dayjs(
                        endTime
                      ).format("HH:mm")}`}
                    </Typography>
                  </TextWrapper>

                  {permissions && (
                    <ButtonWrapper>
                      <IconButton
                        size="small"
                        onClick={() => {
                          setEditItem(arr[index]);
                          handleAddALesson();
                        }}
                      >
                        <EditIcon fontSize="small" color="secondary" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => {
                          setDeleteItem(arr[index]);
                          setIsDeleteModal(true);
                        }}
                      >
                        <DeleteIcon fontSize="small" color="error" />
                      </IconButton>
                    </ButtonWrapper>
                  )}
                </WrapperInfoItem>
              </WrapperInfo>
            ))}
          </Box>
        </ClickAwayListener>
      </Paper>
    </motion.div>
  );
};

ModalCalendar.propTypes = {
  currentDay: PropTypes.array,
  handleAddALesson: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setIsEdit: PropTypes.func,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  language: PropTypes.string,
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  setDeleteItem: PropTypes.func,
  permissions: PropTypes.bool,
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  setEditItem: PropTypes.func,
};
