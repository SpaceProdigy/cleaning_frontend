import { Box, styled } from "@mui/material";

export const StyledBadge = styled(Box)`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  right: -7px;
  top: -7px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const ImageWrapper = styled(Box)`
  position: relative;
  width: 200px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ src }) => src});
  background-color: #b0c4de;
  border-radius: 5px;
`;

export const LoaderWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #11111190;
  border-radius: 50%;
  z-index: 10;
`;

export const LoaderPercent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainWrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonWrapper = styled(Box)`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;
