import { Box, Paper, styled } from "@mui/material";

export const InfoWrapper = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`;

export const AdminWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`;

export const WrapperDeleteButton = styled(Box)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const TextWrapper = styled(Paper)`
  position: relative;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`;

export const FormWrapper = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

export const InputsWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  gap: 20px;
`;
