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
export const StyledImage = styled("img")`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  cursor: zoom-in;
  transition: scale 400ms ease-in-out;

  &:hover {
    scale: 1.05;
  }
`;
