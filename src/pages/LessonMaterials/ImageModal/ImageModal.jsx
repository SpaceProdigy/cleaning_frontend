import { Badge, Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import PropTypes from "prop-types";
import {
  CommentWrapper,
  ImageBox,
  Wrapper,
  WrapperButtonClose,
  WrapperButtonComments,
} from "./ImageModal.styled";
import Comments from "../Comments/Comments";
import CommentIcon from "@mui/icons-material/Comment";

export default function ImageModal({
  isLoading,
  isImagesModal,
  setIsImagesModal,
  language,
  theme,
  currentUser,
  authentificated,
  textComment,
  setTextComment,
  lessonMaterials,
  isImages,
  openComment,
  setOpenComment,
  permissions,
}) {
  const currentInfo = isImages.find(({ name }) => name === isImagesModal.name);
  return (
    <>
      <Modal
        open={Boolean(isImagesModal)}
        onClose={() => {
          setIsImagesModal(false);
          setOpenComment(false);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          width="90%"
          height="90%"
          maxWidth={1200}
        >
          <Wrapper height="80%">
            <ImageBox src={isImagesModal?.images}>
              <WrapperButtonClose>
                <IconButton
                  type="button"
                  onClick={() => {
                    setIsImagesModal(false);
                    setOpenComment(false);
                  }}
                  disabled={isLoading}
                >
                  <CloseIcon />
                </IconButton>
              </WrapperButtonClose>

              <WrapperButtonComments>
                <IconButton
                  color="info"
                  onClick={() => setOpenComment((prevState) => !prevState)}
                >
                  <Badge
                    badgeContent={currentInfo?.comments?.length}
                    color="warning"
                  >
                    <CommentIcon />
                  </Badge>
                </IconButton>
              </WrapperButtonComments>
            </ImageBox>
          </Wrapper>
          {openComment && (
            <CommentWrapper>
              <Comments
                language={language}
                comments={currentInfo?.comments}
                theme={theme}
                currentUser={currentUser}
                authentificated={authentificated}
                textComment={textComment}
                isLoading={isLoading}
                setTextComment={setTextComment}
                name={isImagesModal?.name}
                lessonMaterials={lessonMaterials}
                permissions={permissions}
              />
            </CommentWrapper>
          )}
        </Box>
      </Modal>
    </>
  );
}

ImageModal.propTypes = {
  isImagesModal: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
    .isRequired,
  setIsImagesModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  currentUser: PropTypes.object,
  setTextComment: PropTypes.func.isRequired,
  authentificated: PropTypes.bool.isRequired,
  textComment: PropTypes.object.isRequired,
  lessonMaterials: PropTypes.object.isRequired,
  isImages: PropTypes.array.isRequired,
  openComment: PropTypes.bool.isRequired,
  setOpenComment: PropTypes.func.isRequired,
  permissions: PropTypes.bool.isRequired,
};
