import { Box, styled } from "@mui/material";

export const PostWrapper = styled(Box)`
  margin-bottom: 20px;
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
`;
export const IconButtonBox = styled(Box)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const PostWrapperBox = styled(Box)`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 20px;
`;
