import { Box, styled } from "@mui/material";

export const MainWrapper = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111111aa;
  z-index: 10;
`;

export const TextWrapper = styled(Box)`
  margin: 30px;
`;
