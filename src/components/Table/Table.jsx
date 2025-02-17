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
  Pagination,
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
import RowRadioButtonsGroup from "./RadioGroup/RadioGroup";

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
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  setLitit: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};

export default function BasicTable({
  setIsDeleteModal,
  setIsEdit,
  permissions,
  handleAddALesson,
  setIsChooseALesson,
  setValueSelect,
  nameCollection,
  page,
  setPage,
  // setLitit,
  // limit,
  totalPages,
}) {
  const language = useSelector(selectLanguage);
  const schedulesArr = useSelector(selectSchedulesArr);
  const isLoading = useSelector(selectLessonsLoading);
  const authentificated = useSelector(selectAuthentificated);
  const user = useSelector(selectAuthUser) || {};
  const [filterList, setFilterList] = useState("Hide past dates");

  const dicpatch = useDispatch();

  const [room, setRoom] = useState("");

  const handlePaginationChange = (_, n) => {
    setPage(n);
  };

  // const handleLimitChange = (e) => {
  //   setPage(1);
  //   setLitit(e.target.value);
  // };

  const handleChecked = (e, id, checked) => {
    if (checked?.checker) {
      if (checked.isDone && user.uid !== checked?.checker.userId) {
        return;
      }
    }
    dicpatch(
      updateScheduleByIdThunk({
        language,
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
    setRoom(event.target.value);
  };

  const currenColor = (theme, date, isDone) => {
    const style = {
      td: {
        textAlign: "center",
        whiteSpace: "nowrap",
      },
    };

    const today = dayjs().format("YYYY-MM-DD");
    const isPast = dayjs().isAfter(dayjs(date), "day");

    if (today === date) {
      style.td.color = isDone
        ? theme.palette.success.dark
        : theme.palette.info.dark;
      style.backgroundColor = isDone && theme.palette.success.dark + 20;

      return style;
    }
    if (isPast) {
      style.td.color = isDone
        ? theme.palette.success.dark
        : theme.palette.error.dark;
      style.backgroundColor = isDone
        ? theme.palette.success.dark + 20
        : theme.palette.error.dark + 20;
      return style;
    }

    return style;
  };

  const sortArr = [...schedulesArr]?.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Сначала сортируем по дате
    if (dateA - dateB !== 0) {
      return dateA - dateB;
    }

    // Если даты одинаковые, сортируем по номеру комнаты
    const roomA = parseInt(a.roomNumber, 10);
    const roomB = parseInt(b.roomNumber, 10);

    return roomA - roomB;
  });

  const uniqRoomNumbers = new Set();

  sortArr?.map(({ roomNumber }) => uniqRoomNumbers.add(roomNumber));

  const soertedUniqRoomNumbers = [...uniqRoomNumbers].sort((a, b) => a - b);

  const currentArr = () => {
    if (room) {
      return sortArr?.filter(({ roomNumber }) => roomNumber === room);
    }
    if (filterList === "Hide past dates") {
      return sortArr?.filter(
        ({ date }) =>
          dayjs(date).isAfter(dayjs()) || dayjs(date).isSame(dayjs(), "day")
      );
    }
    if (filterList === "Current week") {
      return sortArr?.filter(({ date }) => {
        const day = dayjs(date);
        const startOfWeek = dayjs().startOf("week");
        const endOfWeek = dayjs().endOf("week");

        return day.isAfter(startOfWeek) && day.isBefore(endOfWeek);
      });
    }

    return sortArr;
  };

  return (
    <>
      {uniqRoomNumbers?.size > 0 && (
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",

            gap: "10px",
            p: "10px",
          }}
        >
          <FormControl
            fullWidth
            sx={{ maxWidth: "400px" }}
            disabled={isLoading}
          >
            <InputLabel>{language === "en" ? "Room" : "Кімната"}</InputLabel>
            <Select
              value={room}
              label={language === "en" ? "Room" : "Кімната"}
              onChange={handleChange}
            >
              <MenuItem value={""}>
                {language === "en" ? "Reset" : "Скинути"}
              </MenuItem>
              {soertedUniqRoomNumbers?.map((roomNumber, index) => (
                <MenuItem key={index} value={roomNumber}>
                  {language === "en" ? " Room" : " Кімната"} {roomNumber}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* <FormControl
            fullWidth
            sx={{ maxWidth: "400px" }}
            disabled={isLoading}
          >
            <InputLabel>
              {language === "en" ? "Items per page" : "Елементів на сторінці"}
            </InputLabel>
            <Select
              value={limit}
              label={
                language === "en" ? "Items per page" : "Елементів на сторінці"
              }
              onChange={handleLimitChange}
            >
              {[20, 50, 100].map((num) => (
                <MenuItem key={num} value={num}>
                  {language === "en" ? "Items" : "Елементів"}
                  {` ${num}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </Paper>
      )}

      <RowRadioButtonsGroup
        filterList={filterList}
        setFilterList={setFilterList}
        isLoading={isLoading}
        language={language}
      />

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
                  <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                    {language === "en" ? "Confirmed by" : "Підтверджено "}
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
                ({ _id, date, roomNumber, task, checked }, index, item) => {
                  const isDone = checked.isDone;

                  return (
                    <TableRow
                      key={index}
                      id={_id}
                      sx={(theme) => currenColor(theme, date, isDone)}
                    >
                      <TableCell>{roomNumber}</TableCell>

                      <TableCell>{date}</TableCell>
                      <TableCell>{task[language]}</TableCell>

                      {authentificated && user?.emailVerified && (
                        <>
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
                          </TableCell>
                          <TableCell>
                            {checked?.isDone && (
                              <Typography variant="caption" whiteSpace="nowrap">
                                {permissions
                                  ? "Admin"
                                  : checked?.checker?.displayName}
                              </Typography>
                            )}
                          </TableCell>
                        </>
                      )}

                      {permissions && (
                        <>
                          <TableCell align="center">
                            <IconButton
                              disabled={isLoading}
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
                              disabled={isLoading}
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
                  );
                }
              )}
          </TableBody>
        </Table>

        {totalPages > 1 && (
          <Box
            width="100%"
            height="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Pagination
              count={totalPages}
              variant="outlined"
              color="primary"
              disabled={isLoading}
              page={page}
              boundaryCount={0}
              onChange={handlePaginationChange}
            />
          </Box>
        )}

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
