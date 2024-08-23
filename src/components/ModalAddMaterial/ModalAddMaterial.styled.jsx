import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const ModalWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 80%;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[11]};
  padding: 40px;
  border-radius: 5px;

  overflow-y: auto;
  scrollbar-width: thin;
  z-index: 100;
`;

export const MotionWrapper = motion(ModalWrapper);

export const WrapperClose = styled(Box)`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const Overlay = styled(Box)`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #11111190;
`;
