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
  Button,
  Checkbox,
  CircularProgress,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDefaultLesson,
  selectLanguage,
} from "../../redux/localOperation";
import {
  selectSchedulesArr,
  selectSchedulesLoading,
} from "../../redux/cleaningSlice";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { updateScheduleByIdThunk } from "../../redux/cleaningOperations";
import { selectAuthUser } from "../../redux/authSlice";
import RowRadioButtonsGroup from "./RadioGroup/RadioGroup";
import { Pdf } from "../Pdf/Pdf";

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
  const isLoading = useSelector(selectSchedulesLoading);
  // const authentificated = useSelector(selectAuthentificated);
  const user = useSelector(selectAuthUser) || {};
  const localFilter = useSelector(selectDefaultLesson);

  const [isFilterTask, setIsFilterTask] = useState("");
  const [uniqTaskList, setUniqTaskList] = useState({});
  const [uniqRoomList, setUniqRoomList] = useState([]);

  const uniqTasks = useMemo(() => {
    const uniqueTasksEn = new Set();
    const uniqueTasksUa = new Set();
    schedulesArr?.forEach(({ task }) => uniqueTasksEn.add(task.en));
    schedulesArr?.forEach(({ task }) => uniqueTasksUa.add(task.ua));
    return { en: [...uniqueTasksEn], ua: [...uniqueTasksUa] };
  }, [schedulesArr]);

  const uniqRooms = useMemo(() => {
    const uniqRoomNumbers = new Set();
    schedulesArr?.map(({ roomNumber }) => uniqRoomNumbers.add(roomNumber));
    const soertedUniqRoomNumbers = [...uniqRoomNumbers].sort((a, b) => a - b);

    return soertedUniqRoomNumbers;
  }, [schedulesArr]);

  const dicpatch = useDispatch();

  const [room, setRoom] = useState("");
  const [isDoPdf, setIsDoPdf] = useState(false);

  const handlePaginationChange = (_, n) => {
    setPage(n);
  };

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

    // Сортируем по дате (сначала идут более ранние даты)
    if (dateA - dateB !== 0) {
      return dateA - dateB;
    }

    // Если даты одинаковые, сортируем по названию таска (по алфавиту)
    if (a.task.en.localeCompare(b.task.en) !== 0) {
      return a.task.en.localeCompare(b.task.en);
    }

    // Если и таски одинаковые, сортируем по номеру комнаты
    const roomA = parseInt(a.roomNumber, 10);
    const roomB = parseInt(b.roomNumber, 10);

    return roomA - roomB;
  });

  const currentArr = () => {
    let currentArr = sortArr;
    if (isFilterTask) {
      currentArr = sortArr?.filter(({ task }) => task.en === isFilterTask);
    }

    if (room) {
      currentArr = currentArr?.filter(
        ({ roomNumber }) => String(roomNumber) === room
      );
    }

    if (
      (localFilter["filter" + nameCollection]
        ? localFilter["filter" + nameCollection]
        : "Fully") === "Hide past dates"
    ) {
      currentArr = currentArr?.filter(
        ({ date }) =>
          dayjs(date).isAfter(dayjs()) || dayjs(date).isSame(dayjs(), "day")
      );
    }
    if (
      (localFilter["filter" + nameCollection]
        ? localFilter["filter" + nameCollection]
        : "Fully") === "Current week"
    ) {
      currentArr = currentArr?.filter(({ date }) => {
        const day = dayjs(date);
        const startOfWeek = dayjs().startOf("week");
        const endOfWeek = dayjs().endOf("week");

        return day.isAfter(startOfWeek) && day.isBefore(endOfWeek);
      });
    }

    return currentArr;
  };

  useEffect(() => {
    setUniqTaskList(uniqTasks);
    setUniqRoomList(uniqRooms);
  }, [uniqRooms, uniqTasks]);

  return (
    <>
      <RowRadioButtonsGroup
        isLoading={isLoading}
        language={language}
        isFilterTas={isFilterTask}
        setIsFilterTask={setIsFilterTask}
        uniqTaskList={uniqTaskList}
        room={room}
        setRoom={setRoom}
        uniqRoomList={uniqRoomList}
        nameCollection={nameCollection}
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

                      {permissions && (
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
                                {checked?.checker?.displayName}
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
      {sortArr && sortArr.length > 0 && (
        <>
          {isDoPdf && (
            <Pdf
              data={currentArr() ? currentArr() : []}
              nameCollection={nameCollection}
            />
          )}

          {permissions && (
            <Button
              variant="contained"
              onClick={() => setIsDoPdf((preState) => !preState)}
            >
              {!isDoPdf
                ? language === "en"
                  ? "Make a PDF"
                  : "Зробити PDF"
                : language === "en"
                ? "Collapse a PDF"
                : "Згорнути PDF"}
            </Button>
          )}
        </>
      )}
    </>
  );
}
