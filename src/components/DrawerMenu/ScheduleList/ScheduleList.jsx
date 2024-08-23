import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { StyledNavLink } from "../DrawerMenu.styled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { buttonScheduleText } from "../../../locales/drawerMenu";
import { useEffect, useState } from "react";
import { pathPages } from "../../../locales/pathPages";
ScheduleList.propTypes = {
  pathname: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default function ScheduleList({ pathname, language, theme }) {
  const isOpen = buttonScheduleText.findIndex(({ path }) => pathname === path);
  const [expanded, setExpanded] = useState(isOpen !== -1);

  useEffect(() => {
    setExpanded(isOpen !== -1);
  }, [pathname, isOpen]);

  const handleAccordionChange = (_, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <List sx={{ p: 0 }} id="according">
      <Accordion
        sx={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
          border: "none",
          boxShadow: "none",
          m: 0,
          p: 0,
        }}
        expanded={expanded}
        onChange={handleAccordionChange}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {language === "en" ? "Cleaning schedule" : "Графік прибирання"}
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {buttonScheduleText.map(({ text, path }, index) => (
            <ListItem key={index} disablePadding id="link">
              <StyledNavLink to={path} state={pathname}>
                <ListItemButton
                  sx={{
                    background:
                      pathname === path && theme.palette.action.selected,
                  }}
                >
                  <ListItemIcon>
                    {
                      (path = `${pathPages.blueCorridor}` && (
                        <CalendarMonthIcon />
                      ))
                    }
                  </ListItemIcon>
                  <ListItemText primary={text[language]} />
                </ListItemButton>
              </StyledNavLink>
            </ListItem>
          ))}
        </AccordionDetails>
      </Accordion>
    </List>
  );
}
