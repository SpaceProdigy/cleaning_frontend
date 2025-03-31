import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers";
import SchoolIcon from "@mui/icons-material/School";
import PropTypes from "prop-types";
import { nanoid } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { useMemo } from "react";

export const DayItem = ({
  permissions,
  setIsModal,
  setCurrentDay,
  shouldDisplay,
  props,
  language,
}) => {
  const theme = useTheme();
  const sortedArr = useMemo(() => {
    return shouldDisplay.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA - dateB !== 0) {
        return dateA - dateB;
      }

      const timeA = new Date(a.startTime);
      const timeB = new Date(b.startTime);

      return timeA - timeB;
    });
  }, [shouldDisplay]);

  const hendleOpenMenu = () => {
    if (!permissions && !shouldDisplay) {
      return;
    }
    if (!permissions && shouldDisplay.length === 0) {
      return;
    }

    setIsModal(true);
    setCurrentDay(shouldDisplay);
  };

  return (
    <Box>
      <Box position="relative">
        {shouldDisplay.length === 1 && (
          <Box sx={{ position: "absolute", top: -5, right: -5, zIndex: 5 }}>
            <SchoolIcon
              fontSize="small"
              sx={{ color: theme.palette.success.main }}
            />
          </Box>
        )}

        <Box>
          {shouldDisplay.length > 1 && (
            <Box
              sx={(theme) => ({
                position: "absolute",
                top: -2,
                right: -2,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: theme.palette.secondary.main,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 5,
              })}
            >
              <Typography variant="caption" color="#111">
                {shouldDisplay.length}
              </Typography>
            </Box>
          )}
        </Box>
        <Tooltip
          component="div"
          classes={{
            tooltip: "custom-tooltip",
          }}
          title={
            sortedArr.length > 0 && (
              <div
                style={{
                  maxHeight: 100,
                  overflow: "auto",
                  scrollbarWidth: "thin",
                  padding: 5,
                }}
              >
                {sortedArr.map(({ startTime, endTime, place }) => (
                  <div key={nanoid()} style={{ padding: 5 }}>
                    <Typography
                      variant="subtitle2"
                      textAlign="center"
                      component="div"
                    >
                      {language === "ua" ? "Локація: " : "Location: "}
                      {place}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      textAlign="center"
                      component="div"
                    >
                      {language === "ua" ? "Час: " : "Time: "}
                      {dayjs(startTime).format("HH:mm")}:
                      {dayjs(endTime).format("HH:mm")}
                    </Typography>
                  </div>
                ))}
              </div>
            )
          }
          placement="top-end"
        >
          <PickersDay
            onClick={hendleOpenMenu}
            {...props}
            sx={{
              border: props.today
                ? `solid 2px ${theme.palette.info.main} !important`
                : shouldDisplay.length > 0 &&
                  `solid 2px ${theme.palette.success.main}`,
              background:
                props.today && `${theme.palette.info.main} !important`,
            }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
};

DayItem.propTypes = {
  props: PropTypes.object,
  today: PropTypes.bool,
  setIsModal: PropTypes.func,
  setCurrentDay: PropTypes.func,
  shouldDisplay: PropTypes.array,
  permissions: PropTypes.bool.isRequired,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  language: PropTypes.string,
};
