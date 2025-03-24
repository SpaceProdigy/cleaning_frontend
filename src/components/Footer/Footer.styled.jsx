import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const MainWrapper = styled(Box)`
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 20px;
`;

export const DonateWrapper = styled(Box)`
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Link = styled("a")`
  text-decoration: none;
  color: inherit;
`;

// eslint-disable-next-line react-refresh/only-export-components
export const S_QuoteWrapper = styled(Box)`
  text-align: center;
`;

// eslint-disable-next-line react-refresh/only-export-components
export const M_QuoteWrapper = motion.create(S_QuoteWrapper); // Use motion.create instead of motion()
