import { pdf, PDFViewer } from "@react-pdf/renderer";

import PropTypes from "prop-types";
import "./pdfSettings.js";
import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { PdfReminder } from "./PdfReminder.jsx";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import { selectSchedulesLoading } from "../../redux/cleaningSlice";
import { PdfList } from "./PdfList.jsx";

export const Pdf = ({ data, nameCollection }) => {
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectSchedulesLoading);
  const [select, setSelect] = useState("List");
  const [loading, setLoading] = useState(true);

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (data && nameCollection) {
      setLoading(false);
    }
  }, [data, nameCollection]);

  const sortedArr = useMemo(() => {
    if (!Array.isArray(data)) return [];
    return data
      .map((item) => {
        const exsist = data
          .filter(
            (el) => item.date === el.date && item.task.en === el.task.en // 🔹 Исправил сравнение
          )
          .map((i) => i.roomNumber)
          .join(" - ");

        return { ...item, roomNumber: exsist };
      }, [])
      .sort((a, b) => {
        // Сначала сортируем по дате
        const dateDiff = new Date(a.date) - new Date(b.date);
        if (dateDiff !== 0) {
          return dateDiff;
        }

        // Потом сортируем по названию задачи (по алфавиту)
        return a.task.en.localeCompare(b.task.en);
      });
  }, [data]);

  const uniqueData = useMemo(() => {
    return Array.from(
      new Map(
        sortedArr.map((item) => [
          `${item.date}-${item.task.en}-${item.roomNumber}`, // создаем уникальный ключ
          item,
        ])
      ).values()
    );
  }, [sortedArr]);

  const newData = useMemo(() => {
    return data
      ?.map((item) => {
        const matchingRooms = data
          .filter((el) => el.date === item.date && el.task.en === item.task.en)
          .map((el) => el.roomNumber)
          .join(" - ");

        return { ...item, roomNumber: matchingRooms };
      })
      .sort((a, b) => {
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
  }, [data]);

  const handleGeneratePdf = async () => {
    let blob;
    if (select === "Reminder") {
      blob = await pdf(
        <PdfReminder nameCollection={nameCollection} data={data} />
      ).toBlob();
    }
    if (select === "List") {
      blob = await pdf(
        <PdfList nameCollection={nameCollection} data={uniqueData} />
      ).toBlob();
    }

    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  if (loading) {
    return (
      <div style={{ width: "100%", textAlign: "center", paddingTop: "20px" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Paper style={{ width: "100%" }}>
      <Paper elevation={2} sx={{ p: "7px 15px" }}>
        <FormControl>
          <FormLabel>
            {language === "en" ? "Make PDF" : "Зробити PDF"}
          </FormLabel>
          <RadioGroup
            row
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <FormControlLabel
              disabled={isLoading}
              value="List"
              control={<Radio />}
              label={language === "en" ? "List" : "Список"}
            />
            <FormControlLabel
              disabled={isLoading}
              value="Reminder"
              control={<Radio />}
              label={language === "en" ? "Reminder" : "Нагадування"}
            />
          </RadioGroup>
        </FormControl>
      </Paper>
      {isMobile ? (
        <Box my={2} display={"flex"} justifyContent={"center"}>
          <Button variant="contained" onClick={handleGeneratePdf}>
            Create PDF
          </Button>
        </Box>
      ) : (
        <>
          {select === "Reminder" && (
            <PDFViewer
              style={{ width: "100%", height: "600px", border: "none" }}
            >
              <PdfReminder nameCollection={nameCollection} data={newData} />
            </PDFViewer>
          )}
          {select === "List" && (
            <PDFViewer
              style={{ width: "100%", height: "600px", border: "none" }}
            >
              <PdfList
                nameCollection={nameCollection}
                data={uniqueData}
                language={language}
              />
            </PDFViewer>
          )}
        </>
      )}
    </Paper>
  );
};

Pdf.propTypes = {
  data: PropTypes.array,
  nameCollection: PropTypes.string.isRequired,
};
