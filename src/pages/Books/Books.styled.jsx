import { Box, styled } from "@mui/material";

export const WrapperPostUploader = styled(Box)`
  border-radius: 4px;
  max-width: 600px;
  width: 100%;
  max-height: 600px;
  overflow: auto;
  position: absolute;
  scrollbar-width: thin;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
