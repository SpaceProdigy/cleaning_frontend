import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tooltip,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

import {
  AccordionWrapper,
  RulesWrapper,
  StyledLink,
  StyledTypography,
} from "./Rulse.styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import { telegramGroups } from "../../locales/telegram";
import NotCleanTable from "../NotCleanTable/NotCleanTable";
import { selectSchedulesLoading } from "../../redux/cleaningSlice";
import PropTypes from "prop-types";
Rulse.propTypes = {
  cleaningRules: PropTypes.string,
  nameCollection: PropTypes.string,
};

export default function Rulse({ cleaningRules, nameCollection }) {
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectSchedulesLoading);
  return (
    <AccordionWrapper>
      <Accordion disabled={isLoading}>
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
            {telegramGroups[nameCollection] && (
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
            )}
          </AccordionDetails>
        </RulesWrapper>
      </Accordion>
      <Accordion disabled={isLoading}>
        <RulesWrapper elevation={2}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">
              <Typography variant="button">
                {language === "en"
                  ? "List of Those Who Didn't Clean"
                  : "Список тих, хто не здійснив прибирання"}
              </Typography>
            </Typography>
          </AccordionSummary>
        </RulesWrapper>
        <RulesWrapper elevation={2}>
          <AccordionDetails>
            <NotCleanTable nameCollection={nameCollection} />
          </AccordionDetails>
        </RulesWrapper>
      </Accordion>
    </AccordionWrapper>
  );
}
