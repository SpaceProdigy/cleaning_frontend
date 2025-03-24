import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`;

export const WrapperClose = styled(Box)`
  position: absolute;
  right: 5px;
  top: 5px;
`;
