import {
  Box,
  ClickAwayListener,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import {
  WrapperClose,
  WrapperInfo,
  WrapperInfoItem,
  WrapperInfoTitle,
} from "./ModalCallendar.styled";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSchedulesLoading } from "../../../redux/cleaningSlice";

export const ModalCalendar = ({
  isEdit,
  handleClose,
  language,
  handleAddALesson,
  setIsChooseALesson,
  setIsEdit,
  isDay,
  setValueSelect,
  permissions,
  setIsDeleteModal,
}) => {
  const [isFocuse, setIsFocus] = useState(false);
  const isLoading = useSelector(selectSchedulesLoading);

  useEffect(() => {
    setIsChooseALesson(isEdit?.data[0]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                {isEdit?.data?.length > 1 && (
                  <FormControl sx={{ width: "100%", maxWidth: 400 }}>
                    <InputLabel>
                      {language === "en"
                        ? "Choose a task"
                        : "Виберіть завдання"}
                    </InputLabel>
                    <Select
                      disabled={isLoading}
                      defaultValue={0}
                      onChange={(e) => {
                        setIsChooseALesson(isEdit?.data[e.target.value]);
                        setValueSelect(isEdit?.data[e.target.value].task.id);
                      }}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      label={
                        language === "en"
                          ? "Choose a task"
                          : "Виберіть завдання"
                      }
                    >
                      {isEdit?.data?.map(({ roomNumber, task }, index) => (
                        <MenuItem key={index} value={index}>
                          <Typography variant="subtitle2">
                            <Typography component="span">
                              {roomNumber}
                              {" - "}
                            </Typography>{" "}
                            <Typography component="span">
                              {task[language]}
                            </Typography>
                          </Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                <MenuList>
                  <MenuItem
                    disabled={isLoading}
                    onClick={() => {
                      handleAddALesson();
                    }}
                  >
                    <ListItemText>
                      {language === "en"
                        ? "Add cleaning"
                        : "Додайте прибирання"}
                    </ListItemText>
                    <ListItemIcon sx={{ ml: 2 }}>
                      <AddCircleIcon color="success" />
                    </ListItemIcon>
                  </MenuItem>

                  {isEdit.data?.length > 0 && (
                    <Box>
                      <MenuItem
                        disabled={isLoading}
                        onClick={() => {
                          setIsEdit((prevState) => {
                            return { ...prevState, edit: true };
                          });

                          handleAddALesson();
                        }}
                      >
                        <ListItemText>
                          {language === "en"
                            ? "Edit schedule"
                            : "Редагувати розклад"}
                        </ListItemText>
                        <ListItemIcon sx={{ ml: 2 }}>
                          <EditIcon color="secondary" />
                        </ListItemIcon>
                      </MenuItem>
                      <MenuItem
                        disabled={isLoading}
                        onClick={() => {
                          setIsDeleteModal(true);
                        }}
                      >
                        <ListItemText>
                          {language === "en"
                            ? "Delete schedule"
                            : "Видалити розклад"}
                        </ListItemText>
                        <ListItemIcon sx={{ ml: 2 }}>
                          <DeleteIcon color="error" />
                        </ListItemIcon>
                      </MenuItem>
                    </Box>
                  )}
                </MenuList>
              </>
            )}

            {isEdit?.data?.length > 0 && (
              <WrapperInfoTitle>
                <Typography variant="subtitle1">{`${
                  language === "en" ? "Room" : "Кімніта"
                } `}</Typography>
                <Typography variant="subtitle1">{` ${
                  language === "en" ? "Task" : "Задача"
                }`}</Typography>
              </WrapperInfoTitle>
            )}

            {isEdit?.data?.map(({ roomNumber, task }, index) => (
              <WrapperInfo key={index}>
                <Divider sx={{ width: "100%" }} />

                <WrapperInfoItem>
                  <Typography
                    variant="subtitle2"
                    sx={(theme) => ({ color: theme.palette.success.main })}
                  >{`${roomNumber}`}</Typography>
                  <Typography
                    variant="subtitle2"
                    sx={(theme) => ({ color: theme.palette.success.main })}
                  >{`${task[language]}`}</Typography>
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
  handleAddALesson: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setIsEdit: PropTypes.func,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  language: PropTypes.string,
  setIsChooseALesson: PropTypes.func,
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf([null]),
  ]),
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  setValueSelect: PropTypes.func,
  valueSelect: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    .isRequired,
  permissions: PropTypes.bool,
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
};
