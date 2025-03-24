import { Box, Paper, styled } from "@mui/material";

export const MainWrapper = styled(Paper)`
  flex: 0 0 auto;
  width: 100%;
  max-width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 4px;
`;

export const NoImageWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled(Box)`
  width: 100%;
  /* height: 100%; */
  max-width: 300px;
  max-height: 50px;
  display: flex;
  overflow: auto;
  scrollbar-width: thin;
`;

export const TextWrapper = styled(Box)`
  padding: 10px;
  width: 100%;
  height: 100%;
  max-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;
`;
export const DescriptionWrapper = styled(Box)`
  width: 100%;
  max-height: 120px;

  overflow: hidden;
`;
