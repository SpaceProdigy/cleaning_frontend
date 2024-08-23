import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const WrapperClose = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 16px;
`;

export const WrapperInfo = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 5px 0px;
`;

export const WrapperInfoTitle = styled(Box)`
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 5px 16px;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.warning.main};
`;

export const WrapperInfoItem = styled(Box)`
  width: 100%;
  display: flex;
  gap: 30px;
  padding: 5px 16px;
  white-space: nowrap;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: transparent;
`;
