import { Box, styled } from "@mui/material";

export const WrapperNavigateButton = styled(Box)`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const LoaderWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #11111190;
  border-radius: 50%;
  z-index: 10;
`;

export const LoaderPercent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
