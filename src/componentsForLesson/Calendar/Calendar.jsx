import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, DayCalendarSkeleton } from "@mui/x-date-pickers";
import { Box, Paper } from "@mui/material";
import PropTypes from "prop-types";
import "dayjs/locale/uk";
import { ukUA, enUS } from "@mui/x-date-pickers/locales";
import { memo, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ModalCalendar } from "./ModalCallendar/ModalCallendar";
import { DayItem } from "./DayItem/DayItem";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import {
  selectLessonsLoading,
  selectLessonsSchedulesArr,
} from "../../redux/lessonsSlice";

export default function Calendar({
  handleAddALesson,
  setIsDay,
  editItem,
  setEditItem,
  open,
  isDay,
  permissions,
  isDeleteModal,
  setIsDeleteModal,
  locationMonth,
  nameCollection,
  currentDay,
  setCurrentDay,
  setDeleteItem,
}) {
  const [isModal, setIsModal] = useState(false);
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectLessonsLoading);
  const schedulesArr = useSelector(selectLessonsSchedulesArr);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsDay(null);
    setIsModal(false);
  };

  const isCurrentMonth = () => {
    if (
      dayjs(locationMonth).isBefore(dayjs().format("YYYY-MM")) ||
      dayjs(`${locationMonth}`).isAfter(dayjs().format("YYYY-MM"))
    ) {
      return false;
    } else {
      return true;
    }
  };

  const shouldDisplayBadge = useMemo(
    () =>
      ({ day }) => {
        return schedulesArr?.filter(({ date }) =>
          dayjs(day).isSame(dayjs(date), "day")
        );
      },
    [schedulesArr]
  );

  const MemoizedDayItem = memo(DayItem);

  return (
    <Box>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          position: "relative",
          boxShadow: "0px 0px 4px -2px rgba(0,0,0,0.52)",
          "& .MuiPickersDay-root.Mui-selected": !isCurrentMonth() && {
            backgroundColor: "transparent !important",
            color: "inherit !important",
          },
        }}
      >
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={
            language === "ua"
              ? ukUA.components.MuiLocalizationProvider.defaultProps.localeText
              : enUS.components.MuiLocalizationProvider.defaultProps.localeText
          }
          adapterLocale={language === "ua" ? "uk" : "en"}
        >
          <DateCalendar
            disabled={isLoading}
            value={
              dayjs(locationMonth).isValid()
                ? dayjs(locationMonth).date(dayjs().date())
                : null
            }
            onMonthChange={(e) => {
              const newUrl = `/lessons/${nameCollection}/${e.format(
                "YYYY-MM"
              )}`;
              if (location.pathname !== newUrl) {
                navigate(newUrl);
              }
            }}
            onChange={(e) => setIsDay(e)}
            views={["day"]}
            key={language}
            loading={isLoading}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: (props) => {
                const shouldDisplay = shouldDisplayBadge(props);
                // console.log(props);
                // console.log(shouldDisplay);
                return (
                  <MemoizedDayItem
                    permissions={permissions}
                    setIsModal={setIsModal}
                    shouldDisplay={shouldDisplay}
                    props={props}
                    language={language}
                    setCurrentDay={setCurrentDay}
                  />
                );
              },
            }}
          />
        </LocalizationProvider>
        <AnimatePresence>
          {isModal && (
            <ModalCalendar
              setDeleteItem={setDeleteItem}
              currentDay={currentDay}
              open={open}
              editItem={editItem}
              setEditItem={setEditItem}
              handleClose={handleClose}
              language={language}
              handleAddALesson={handleAddALesson}
              isDay={isDay}
              permissions={permissions}
              isDeleteModal={isDeleteModal}
              setIsDeleteModal={setIsDeleteModal}
            />
          )}
        </AnimatePresence>
      </Paper>
    </Box>
  );
}

Calendar.propTypes = {
  currentDay: PropTypes.array.isRequired,
  setCurrentDay: PropTypes.func.isRequired,
  handleAddALesson: PropTypes.func,
  setIsDay: PropTypes.func,
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  editItem: PropTypes.object,
  setEditItem: PropTypes.func,
  open: PropTypes.bool,
  setValueSelect: PropTypes.func,
  permissions: PropTypes.bool,
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  nameCollection: PropTypes.string.isRequired,
  locationMonth: PropTypes.string.isRequired,
  setDeleteItem: PropTypes.func.isRequired,
};
