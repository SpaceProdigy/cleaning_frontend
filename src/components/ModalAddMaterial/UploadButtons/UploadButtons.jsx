import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  ButtonWrapper,
  ImageWrapper,
  LoaderPercent,
  LoaderWrapper,
  MainWrapper,
  StyledBadge,
  VisuallyHiddenInput,
} from "./UploadButtons.styled";
import { nanoid } from "@reduxjs/toolkit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PropTypes from "prop-types";
import { uploadMaterialsThunk } from "../../../redux/englishLessonsOperations";
import PdfViewer from "./PdfViewer/PdfViewer";
import { useLocation } from "react-router-dom";
import { selectLessonsById } from "../../../redux/englishLessonsSlice";

UploadButtons.propTypes = {
  handleFileChange: PropTypes.func,
  selectedFile: PropTypes.array,
  imagePreview: PropTypes.object,
  handleCloseModal: PropTypes.func,
  loadingProgress: PropTypes.array,
  setLoadingProgress: PropTypes.func,
  currentPages: PropTypes.number,
  setCurrentPages: PropTypes.func,
  numPages: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  setNumPages: PropTypes.func,
};

export default function UploadButtons({
  selectedFile,
  handleFileChange,
  imagePreview,
  loadingProgress,
  setLoadingProgress,
  currentPages,
  setCurrentPages,
  numPages,
  setNumPages,
  handleCloseModal,
}) {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const location = useLocation();
  const lessonMaterials = useSelector(selectLessonsById);

  const handleUpload = async () => {
    await dispatch(
      uploadMaterialsThunk({
        data: selectedFile,
        setLoadingProgress,
        id:
          location?.state?.id ??
          location.pathname.split("/")[location.pathname.split("/").length - 1],
        lessonInfo: location?.state,
        lessonMaterials: lessonMaterials?.materials ?? null,
      })
    );
    handleCloseModal();
  };

  return (
    <div>
      <MainWrapper>
        <ButtonWrapper>
          <Button
            sx={{ width: 130, position: "relative" }}
            size="small"
            variant="contained"
            startIcon={<AttachFileIcon />}
            component="label"
          >
            {selectedFile.length > 0 && (
              <StyledBadge>
                <Typography variant="caption">{selectedFile.length}</Typography>
              </StyledBadge>
            )}

            {language === "en" ? "Select files" : "Виберіть файли"}
            <VisuallyHiddenInput
              type="file"
              onChange={handleFileChange}
              multiple
              accept=".png, .jpg, .jpeg, .pdf"
            />
          </Button>
          <Button
            disabled={selectedFile.length === 0}
            variant="contained"
            startIcon={<CloudUploadIcon />}
            size="small"
            onClick={handleUpload}
          >
            {language === "en" && "Upload"}
            {language === "ua" && "Завантажити"}
          </Button>
        </ButtonWrapper>

        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
          width="100%"
          alignItems="center"
        >
          {imagePreview?.pdf?.length > 0 && (
            <Divider sx={{ m: 2, width: "100%" }}>
              <Chip label="PDF" size="small" />
            </Divider>
          )}
          {imagePreview?.pdf?.map((pdf, index) => (
            <Box
              key={nanoid()}
              width="100%"
              display="flex"
              justifyContent="center"
            >
              <PdfViewer
                numPages={numPages}
                currentPages={currentPages}
                setNumPages={setNumPages}
                setCurrentPages={setCurrentPages}
                loadingProgress={loadingProgress}
                pdf={pdf}
                index={index}
              />
            </Box>
          ))}

          {imagePreview?.images?.length > 0 && (
            <Divider sx={{ m: 2, width: "100%" }}>
              <Chip label="IMAGE" size="small" />
            </Divider>
          )}
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap="20px"
          >
            {imagePreview?.images?.map((image, index) => (
              <ImageWrapper key={nanoid()} src={image}>
                <LoaderWrapper>
                  <CircularProgress
                    variant="determinate"
                    value={loadingProgress?.[index]?.progress ?? 0}
                  />

                  <LoaderPercent>
                    <Typography
                      variant="caption"
                      component="div"
                      color="text.secondary"
                    >
                      {`${Math.round(
                        loadingProgress?.[index]?.progress ?? 0
                      )}%`}
                    </Typography>
                  </LoaderPercent>
                </LoaderWrapper>
              </ImageWrapper>
            ))}
          </Box>
        </Box>
      </MainWrapper>
    </div>
  );
}
