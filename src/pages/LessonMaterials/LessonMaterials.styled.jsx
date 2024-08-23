import { Box, Paper, styled } from "@mui/material";

export const ContentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextWrapper = styled(Paper)`
  border-radius: 10px;
  padding: 10px;
`;

export const ContentWrapper = styled(Paper)`
  position: relative;
  max-width: 400px;
  border-radius: 5px;
`;
