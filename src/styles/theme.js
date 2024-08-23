import { createTheme } from "@mui/material/styles";

const mainTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "background-color 1s ease, color 1s ease",
          },
          html: {
            scrollBehavior: "smooth",
          },
          ".styledLink": {
            color: "inherit",
            textDecoration: "none",
            transition: "background-color 0.5s ease, color 0.5s ease",
            "&:hover": {
              color: mode === "dark" ? "#000080" : "#0000FF",
            },
          },
          ".styledP": {
            fontFamily: "inherit",
            margin: 0,
          },

          ".styledUl": {
            paddingLeft: 20,
          },
        },
      },
    },
  });

export default mainTheme;
