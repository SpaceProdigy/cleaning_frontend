import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { buttonText } from "../../../locales/drawerMenu";
import { StyledNavLink } from "../DrawerMenu.styled";
import HomeIcon from "@mui/icons-material/Home";

import PropTypes from "prop-types";
MainList.propTypes = {
  pathname: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default function MainList({ pathname, language, theme }) {
  return (
    <List>
      {buttonText.map(({ text, path }, index) => (
        <ListItem key={index} disablePadding>
          <StyledNavLink to={path} state={pathname}>
            <ListItemButton
              sx={{
                background: pathname === path && theme.palette.action.selected,
              }}
            >
              <ListItemIcon>{path === "/" && <HomeIcon />}</ListItemIcon>
              <ListItemText primary={text[language]} />
            </ListItemButton>
          </StyledNavLink>
        </ListItem>
      ))}
    </List>
  );
}
