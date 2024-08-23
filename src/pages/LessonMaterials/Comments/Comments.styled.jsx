import { Box, Paper, styled } from "@mui/material";

export const NoCommentsBox = styled(Box)`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentsBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  scrollbar-width: thin;
`;

export const SmsBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
`;
export const TextBox = styled(Paper)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;

export const AvatareBox = styled(Box)`
  position: relative;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

export const NoAvatareBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
export const HelperTextBox = styled(Box)`
  position: absolute;
  left: 0;
  bottom: -25px;
`;

export const WrapperButtonSend = styled(Box)`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(0, -50%);
  z-index: 10;
`;

export const WrapperCommentUpdete = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
