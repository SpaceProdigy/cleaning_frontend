import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tooltip,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

import { RulesWrapper, StyledLink, StyledTypography } from "./Rulse.styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import { telegramGroups } from "../../locales/telegram";

Rulse.propTypes = {
  cleaningRules: PropTypes.string,
  nameCollection: PropTypes.string,
};

export default function Rulse({ cleaningRules, nameCollection }) {
  const language = useSelector(selectLanguage);
  return (
    <Accordion>
      <RulesWrapper elevation={2}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span">
            <Typography variant="button">
              {language === "en" ? "RULES" : "ПРАВИЛА"}
            </Typography>
          </Typography>
        </AccordionSummary>
      </RulesWrapper>
      <RulesWrapper elevation={2}>
        <AccordionDetails>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {cleaningRules}
          </Typography>
          <Tooltip
            title={
              language === "en"
                ? "Open a group in Telegram"
                : "Відкрити групу в Telegram"
            }
          >
            <StyledLink
              href={telegramGroups[nameCollection] ?? null}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledTypography component="div" variant="button">
                {language === "en" ? "JOIN" : "ПРИЕДНАТИСЯ"}
                {<TelegramIcon color="info" fontSize="large" />}
              </StyledTypography>
            </StyledLink>
          </Tooltip>
        </AccordionDetails>
      </RulesWrapper>
    </Accordion>
  );
}
