import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const S_WrapperTitle = styled(Box)`
  width: 90%;
  max-width: 500px;
  overflow-y: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#000000bb" : "#ffffffbb"};
  padding: 15px;
  border-radius: 5px;
  scrollbar-width: thin;
`;

export const M_WrapperTitle = motion(S_WrapperTitle);

export const S_WrapperDescription = styled(Box)`
  height: ${({ matches500 }) => (matches500 === "false" ? "70px" : "")};

  overflow-y: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#000000bb" : "#ffffffbb"};
  padding: 15px;
  scrollbar-width: thin;
`;

export const M_WrapperDescription = motion(S_WrapperDescription);

export const S_Wrapper = styled(Box)(({ theme, imageurl }) => ({
  width: "100%",
  position: "relative",
  backgroundImage: `url(${imageurl})`,

  [theme.breakpoints.up("lg")]: {
    height: "600px",
  },
  [theme.breakpoints.between(900, 1200)]: {
    height: "500px",
  },
  [theme.breakpoints.between(400, 900)]: {
    height: "400px",
  },
  [theme.breakpoints.down(400)]: {
    height: "300px",
  },

  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "5px",
}));

export const M_Wrapper = motion(S_Wrapper);
