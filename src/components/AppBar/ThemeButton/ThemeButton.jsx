import { Box, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../../../redux/localOperation";

export const ThemeButton = () => {
  const mode = useSelector(selectTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(mode === "dark" ? "light" : "dark"));
  };

  return (
    <Box sx={{ position: "relative" }}>
      <motion.div
        style={{ position: "absolute" }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: mode === "light" ? 0 : 1 }}
      >
        <IconButton onClick={toggleTheme}>
          <LightModeIcon />
        </IconButton>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        animate={{ scale: mode === "light" ? 1 : 0 }}
      >
        <IconButton onClick={toggleTheme}>
          <ModeNightIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
};
