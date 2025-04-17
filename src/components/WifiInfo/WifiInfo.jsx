import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
  Tooltip,
  Box,
  IconButton,
  Modal,
} from "@mui/material";
import { useSelector } from "react-redux";
import { QRCodeSVG } from "qrcode.react";
import { selectLanguage } from "../../redux/localOperation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { toast } from "react-toastify";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import { useState } from "react";

export default function WifiInfo() {
  const language = useSelector(selectLanguage);
  const [open, setOpen] = useState(false);
  const [isExpandet, seIsExpandet] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    seIsExpandet(null);
  };

  const wifiSSIDBorneGuest = "Borne-Guest";
  const wifiPasswordBorneGuest = "7621AE103";
  const qrValueBorneGuest = `WIFI:T:WPA;S:${wifiSSIDBorneGuest};P:${wifiPasswordBorneGuest};;`;

  const handleCopyBorneGuest = () => {
    navigator.clipboard.writeText(wifiPasswordBorneGuest);

    toast.success(
      language === "ua" ? "Пароль скопійовано!" : "Password copied!"
    );
  };

  const wifiSSIDZwanenhofGuest = "Zwanenhof Guest";
  const wifiPasswordZwanenhofGuest = "Welkom@Zwanenhof";

  const qrValueZwanenhofGuest = `WIFI:T:WPA;S:${wifiSSIDZwanenhofGuest};P:${wifiPasswordZwanenhofGuest};;`;

  const handleCopyZwanenhofGuest = () => {
    navigator.clipboard.writeText(wifiPasswordZwanenhofGuest);

    toast.success(
      language === "ua" ? "Пароль скопійовано!" : "Password copied!"
    );
  };

  return (
    <Box>
      <IconButton variant="outlined" onClick={handleClickOpen}>
        <WifiPasswordIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "auto",
        }}
      >
        <Box>
          <Accordion
            sx={{ maxWidth: "320px", width: "100%" }}
            expanded={isExpandet === "BorneGuest"}
            onClick={() =>
              seIsExpandet((preState) =>
                preState === "BorneGuest" ? null : "BorneGuest"
              )
            }
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {language === "ua"
                  ? "Інформація про Wi-Fi Borne-Guest"
                  : "Wi-Fi Information Borne-Guest"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="body1" mb={1}>
                  SSID: <strong>{wifiSSIDBorneGuest}</strong>
                  <br />
                  <Tooltip
                    title={
                      language === "ua"
                        ? "Натисніть щоб скопіювати"
                        : "Click to copy"
                    }
                  >
                    <strong
                      style={{ cursor: "pointer", color: "#1976d2" }}
                      onClick={handleCopyBorneGuest}
                    >
                      {language === "ua" ? "Пароль" : "Password"}:{" "}
                      {wifiPasswordBorneGuest}
                    </strong>
                  </Tooltip>
                </Typography>
                <Typography variant="subtitle1" mb={1}>
                  {language === "ua"
                    ? "Або відскануйте QR-код:"
                    : "Or scan the QR code:"}
                </Typography>
                <QRCodeSVG value={qrValueBorneGuest} size={150} />
              </Paper>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ maxWidth: "320px", width: "100%" }}
            expanded={isExpandet === "ZwanenhofGuest"}
            onClick={() =>
              seIsExpandet((preState) =>
                preState === "ZwanenhofGuest" ? null : "ZwanenhofGuest"
              )
            }
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {language === "ua"
                  ? "Інформація про Wi-Fi Zwanenhof Guest"
                  : "Wi-Fi Information Zwanenhof Guest"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="body1" mb={1}>
                  SSID: <strong>{wifiSSIDZwanenhofGuest}</strong>
                  <br />
                  <Tooltip
                    title={
                      language === "ua"
                        ? "Натисніть щоб скопіювати"
                        : "Click to copy"
                    }
                  >
                    <strong
                      style={{ cursor: "pointer", color: "#1976d2" }}
                      onClick={handleCopyZwanenhofGuest}
                    >
                      {language === "ua" ? "Пароль" : "Password"}:{" "}
                      {wifiPasswordZwanenhofGuest}
                    </strong>
                  </Tooltip>
                </Typography>
                <Typography variant="subtitle1" mb={1}>
                  {language === "ua"
                    ? "Або відскануйте QR-код:"
                    : "Or scan the QR code:"}
                </Typography>
                <QRCodeSVG value={qrValueZwanenhofGuest} size={150} />
              </Paper>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Modal>
    </Box>
  );
}
