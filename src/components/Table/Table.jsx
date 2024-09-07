import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import PropTypes from "prop-types";
import {
  Box,
  Checkbox,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import {
  selectLessonsLoading,
  selectSchedulesArr,
} from "../../redux/cleaningSlice";
import dayjs from "dayjs";
import { useState } from "react";
import { updateScheduleByIdThunk } from "../../redux/cleaningOperations";
import { selectAuthentificated, selectAuthUser } from "../../redux/authSlice";

BasicTable.propTypes = {
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  permissions: PropTypes.bool.isRequired,
  nameCollection: PropTypes.string.isRequired,
  setIsEdit: PropTypes.func,
  handleAddALesson: PropTypes.func,
  setIsChooseALesson: PropTypes.func,
  setValueSelect: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf([null]),
  ]),
};

export default function BasicTable({
  setIsDeleteModal,
  setIsEdit,
  permissions,
  handleAddALesson,
  setIsChooseALesson,
  setValueSelect,
  nameCollection,
}) {
  const language = useSelector(selectLanguage);
  const schedulesArr = useSelector(selectSchedulesArr);
  const isLoading = useSelector(selectLessonsLoading);
  const authentificated = useSelector(selectAuthentificated);
  const user = useSelector(selectAuthUser) || {};

  // const user = useSelector(selectAuthUser);
  // console.log(roomNumber);
  // console.log(authentificated);

  const dicpatch = useDispatch();

  const [room, setRoom] = useState("");

  const handleChecked = (e, id, checked) => {
    if (checked?.checker) {
      if (checked.isDone && user.uid !== checked?.checker.userId) {
        return;
      }
    }
    dicpatch(
      updateScheduleByIdThunk({
        nameCollection,
        id,
        updateValue: {
          checked: {
            isDone: e.target.checked,
            checker: {
              displayName: user?.roomNumber ?? user?.displayName ?? "",
              userId: user.uid,
            },
          },
        },
      })
    );
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setRoom(event.target.value);
  };

  const currenColor = (theme, date) => {
    if (dayjs().format("YYYY-MM-DD") === date) {
      return theme.palette.success.main;
    }
    if (dayjs().isAfter(date)) {
      return theme.palette.grey[500];
    }

    return theme.palette.text.main;
  };

  const sortArr = [...schedulesArr]?.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });

  const uniqRoomNumbers = new Set();

  sortArr?.map(({ roomNumber }) => uniqRoomNumbers.add(roomNumber));

  const currentArr = () => {
    if (room) {
      return sortArr?.filter(({ roomNumber }) => roomNumber === room);
    } else {
      return sortArr;
    }
  };

  return (
    <>
      {uniqRoomNumbers?.size > 0 && (
        <Paper elevation={2} sx={{ width: "100%", maxWidth: "400px" }}>
          <FormControl fullWidth sx={{ maxWidth: "400px" }}>
            <InputLabel>{language === "en" ? "Room" : "Кімната"}</InputLabel>
            <Select
              value={room}
              label={language === "en" ? "Room" : "Кімната"}
              onChange={handleChange}
            >
              <MenuItem value={""}>
                {language === "en" ? "Reset" : "Скинути"}
              </MenuItem>
              {[...uniqRoomNumbers]?.map((roomNumber, index) => (
                <MenuItem key={index} value={roomNumber}>
                  {roomNumber}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Paper>
      )}

      <TableContainer
        elevation={2}
        sx={{ boxShadow: "0px 0px 5px -2px rgba(0,0,0,0.52)" }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                {language === "en" ? "Room number" : "Номер кімнати"}
              </TableCell>
              <TableCell align="center">
                {language === "en" ? "Date" : "Дата"}
              </TableCell>
              <TableCell align="center">
                {language === "en" ? "Task" : "Завдання"}
              </TableCell>

              {permissions && (
                <>
                  <TableCell align="center">
                    {language === "en" ? "Done" : "Готово"}
                  </TableCell>
                  <TableCell align="center">
                    {language === "en" ? "Edit" : "Редагувати"}
                  </TableCell>
                  <TableCell align="center">
                    {language === "en" ? "Delete" : "Видалити"}
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortArr &&
              sortArr.length > 0 &&
              currentArr().map(
                ({ _id, date, roomNumber, task, checked }, index, item) => (
                  <TableRow
                    key={index}
                    id={_id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      background: checked.isDone && "#c8ffd115",
                    }}
                  >
                    <TableCell
                      align="center"
                      sx={(theme) => ({
                        whiteSpace: "nowrap",
                        color: currenColor(theme, date),
                      })}
                    >
                      {roomNumber}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={(theme) => ({
                        whiteSpace: "nowrap",
                        color: currenColor(theme, date),
                      })}
                    >
                      {date}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={(theme) => ({
                        whiteSpace: "nowrap",
                        color: currenColor(theme, date),
                      })}
                    >
                      {task[language]}
                    </TableCell>

                    {authentificated && user?.emailVerified && (
                      <TableCell
                        align="center"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Checkbox
                          disabled={isLoading}
                          checked={checked.isDone}
                          onChange={(e) => handleChecked(e, _id, checked)}
                          color="success"
                        />
                        {checked?.isDone && (
                          <Typography variant="caption" whiteSpace="nowrap">
                            {checked?.checker?.displayName}
                          </Typography>
                        )}
                      </TableCell>
                    )}

                    {permissions && (
                      <>
                        <TableCell align="center">
                          <IconButton
                            color="secondary"
                            onClick={() => {
                              setValueSelect(task.id);
                              setIsChooseALesson(item[index]);
                              setIsEdit({ edit: true, data: item });
                              handleAddALesson();
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="error"
                            onClick={() => {
                              setIsDeleteModal(true);
                              setIsChooseALesson(item[index]);
                              setIsEdit({ edit: true, data: item });
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
        {isLoading && (
          <Box
            width="100%"
            height="100px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        )}

        {!isLoading && sortArr.length === 0 && (
          <Typography variant="h6" textAlign="center" marginBottom={2} mt={2}>
            {language === "en"
              ? "Cleaning this month are not yet scheduled"
              : "Прибирання в цьому місяці ще не заплановано"}
          </Typography>
        )}
      </TableContainer>
    </>
  );
}
