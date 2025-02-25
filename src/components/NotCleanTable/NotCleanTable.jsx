import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import {
  resetCleaningData,
  selectLessonsLoading,
  selectMissedCleaningArr,
  selectSchedulesArr,
} from "../../redux/cleaningSlice";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Pagination,
  Typography,
} from "@mui/material";
import { errorMessages } from "../../errorMessages";
import { Wrapper, WrapperHelperText } from "./NotCleanTable.styled";
import { getScheduleByRoomThunk } from "../../redux/cleaningOperations";
import PropTypes from "prop-types";
import axios from "axios";

NotCleanTable.propTypes = { nameCollection: PropTypes.string.isRequired };

export default function NotCleanTable({ nameCollection }) {
  const language = useSelector(selectLanguage);
  const schedulesArr = useSelector(selectSchedulesArr);
  const isLoading = useSelector(selectLessonsLoading);
  const missedCleaningArr = useSelector(selectMissedCleaningArr);
  const dispatch = useDispatch();
  const [room, setRoom] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [roomError, setRoomError] = useState("");
  const [isTidied, setIsTidied] = useState(false);
  const [cancelTokenSource, setCancelTokenSource] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(null);

  const handlePaginationChange = (_, n) => {
    setPage(n);
    const source = axios.CancelToken.source();
    setCancelTokenSource(source);

    dispatch(
      getScheduleByRoomThunk({
        nameCollection,
        roomNumber: selectedRoom,
        cancelToken: source,
        isTidied,
        page: n,
        limit,
        setTotalPages,
      })
    );
  };

  const handleChecked = async (e) => {
    setIsTidied(e.target.checked);
  };

  const handleChange = async (e) => {
    const roomNumber = e.target.value.trim().replace(/\D/g, ""); // Убираем все нецифры

    if (roomNumber > 999) {
      setRoomError((await errorMessages(language, "maxLength")) + ` 999`);

      return;
    }
    setRoomError("");
    setRoom(roomNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (room.length < 1) {
      return;
    }
    // Создаём токен отмены для нового запроса
    const source = axios.CancelToken.source();
    setCancelTokenSource(source);

    dispatch(
      getScheduleByRoomThunk({
        nameCollection,
        roomNumber: room,
        cancelToken: source,
        isTidied,
        page,
        limit,
        setTotalPages,
        setTotalItems,
      })
    );
    setSelectedRoom(room);
    setRoom("");
    setRoomError("");
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

  const filteredArr = [...schedulesArr]?.filter((task) => {
    return (
      dayjs().isAfter(dayjs(task.date), "day") && !task.checked.isDone && task
    );
  });

  const carrentArr =
    missedCleaningArr && missedCleaningArr.length > 0
      ? missedCleaningArr
      : filteredArr && filteredArr.length > 0
      ? filteredArr
      : [];

  // Очистка при размонтировании компонента
  useEffect(() => {
    return () => {
      if (cancelTokenSource) {
        cancelTokenSource.cancel("Компонент был размонтирован.");
      }
      dispatch(resetCleaningData());
    };
  }, [cancelTokenSource, dispatch]);

  return (
    <Wrapper>
      <Paper elevation={2} sx={{ width: "100%", maxWidth: "400px", p: "16px" }}>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ maxWidth: "400px" }} error={!!roomError}>
            <InputLabel>{language === "en" ? "Room" : "Кімната"}</InputLabel>
            <OutlinedInput
              disabled={isLoading}
              onChange={handleChange}
              value={room}
              label={language === "en" ? "Room" : "Кімната"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    color="info"
                    type="submit"
                    disabled={!!roomError || room.length < 1 || isLoading}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error={!!roomError}>
              <Typography variant="caption">
                {roomError
                  ? roomError
                  : language === "en"
                  ? "For all time"
                  : "За весь час"}
              </Typography>
            </FormHelperText>
            <WrapperHelperText>
              <div>
                <Typography variant="caption">
                  {language === "en" ? "Tidied" : "Прибрано"}
                </Typography>
                <Checkbox
                  size="small"
                  checked={isTidied}
                  onChange={handleChecked}
                />
              </div>
            </WrapperHelperText>
          </FormControl>
        </form>
      </Paper>

      {selectedRoom && (
        <Box sx={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
          <Box>
            <Typography variant="overline" textAlign="center">
              {language === "en"
                ? "Search result for: "
                : "Результат пошуку за: "}
              {`${selectedRoom}`}
            </Typography>
          </Box>
          {missedCleaningArr.length === 0 ? (
            <Box>
              <Typography variant="caption" textAlign="center">
                {language === "en" ? "No data" : "Немає даних"}
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography variant="caption" textAlign="center">
                {language === "en"
                  ? `Found ${totalItems} items`
                  : `Знайдено ${totalItems} елементів`}
              </Typography>
            </Box>
          )}
        </Box>
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
            </TableRow>
          </TableHead>
          {!isLoading && (
            <TableBody>
              {carrentArr?.map(
                ({ _id, date, roomNumber, task, checked }, index) => {
                  const isDone = checked?.isDone;

                  return (
                    <TableRow
                      key={index}
                      id={_id}
                      sx={(theme) => currenColor(theme, date, isDone)}
                    >
                      <TableCell>{roomNumber}</TableCell>

                      <TableCell>{date}</TableCell>
                      <TableCell>{task[language]}</TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          )}
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

        {!isLoading && carrentArr?.length === 0 && (
          <Typography variant="h6" textAlign="center" marginBottom={2} mt={2}>
            {language === "en" ? "They are absent" : "Відсутні"}
          </Typography>
        )}
      </TableContainer>
    </Wrapper>
  );
}
