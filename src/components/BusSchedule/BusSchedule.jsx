import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import { noticeEn, noticeUa, timeArr } from "./text";

export default function BusSchedule() {
  const language = useSelector(selectLanguage);
  const isUa = language === "ua";

  return (
    <Paper sx={{ p: "20px", my: 2, width: "100%" }}>
      <Box sx={{ overflow: "auto" }}>
        <Typography variant="h6" textAlign="center" mb={2}>
          {isUa
            ? "Автобусний маршрут Борн - Азело (вівторок - субота)"
            : "Born-Azelo bus route (Tuesday - Saturday)"}
        </Typography>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            minWidth: "800px",
          }}
        >
          <thead>
            <tr>
              <th>Station NS</th>
              <th>NETTORAMA</th>
              <th>MM</th>
              <th>ZW</th>
              <th>KRL</th>
              <th>ALDI/PLUS</th>
              <th>AH/LIDL/MARKT</th>
              <th>Station NS</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {timeArr.map((row, i) => (
              <tr key={i}>
                {row.length === 1 ? (
                  <td
                    colSpan="8"
                    style={{
                      fontStyle: "italic",
                      textAlign: "right",
                      border: "1px solid #ccc",
                    }}
                  >
                    {row[0]}
                  </td>
                ) : (
                  row.map((cell, j) => (
                    <td key={j} style={{ border: "1px solid #ccc" }}>
                      {cell}
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
      <Accordion sx={{ mt: 3 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">
            {isUa
              ? "Пояснення та зміни до графіку"
              : "Schedule explanation and updates"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" whiteSpace="pre-line">
            {isUa ? noticeUa : noticeEn}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}
