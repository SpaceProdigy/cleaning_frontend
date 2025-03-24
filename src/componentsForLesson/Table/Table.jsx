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
  CircularProgress,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import {
  selectDefaultLesson,
  selectLanguage,
} from "../../redux/localOperation";
import dayjs from "dayjs";
import { Fragment } from "react";
import RowRadioButtonsGroup from "./RadioGroup/RadioGroup";
import {
  selectLessonsLoading,
  selectLessonsSchedulesArr,
} from "../../redux/lessonsSlice";

BasicTable.propTypes = {
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  permissions: PropTypes.bool.isRequired,
  nameCollection: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
  setDeleteItem: PropTypes.func.isRequired,
  handleAddALesson: PropTypes.func.isRequired,
};

export default function BasicTable({
  setIsDeleteModal,
  permissions,
  setDeleteItem,
  nameCollection,
  handleAddALesson,
  setEditItem,
  page,
  setPage,
  // setLimit,
  // limit,
  totalPages,
}) {
  const language = useSelector(selectLanguage);
  const schedulesArr = useSelector(selectLessonsSchedulesArr);
  const isLoading = useSelector(selectLessonsLoading);
  const localFilter = useSelector(selectDefaultLesson);

  const handlePaginationChange = (_, n) => {
    setPage(n);
  };

  const currentColor = (theme, date, topic, notes) => {
    const style = {
      td: {
        // textAlign: "center",
        // whiteSpace: "nowrap",
        maxWidth: "600px",

        borderBottom: topic || notes ? "none" : null,
      },
    };

    const today = dayjs().format("YYYY-MM-DD");
    const isPast = dayjs().isAfter(dayjs(date), "day");

    if (today === dayjs(date).format("YYYY-MM-DD")) {
      style.td.color = theme.palette.info.dark;

      return style;
    }
    if (isPast) {
      style.td.color = theme.palette.grey.A400;
      style.backgroundColor = theme.palette.grey[500] + 20;
      return style;
    }

    return style;
  };

  const sortArr = [...schedulesArr]?.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA - dateB !== 0) {
      return dateA - dateB;
    }

    const timeA = new Date(a.startTime);
    const timeB = new Date(b.startTime);

    return timeA - timeB;
  });

  const currentArr = () => {
    let currentArr = sortArr;

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

  return (
    <>
      <RowRadioButtonsGroup
        isLoading={isLoading}
        language={language}
        nameCollection={nameCollection}
      />

      <TableContainer
        elevation={2}
        sx={{
          boxShadow: "0px 0px 5px -2px rgba(0,0,0,0.52)",
          width: "100%",
          maxWidth: "800px",
        }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{language === "ua" ? "Дата" : "Date"}</TableCell>
              <TableCell>{language === "ua" ? "Час" : "Time"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>
                {language === "ua" ? "Локація" : "Location"}
              </TableCell>
              {permissions && (
                <>
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
            {currentArr().length > 0 &&
              currentArr().map(
                (
                  {
                    _id,
                    date,
                    startTime,
                    endTime,
                    place,
                    topic = "",
                    notes = "",
                  },
                  index,
                  arr
                ) => {
                  return (
                    <Fragment key={index}>
                      <TableRow
                        id={_id}
                        sx={(theme) => currentColor(theme, date, topic, notes)}
                      >
                        <TableCell>
                          {dayjs(date).format("DD.MM.YYYY")}
                        </TableCell>
                        <TableCell>
                          {dayjs(startTime).format("HH:mm")}:
                          {dayjs(endTime).format("HH:mm")}
                        </TableCell>
                        <TableCell>{place}</TableCell>

                        {permissions && (
                          <>
                            <TableCell align="center">
                              <IconButton
                                disabled={isLoading}
                                color="secondary"
                                onClick={() => {
                                  setEditItem(arr[index]);
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
                                  setDeleteItem(arr[index]);
                                  setIsDeleteModal(true);
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </>
                        )}
                      </TableRow>

                      {topic && (
                        <TableRow
                          sx={(theme) => ({
                            ...currentColor(theme, date),
                            textAlign: "start",
                            background: "inherit",
                          })}
                        >
                          <TableCell
                            colSpan={5}
                            sx={{
                              overflowWrap: "break-word",
                              borderBottom: notes ? "none" : null,
                            }}
                          >
                            Topic: {topic}
                          </TableCell>
                        </TableRow>
                      )}
                      {notes && (
                        <TableRow
                          sx={(theme) => ({
                            ...currentColor(theme, date),
                            textAlign: "start",
                            background: "inherit",
                          })}
                        >
                          <TableCell
                            colSpan={5}
                            sx={{
                              overflowWrap: "break-word",
                            }}
                          >
                            Notes: {notes}
                          </TableCell>
                        </TableRow>
                      )}
                    </Fragment>
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
