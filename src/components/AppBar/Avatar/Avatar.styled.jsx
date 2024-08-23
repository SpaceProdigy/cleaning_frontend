import { Box, styled } from "@mui/material";
import unknown from "../../../pictures/accountPage/anonymous.png";

export const PhotoWrapper = styled(Box)`
  position: relative;
  background-image: ${({ src }) => `url(${src ? src : unknown})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
