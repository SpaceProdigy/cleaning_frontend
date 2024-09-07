import { Box, IconButton, TextField, Typography } from "@mui/material";
import {
  AvatareBox,
  CommentsBox,
  HelperTextBox,
  NoAvatareBox,
  NoCommentsBox,
  SmsBox,
  TextBox,
  WrapperButtonSend,
  WrapperCommentUpdete,
} from "./Comments.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import {
  handleDeleteComment,
  handleSentComment,
} from "../LessonMaterialsFunctions";
import { useDispatch } from "react-redux";

export default function Comments({
  language,
  comments,
  theme,
  currentUser,
  authentificated,
  textComment,
  isLoading,
  setTextComment,
  name,
  lessonMaterials,
  permissions,
}) {
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      width="100%"
      height="100%"
      minHeight="170px"
    >
      {(!comments || comments?.length === 0) && (
        <NoCommentsBox>
          <Typography variant="h6">
            {language === "en" ? "There are no comments" : "Немає коментарів"}
          </Typography>
        </NoCommentsBox>
      )}

      {(comments || comments?.length > 0) && (
        <CommentsBox>
          {[...comments]?.reverse()?.map(({ text, user, time, id }) => (
            <SmsBox key={id}>
              {currentUser?.uid !== user?.uid ? (
                user?.photoURL ? (
                  <AvatareBox src={user?.photoURL} />
                ) : (
                  <NoAvatareBox>
                    <AccountCircleIcon fontSize="large" />
                  </NoAvatareBox>
                )
              ) : (
                <></>
              )}
              <TextBox elevation={2}>
                <WrapperCommentUpdete
                  sx={
                    currentUser?.uid === user?.uid
                      ? { bottom: 5, right: 5 }
                      : { bottom: 5, left: 5 }
                  }
                >
                  {currentUser?.uid === user?.uid ? (
                    <>
                      <IconButton
                        sx={{ width: "18px", height: "18px" }}
                        color="info"
                      >
                        <EditIcon sx={{ width: "18px", height: "18px" }} />
                      </IconButton>

                      <IconButton
                        onClick={() =>
                          handleDeleteComment({
                            currentName: name,
                            lessonMaterials,
                            dispatch,
                            commentId: id,
                          })
                        }
                        sx={{ width: "18px", height: "18px" }}
                        color="error"
                      >
                        <DeleteIcon sx={{ width: "18px", height: "18px" }} />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      {permissions && (
                        <IconButton
                          onClick={() =>
                            handleDeleteComment({
                              currentName: name,
                              lessonMaterials,
                              dispatch,
                              commentId: id,
                            })
                          }
                          sx={{ width: "18px", height: "18px" }}
                          color="error"
                        >
                          <DeleteIcon sx={{ width: "18px", height: "18px" }} />
                        </IconButton>
                      )}
                    </>
                  )}
                </WrapperCommentUpdete>
                <Typography
                  variant="caption"
                  textAlign={currentUser?.uid === user?.uid ? "right" : "left"}
                  color={theme === "dark" ? "#008080" : "#2F4F4F"}
                >
                  {user.displayName}
                </Typography>
                <Typography
                  variant="subtitle2"
                  whiteSpace="wrap"
                  sx={{ wordBreak: "break-word" }}
                >
                  {text}
                </Typography>

                <Typography
                  variant="caption"
                  textAlign={currentUser?.uid === user?.uid ? "left" : "right"}
                  color={theme === "dark" ? "#008000" : "#228B22"}
                >
                  {time}
                </Typography>
              </TextBox>

              {currentUser?.uid === user?.uid ? (
                user?.photoURL ? (
                  <Box>
                    <AvatareBox src={user?.photoURL} />
                  </Box>
                ) : (
                  <NoAvatareBox>
                    <AccountCircleIcon fontSize="large" />
                  </NoAvatareBox>
                )
              ) : (
                <></>
              )}
            </SmsBox>
          ))}
        </CommentsBox>
      )}
      {authentificated && (
        <Box width="100%" position="relative">
          <HelperTextBox>
            <Typography variant="caption" color="#FF4500">
              {textComment[name]?.length > 500 ? "Max length 500" : ""}
            </Typography>
          </HelperTextBox>
          <TextField
            fullWidth
            size="small"
            placeholder={
              language === "en" ? "Add your comment" : "Додайте свій коментар"
            }
            sx={{
              ".MuiOutlinedInput-input": {
                padding: "15px 50px  15px 15px",
              },
            }}
            value={textComment[name] ?? ""}
            onChange={(e) =>
              setTextComment((prevstate) => {
                return {
                  ...prevstate,
                  [name]: e.target.value,
                };
              })
            }
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleSentComment({
                  currentName: name,
                  lessonMaterials,
                  textComment,
                  currentUser,
                  dispatch,
                  setTextComment,
                });
              }
            }}
          />
          <WrapperButtonSend>
            <IconButton
              color="info"
              onClick={() =>
                handleSentComment({
                  currentName: name,
                  lessonMaterials,
                  textComment,
                  currentUser,
                  dispatch,
                  setTextComment,
                })
              }
              disabled={isLoading}
            >
              <SendIcon />
            </IconButton>
          </WrapperButtonSend>
        </Box>
      )}
    </Box>
  );
}

Comments.propTypes = {
  language: PropTypes.string.isRequired,
  comments: PropTypes.array,
  theme: PropTypes.string.isRequired,
  currentUser: PropTypes.object,
  authentificated: PropTypes.bool.isRequired,
  textComment: PropTypes.object.isRequired,
  setTextComment: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  lessonMaterials: PropTypes.object.isRequired,
  permissions: PropTypes.bool.isRequired,
};
