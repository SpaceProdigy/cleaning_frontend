import { Box, styled } from "@mui/material";
import unknown from "../../../pictures/accountPage/anonymous.png";

export const PhotoWrapper = styled(Box)`
  position: relative;
  background-image: ${({ src }) => `url(${src ? src : unknown})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
`;

export const EditWrapper = styled(Box)`
  position: absolute;
  bottom: 0px;
  right: -20px;
`;

export const AddWrapper = styled(Box)`
  position: absolute;
  bottom: 0px;
  right: -65px;
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
