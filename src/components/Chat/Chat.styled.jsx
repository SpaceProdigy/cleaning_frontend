import { Box, FormControl, Paper, styled } from "@mui/material";
import unknown from "../../pictures/accountPage/anonymous.png";
import { motion } from "framer-motion";

export const ChatWrapper = styled(Box)`
  width: 100%;
  margin: 20px 0;
`;

export const StyledSender = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isYou",
})`
  width: 100%;
  display: flex;
  align-items: flex-end;

  flex-direction: ${({ isYou }) => (isYou ? "row" : "row-reverse")};
  gap: 10px;
`;

export const Sender = motion(StyledSender);

export const AvatarUser = styled(Box)`
  margin-bottom: 10px;
`;

export const TextWrapper = styled(Box)`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  background-color: #777;
  padding: 10px;
  border-radius: 7px;
`;

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

export const TimeBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isYou",
})`
  margin-top: 5px;
  display: flex;
  justify-content: ${({ isYou }) => (isYou ? "flex-end" : "flex-start")};
`;

export const TimeWrapper = styled(Box)`
  display: flex;
  gap: 5px;

  padding: 0 7px;

  background: #11111130;
  border-radius: 7px;
`;

export const NameBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isYou",
})`
  display: flex;
  justify-content: ${({ isYou }) => (isYou ? "flex-start" : "flex-end")};
`;

export const NameWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isYou",
})`
  display: inline-block;
  padding: 0 7px;
  background: ${({ isYou }) => (isYou ? "#07ce3540" : "#e8ef8050")};
  border-radius: 7px;
`;

export const MessageWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 200px;
  margin: 20px 0;
  padding: 10px;
  border-radius: 10px;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    margin: 7px;
  }
`;

export const StyledTextField = styled(FormControl)`
  textarea::-webkit-scrollbar {
    width: 5px; /* ширина скроллбара */
  }

  & textarea::-webkit-scrollbar-thumb {
    background-color: #ffffff40; /* цвет ползунка */
    border-radius: 10px;
  }

  & textarea::-webkit-scrollbar-track {
    background-color: #88888820;
  }
`;

export const InputWrapper = styled(Box)`
  position: relative;
`;

export const ButtonWrapper = styled(Box)`
  position: absolute;
  bottom: 10px;
  right: 5px;
`;
