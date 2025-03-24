import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";
import { Wrapper, WrapperClose } from "./ModalAddLesson.styled";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { useEffect } from "react";
import { selectLessonsLoading } from "../../../redux/lessonsSlice";

// ✅ Валидация через YUP
const getValidationSchema = (language) =>
  yup.object({
    date: yup
      .mixed()
      .required(language === "ua" ? "Дата обов'язкова" : "Date is required"),
    startTime: yup
      .mixed()
      .required(language === "ua" ? "Час обов'язковий" : "Time is required"),
    endTime: yup
      .mixed()
      .required(
        language === "ua"
          ? "Час закінчення обов'язковий"
          : "End time is required"
      )
      .test(
        "is-after",
        language === "ua"
          ? "Час закінчення повинен бути після початку"
          : "End time must be after start time",
        function (value) {
          const { startTime } = this.parent;
          return dayjs(value).isAfter(dayjs(startTime));
        }
      ),
    place: yup
      .string()
      .required(language === "ua" ? "Оберіть місце" : "Choose a location"),
    topic: yup
      .string()
      .max(
        100,
        language === "ua" ? "Максимум 100 символів" : "Max 100 characters"
      ),
    notes: yup
      .string()
      .max(
        500,
        language === "ua" ? "Максимум 500 символів" : "Max 500 characters"
      ),
  });

ModalAddLesson.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  onSubmit: PropTypes.func,
  isDay: PropTypes.object,
  placeList: PropTypes.array.isRequired,
  editItem: PropTypes.object,
  setEditItem: PropTypes.func,
};

export default function ModalAddLesson({
  open,
  setOpen,
  onSubmit,
  placeList,
  isDay,
  editItem,
  setEditItem,
}) {
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectLessonsLoading);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(getValidationSchema(language)),
    defaultValues: {
      date: isDay || dayjs(),
      startTime: dayjs().hour(17).minute(30),
      endTime: dayjs().hour(19).minute(0),
      place: placeList[0].en,
      topic: "",
      notes: "",
    },
    mode: "onChange",
  });

  const handleFormSubmit = (data) => {
    onSubmit(data).finally(() => reset());
  };

  useEffect(() => {
    const currentDefaultValues = () => {
      if (editItem?._id) {
        return reset({
          date: dayjs(editItem.date).startOf("day"),
          startTime: dayjs(editItem.startTime)
            .hour(dayjs(editItem.startTime).hour())
            .minute(dayjs(editItem.startTime).minute()),
          endTime: dayjs(editItem.endTime)
            .hour(dayjs(editItem.endTime).hour())
            .minute(dayjs(editItem.endTime).minute()),
          place: editItem.place,
          topic: editItem.topic,
          notes: editItem.notes,
        });
      }
      if (isDay) {
        return reset({
          date: isDay || dayjs(),
          startTime: dayjs().hour(17).minute(30),
          endTime: dayjs().hour(19).minute(0),
          place: placeList[0].en,
          topic: "",
          notes: "",
        });
      }
    };

    currentDefaultValues();
  }, [editItem, isDay, placeList, reset, setEditItem]);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Wrapper>
        <Backdrop
          open={isLoading}
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.modal + 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <WrapperClose>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </WrapperClose>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 400,
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* 📅 Дата */}
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label={language === "ua" ? "Дата" : "Date"}
                  format="DD.MM.YYYY"
                  value={field.value || null}
                  onChange={(date) => field.onChange(date || dayjs())}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.date,
                      helperText: errors.date?.message,
                      sx: { mb: 2 },
                    },
                  }}
                />
              )}
            />

            {/* ⏰ Время */}
            <Controller
              name="startTime"
              control={control}
              render={({ field }) => (
                <TimeField
                  {...field}
                  label={language === "ua" ? "Початок" : "Start Time"}
                  format="HH:mm"
                  value={field.value || null} // ✅ Убеждаемся, что это dayjs объект
                  onChange={(time) => field.onChange(time || dayjs())} // ✅ Безопасный `onChange`
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.time,
                      helperText: errors.time?.message,
                      sx: { mb: 2 },
                    },
                  }}
                />
              )}
            />
            {/* ⏰ Время окончания */}
            <Controller
              name="endTime"
              control={control}
              render={({ field }) => (
                <TimeField
                  {...field}
                  label={language === "ua" ? "Час закінчення" : "End Time"}
                  format="HH:mm"
                  value={field.value || null}
                  onChange={(time) => field.onChange(time || dayjs())}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.endTime,
                      helperText: errors.endTime?.message,
                      sx: { mb: 2 },
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>

          {/* 📍 Локация */}
          <Controller
            name="place"
            control={control}
            render={({ field }) => (
              <FormControl
                sx={{ width: "100%", maxWidth: 400, mb: 2 }}
                error={!!errors.place}
              >
                <InputLabel>
                  {language === "ua" ? "Виберіть локацію" : "Choose a location"}
                </InputLabel>
                <Select
                  {...field}
                  label={
                    language === "ua" ? "Виберіть локацію" : "Choose a location"
                  }
                >
                  {placeList.map((place, index) => (
                    <MenuItem key={index} value={place.en}>
                      {place[language]}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errors.place?.message}</FormHelperText>
              </FormControl>
            )}
          />

          {/* 🎯 Тема занятия + Подсказка */}
          <Controller
            name="topic"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={language === "ua" ? "Тема заняття" : "Lesson Topic"}
                fullWidth
                sx={{ mb: 2 }}
                error={!!errors.topic}
                helperText={
                  errors.topic?.message ||
                  (language === "ua"
                    ? "Максимум 100 символів"
                    : "Max 100 characters")
                }
              />
            )}
          />

          {/* 📝 Заметки + Подсказка */}
          <Controller
            name="notes"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={language === "ua" ? "Нотатки" : "Notes"}
                fullWidth
                multiline
                rows={3}
                sx={{ mb: 2 }}
                error={!!errors.notes}
                helperText={
                  errors.notes?.message ||
                  (language === "ua"
                    ? "Максимум 500 символів"
                    : "Max 500 characters")
                }
              />
            )}
          />

          <Button type="submit" variant="contained" fullWidth size="large">
            {language === "en" ? "Submit" : "Додати"}
          </Button>
        </form>
      </Wrapper>
    </Modal>
  );
}
