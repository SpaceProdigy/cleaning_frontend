import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { buttonAuthText } from "../../../locales/drawerMenu";
import { StyledNavLink } from "../DrawerMenu.styled";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";

import PropTypes from "prop-types";
AuthList.propTypes = {
  pathname: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  isAuthentificated: PropTypes.bool.isRequired,
  hendleLogOut: PropTypes.func.isRequired,
};

export default function AuthList({
  pathname,
  language,
  theme,
  isAuthentificated,
  hendleLogOut,
}) {
  return (
    <List>
      {isAuthentificated ? (
        <ListItem disablePadding>
          <ListItemButton onClick={hendleLogOut}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={language === "en" ? "Log out" : "Вийти"} />
          </ListItemButton>
        </ListItem>
      ) : (
        buttonAuthText.map(({ text, path }, index) => (
          <ListItem disablePadding key={index}>
            <StyledNavLink to={path}>
              <ListItemButton
                sx={{
                  background:
                    pathname === path && theme.palette.action.selected,
                }}
              >
                <ListItemIcon>
                  {path === "/signup" && <AppRegistrationIcon />}
                  {path === "/signin" && <LoginIcon />}
                </ListItemIcon>
                <ListItemText primary={text[language]} />
              </ListItemButton>
            </StyledNavLink>
          </ListItem>
        ))
      )}
    </List>
  );
}
