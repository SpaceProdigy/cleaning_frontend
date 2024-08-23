import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({ theme }) => theme?.palette?.background?.paper};
  box-shadow: ${({ theme }) => theme.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`;

export const StyledLink = styled(NavLink)`
  color: transparent;
  text-decoration: none;
`;

export const WrapperBack = styled(Box)`
  position: absolute;
  left: 15px;
  top: 15px;
`;
export const WrapperClose = styled(Box)`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const StyledInput = styled("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`;

export const WrapperNumberBox = styled(Box)`
  position: absolute;
  display: flex;
  gap: 16px;
  top: 5px;
  left: -5px;

  @keyframes shake-horizontal {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      transform: translateX(10px);
    }
    80% {
      transform: translateX(8px);
    }
    90% {
      transform: translateX(-8px);
    }
  }

  @keyframes shake-vertical {
    0%,
    100% {
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateY(-8px);
    }
    20%,
    40%,
    60% {
      transform: translateY(8px);
    }
    80% {
      transform: translateY(6.4px);
    }
    90% {
      transform: translateY(-6.4px);
    }
  }
  animation: ${({ error }) =>
    error
      ? "shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both"
      : ""};
  animation: ${({ success }) =>
    success
      ? "shake-vertical 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
      : ""};
`;

export const NumberBox = styled(Box)`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ borderColor }) => borderColor};

  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  animation: ${({ tab }) => (tab ? "vibrate-1 0.3s linear both" : "")};
`;
