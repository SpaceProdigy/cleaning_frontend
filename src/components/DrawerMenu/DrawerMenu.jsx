import { Box, Divider, Drawer, useTheme } from "@mui/material";

import { useLocation } from "react-router-dom";
import {
  selectAppBarDrawer,
  selectLanguage,
  setAppBarDrawer,
} from "../../redux/localOperation";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthentificated } from "../../redux/authSlice";
import { logOutThunk } from "../../redux/authOparations";

import MainList from "./MainList/MainList";
import AuthList from "./AuthList/AuthList";
import ScheduleList from "./ScheduleList/ScheduleList";

export default function DrawerMenu() {
  const { pathname } = useLocation();

  const language = useSelector(selectLanguage);
  const appDruwerBar = useSelector(selectAppBarDrawer);
  const isAuthentificated = useSelector(selectAuthentificated);
  const dispatch = useDispatch();

  const toggleDrawer = (value) => {
    dispatch(setAppBarDrawer(value));
  };

  const hendleLogOut = () => dispatch(logOutThunk());

  const theme = useTheme();

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
      onClick={(e) => {
        if (e.target.closest("#link")) {
          toggleDrawer(false);
        }
        if (e.target.closest("#according")?.id) {
          return;
        }
        toggleDrawer(false);
      }}
    >
      <MainList pathname={pathname} language={language} theme={theme} />
      <Divider />
      <ScheduleList
        pathname={pathname}
        language={language}
        theme={theme}
        toggleDrawer={toggleDrawer}
      />

      <Divider />
      <Box sx={{ marginTop: "auto" }}>
        <Divider />
        <AuthList
          pathname={pathname}
          language={language}
          theme={theme}
          isAuthentificated={isAuthentificated}
          hendleLogOut={hendleLogOut}
        />
      </Box>
    </Box>
  );

  return (
    <div>
      <Drawer open={appDruwerBar} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
