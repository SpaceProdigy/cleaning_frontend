import { Box, Paper, styled } from "@mui/material";

export const MainWrapper = styled(Paper)`
  padding: 70px 20px 40px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow: auto;
`;

export const CloseIconWrapper = styled(Box)`
  position: absolute;
  right: 10px;
  top: 5px;
`;
