import {
  // Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  // buttonScheduleCorridorText,
  // buttonScheduleKitchenText,
  buttonText,
  // drawerTextCorridor,
  // drawerTextKitchen,
} from "../../../locales/drawerMenu";
import { StyledNavLink } from "../DrawerMenu.styled";
import HomeIcon from "@mui/icons-material/Home";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
// import CountertopsIcon from "@mui/icons-material/Countertops";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectAuthPermissions } from "../../../redux/authSlice";
import { Fragment } from "react";
MainList.propTypes = {
  pathname: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default function MainList({ pathname, language, theme }) {
  const userPermissions = useSelector(selectAuthPermissions);

  const permissions = userPermissions.some(
    (item) => item === "superAdmin" || item === "pdf"
  );

  return (
    <List>
      {buttonText.map(({ text, path }, index) => {
        let isRender = true;

        if (path === "pdf" && !permissions) {
          isRender = false;
        } else {
          isRender = true;
        }
        return (
          <Fragment key={index}>
            {isRender && (
              <ListItem disablePadding>
                <StyledNavLink to={path} state={pathname}>
                  <ListItemButton
                    sx={{
                      background:
                        pathname === path && theme.palette.action.selected,
                    }}
                  >
                    {path === "/" && (
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                    )}
                    {path === "pdf" && permissions && (
                      <ListItemIcon>
                        <PictureAsPdfIcon />
                      </ListItemIcon>
                    )}

                    <ListItemText primary={text[language]} />
                  </ListItemButton>
                </StyledNavLink>
              </ListItem>
            )}
          </Fragment>
        );
      })}
      {/* <ListItem>
        <ListItemText secondary={drawerTextCorridor[language]} />
      </ListItem>
      <Divider />

      {buttonScheduleCorridorText.map(({ text, path }, index) => (
        <ListItem key={index} disablePadding>
          <StyledNavLink to={path} state={pathname}>
            <ListItemButton
              sx={{
                background: pathname === path && theme.palette.action.selected,
              }}
            >
              <ListItemIcon>
                <CleaningServicesIcon />
              </ListItemIcon>
              <ListItemText primary={text[language]} />
            </ListItemButton>
          </StyledNavLink>
        </ListItem>
      ))}
      <ListItem>
        <ListItemText secondary={drawerTextKitchen[language]} />
      </ListItem>
      <Divider />
      {buttonScheduleKitchenText.map(({ text, path }, index) => (
        <ListItem key={index} disablePadding>
          <StyledNavLink to={path} state={pathname}>
            <ListItemButton
              sx={{
                background: pathname === path && theme.palette.action.selected,
              }}
            >
              <ListItemIcon>
                <CountertopsIcon />
              </ListItemIcon>
              <ListItemText primary={text[language]} />
            </ListItemButton>
          </StyledNavLink>
        </ListItem>
      ))} */}
    </List>
  );
}
