import { Box, Paper, styled } from "@mui/material";

export const Wrapper = styled(Paper)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentWrapper = styled(Paper)`
  width: 100%;
  max-height: 60%;
  min-height: 170px;
  overflow: hidden;
`;

export const ImageBox = styled(Box)`
  position: relative;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 5px 5px 0 0;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const WrapperButtonClose = styled(Box)`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10;
`;

export const WrapperButtonComments = styled(Box)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 10;
`;
