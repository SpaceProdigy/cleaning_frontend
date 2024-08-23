import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import iconUA from "/src/pictures/appBar/ukraine.png";
import iconEN from "/src/pictures/appBar/united-kingdom.png";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguage } from "../../../redux/localOperation";

export const LanguageButton = () => {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const toggleLanguage = () => {
    dispatch(setLanguage(language === "en" ? "ua" : "en"));
  };
  return (
    <Box sx={{ position: "relative" }}>
      <motion.div
        style={{ position: "absolute" }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: language === "en" ? 0 : 1 }}
      >
        <IconButton onClick={toggleLanguage}>
          <img alt="icon language" src={iconUA} width={25} />
        </IconButton>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        animate={{ scale: language === "en" ? 1 : 0 }}
      >
        <IconButton onClick={toggleLanguage}>
          <img alt="icon language" src={iconEN} width={25} />
        </IconButton>
      </motion.div>
    </Box>
  );
};
