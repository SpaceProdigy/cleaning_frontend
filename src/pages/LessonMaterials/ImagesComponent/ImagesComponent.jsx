import { Box, Chip, Divider, IconButton } from "@mui/material";
import {
  ContentBox,
  ContentWrapper,
  ImageBox,
  ImageBoxWrapper,
  WrapperButtonDelete,
} from "./ImagesComponent.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Comments from "../Comments/Comments";

export default function ImagesComponent({
  isImages,
  language,
  permissions,
  handleDeleteFile,
  isLoading,
  setIsImagesModal,
  lessonMaterials,
  currentUser,
  authentificated,
  theme,
  textComment,
  setTextComment,
}) {
  useEffect(() => {
    if (isImages) {
      isImages.map((e) => {
        setTextComment((prevstate) => {
          return {
            ...prevstate,
            [e.name]: "",
          };
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentBox>
      {isImages?.length !== 0 && (
        <Divider sx={{ m: 2, width: "100%" }}>
          <Chip label="IMAGE" />
        </Divider>
      )}

      {isImages?.length > 0 &&
        isImages?.map(({ images, comments, name }, index) => (
          <Box key={index} position="relative">
            {images && (
              <ContentWrapper>
                {permissions && (
                  <WrapperButtonDelete>
                    <IconButton
                      type="button"
                      color="error"
                      onClick={() => handleDeleteFile(name)}
                      disabled={isLoading}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </WrapperButtonDelete>
                )}
                <ImageBoxWrapper>
                  <ImageBox
                    src={images}
                    onClick={() => setIsImagesModal({ images, comments, name })}
                  />
                </ImageBoxWrapper>
                <Box height="170px" width="100%">
                  <Comments
                    permissions={permissions}
                    language={language}
                    comments={comments}
                    theme={theme}
                    currentUser={currentUser}
                    authentificated={authentificated}
                    textComment={textComment}
                    isLoading={isLoading}
                    setTextComment={setTextComment}
                    name={name}
                    lessonMaterials={lessonMaterials}
                  />
                </Box>
              </ContentWrapper>
            )}
          </Box>
        ))}
    </ContentBox>
  );
}

ImagesComponent.propTypes = {
  isImages: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
  permissions: PropTypes.bool.isRequired,
  handleDeleteFile: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setIsImagesModal: PropTypes.func.isRequired,
  lessonMaterials: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  theme: PropTypes.string.isRequired,
  authentificated: PropTypes.bool.isRequired,
  textComment: PropTypes.object.isRequired,
  setTextComment: PropTypes.func.isRequired,
};
