import { Paper, styled } from "@mui/material";

export const InfoWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`;

export const AdminWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`;

export const TextWrapper = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
