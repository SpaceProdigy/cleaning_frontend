import { useSelector } from "react-redux";
import {
  AvatarUser,
  ChatWrapper,
  InputWrapper,
  MessageWrapper,
  NameBox,
  NameWrapper,
  PhotoWrapper,
  Sender,
  TextWrapper,
  TimeBox,
  TimeWrapper,
} from "./Chat.styled";
import { useState } from "react";
import { selectAuthUser } from "../../redux/authSlice";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
// import { nanoid } from "@reduxjs/toolkit";
// import io from "socket.io-client";

import CustomizedInput from "./Input";

// const ENV = import.meta.env;

// const BASE_URL = ENV.VITE_BASE_URL;
// const socket = io.connect(BASE_URL);

export const Chat = () => {
  const user = useSelector(selectAuthUser);

  const [chatMessages, setChatMessages] = useState([]);

  // useEffect(() => {

  //   socket.on("chat-message", newSms);

  //   return () => {
  //     socket.off("chat-message",);
  //   };
  // }, []);

  return (
    <ChatWrapper>
      <MessageWrapper>
        {chatMessages.map((sender) => {
          const isYou = sender?.uid === user.uid;
          return (
            <Sender
              key={sender.id}
              isYou={isYou}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <AvatarUser>
                <PhotoWrapper src={sender?.photoURL} />
              </AvatarUser>

              <TextWrapper>
                <NameBox isYou={isYou}>
                  <NameWrapper isYou={isYou}>
                    <Typography variant="overline">
                      {sender?.displayName}
                    </Typography>
                  </NameWrapper>
                </NameBox>

                <Typography
                  variant="body2"
                  paddingLeft={"7px"}
                  style={{
                    wordBreak: "break-word", // Разрывает слишком длинные слова
                  }}
                >
                  {sender?.text}
                </Typography>

                <TimeBox isYou={isYou}>
                  <TimeWrapper>
                    <Typography variant="caption">
                      {sender?.time
                        ? dayjs(sender?.time).format("DD-MM-YYYY")
                        : ""}
                    </Typography>
                    <Typography variant="caption">
                      {sender?.time ? dayjs(sender?.time).format("hh:mm") : ""}
                    </Typography>
                  </TimeWrapper>
                </TimeBox>
              </TextWrapper>
            </Sender>
          );
        })}
      </MessageWrapper>
      <InputWrapper>
        <CustomizedInput setChatMessages={setChatMessages} />
      </InputWrapper>
    </ChatWrapper>
  );
};
