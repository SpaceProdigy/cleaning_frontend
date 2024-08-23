import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, useTheme } from "@mui/material";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const isVisible = scrollTop > 300;

      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 10,
        right: 15,
        background: theme.palette.mode === "dark" ? "#00000090" : "#ffffffbb",
        borderRadius: 5,
        zIndex: 500,
      }}
    >
      <IconButton
        style={{ display: isVisible ? "flex" : "none" }}
        onClick={handleScrollToTop}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Box>
  );
};
