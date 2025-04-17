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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import CountertopsIcon from "@mui/icons-material/Countertops";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import BookIcon from "@mui/icons-material/Book";
// import { buttonScheduleText } from "../../../locales/drawerMenu";
import { Fragment, useEffect, useState } from "react";
import {
  buttonScheduleCorridorText,
  buttonScheduleKitchenText,
  buttonScheduleLessonsText,
  drawerLessonsCorridor,
  drawerTextCorridor,
  drawerTextKitchen,
} from "../../../locales/drawerMenu";
import { useSelector } from "react-redux";
import { selectAuthPermissions } from "../../../redux/authSlice";
ScheduleList.propTypes = {
  pathname: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default function ScheduleList({
  pathname,
  language,
  theme,
  toggleDrawer,
}) {
  const stylePathName = pathname.split("/").filter(Boolean)[1];
  const [expanded, setExpanded] = useState(false);
  const userPermissions = useSelector(selectAuthPermissions);

  const permissions = userPermissions.some(
    (item) => item === "superAdmin" || item === "books"
  );

  useEffect(() => {
    if (pathname.includes("kitchen")) {
      setExpanded("kitchen");
    }
    if (pathname.includes("Corridor")) {
      setExpanded("corridor");
    }
    if (pathname.includes("lessons") || pathname.includes("book")) {
      setExpanded("lessons");
    }
  }, [pathname]);

  const handleAccordionChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
        expanded={expanded === "corridor"}
        onChange={handleAccordionChange("corridor")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {drawerTextCorridor[language]}
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {buttonScheduleCorridorText.map(({ text, path }, index) => {
            const stylePath = path.split("/").filter(Boolean)[0];

            return (
              <List key={index} sx={{ p: 0 }} id="according">
                <ListItem disablePadding>
                  <StyledNavLink
                    to={path}
                    state={pathname}
                    onClick={() => toggleDrawer(false)}
                  >
                    <ListItemButton
                      sx={{
                        background:
                          stylePathName === stylePath &&
                          theme.palette.action.selected,
                      }}
                    >
                      <ListItemIcon>
                        <CleaningServicesIcon />
                      </ListItemIcon>
                      <ListItemText primary={text[language]} />
                    </ListItemButton>
                  </StyledNavLink>
                </ListItem>
              </List>
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
          border: "none",
          boxShadow: "none",
          m: 0,
          p: 0,
        }}
        expanded={expanded === "kitchen"}
        onChange={handleAccordionChange("kitchen")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {drawerTextKitchen[language]}
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {buttonScheduleKitchenText.map(({ text, path }, index) => {
            const stylePath = path.split("/").filter(Boolean)[0];

            return (
              <List key={index} sx={{ p: 0 }} id="according">
                <ListItem disablePadding>
                  <StyledNavLink
                    to={path}
                    state={pathname}
                    onClick={() => toggleDrawer(false)}
                  >
                    <ListItemButton
                      sx={{
                        background:
                          stylePathName === stylePath &&
                          theme.palette.action.selected,
                      }}
                    >
                      <ListItemIcon>
                        <CountertopsIcon />
                      </ListItemIcon>
                      <ListItemText primary={text[language]} />
                    </ListItemButton>
                  </StyledNavLink>
                </ListItem>
              </List>
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
          border: "none",
          boxShadow: "none",
          m: 0,
          p: 0,
        }}
        expanded={expanded === "lessons"}
        onChange={handleAccordionChange("lessons")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {drawerLessonsCorridor[language]}
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {buttonScheduleLessonsText.map(({ text, path }, index) => {
            const stylePath = path.split("/").filter(Boolean)[1];

            let isRender = true;

            if (path === "books" && !permissions) {
              isRender = false;
            } else {
              isRender = true;
            }
            return (
              <Fragment key={index}>
                {isRender && (
                  <List sx={{ p: 0 }} id="according">
                    <ListItem disablePadding>
                      <StyledNavLink
                        to={path}
                        state={pathname}
                        onClick={() => toggleDrawer(false)}
                      >
                        <ListItemButton
                          sx={{
                            background:
                              stylePathName === stylePath &&
                              theme.palette.action.selected,
                          }}
                        >
                          <ListItemIcon>
                            <BookIcon />
                          </ListItemIcon>
                          <ListItemText primary={text[language]} />
                        </ListItemButton>
                      </StyledNavLink>
                    </ListItem>
                  </List>
                )}
              </Fragment>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </List>
  );
}
