import { Box, Button, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const StyleLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
