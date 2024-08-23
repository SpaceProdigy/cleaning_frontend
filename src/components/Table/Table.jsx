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
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import {
  selectLessonsJillArr,
  selectLessonsLoading,
} from "../../redux/cleaningSlice";
import dayjs from "dayjs";

BasicTable.propTypes = {
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  permissions: PropTypes.bool.isRequired,
  selectMonthCalendar: PropTypes.object.isRequired,
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
}) {
  const language = useSelector(selectLanguage);
  const LessonsJillArr = useSelector(selectLessonsJillArr);
  const isLoading = useSelector(selectLessonsLoading);

  const sortArr = [...LessonsJillArr]?.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });

  return (
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
            sortArr.map(({ id, date, roomNumber, task }, index, item) => (
              <TableRow
                key={index}
                id={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="center"
                  sx={(theme) => ({
                    whiteSpace: "nowrap",
                    color:
                      dayjs().format("YYYY-MM-DD") === date
                        ? theme.palette.success.main
                        : theme.palette.text.main,
                  })}
                >
                  {roomNumber}
                </TableCell>

                <TableCell
                  align="center"
                  sx={(theme) => ({
                    whiteSpace: "nowrap",
                    color:
                      dayjs().format("YYYY-MM-DD") === date
                        ? theme.palette.success.main
                        : theme.palette.text.main,
                  })}
                >
                  {date}
                </TableCell>
                <TableCell
                  align="center"
                  sx={(theme) => ({
                    whiteSpace: "nowrap",
                    color:
                      dayjs().format("YYYY-MM-DD") === date
                        ? theme.palette.success.main
                        : theme.palette.text.main,
                  })}
                >
                  {task[language]}
                </TableCell>

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
            ))}
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
  );
}
