import { CircularProgress, IconButton, Typography } from "@mui/material";
import {
  AddWrapper,
  EditWrapper,
  LoaderPercent,
  LoaderWrapper,
  PhotoWrapper,
  VisuallyHiddenInput,
} from "./UserPhoto.styled";

import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";

import PropTypes from "prop-types";
import { useState } from "react";
import { notify } from "../../../components/AlertComponent/notify";
import { uploadPhotoThunk } from "../../../redux/authOparations";

export default function UserPhoto({ user, language, isLoading, dispatch }) {
  const [isPhoto, setIsPhoto] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(null);

  const handleAddPhoto = async () => {
    if (!isPhoto.file || !user.uid) {
      return;
    }
    await dispatch(
      uploadPhotoThunk({
        data: isPhoto.file,
        setLoadingProgress,
        id: user.uid,
      })
    );
    setIsPhoto(null);
  };

  const hendleResetFoto = () => {
    setIsPhoto(null);
  };

  const handleFileChange = async (e) => {
    setIsPhoto(null);
    setLoadingProgress(null);
    const selectedFile = e.target.files[0];
    const maxSize = 5 * 1024 * 1024;

    if (!selectedFile) {
      setIsPhoto(null);
      return;
    }

    if (selectedFile?.size > maxSize) {
      notify(
        "info",
        language === "en"
          ? "The image must not exceed 5 MB"
          : "Зображення має бути не більше 5 Мб"
      );
      return;
    }

    const temporaryUrl = URL.createObjectURL(selectedFile);
    setIsPhoto({ preview: temporaryUrl, file: selectedFile });
  };

  return (
    <PhotoWrapper src={isPhoto?.preview ? isPhoto.preview : user?.photoURL}>
      <EditWrapper>
        {!isPhoto && (
          <IconButton color="info" component="label" disabled={isLoading}>
            <EditIcon />
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e)}
              accept=".png, .jpg, .jpeg"
            />
          </IconButton>
        )}
      </EditWrapper>
      {isPhoto && (
        <AddWrapper>
          <IconButton
            color="success"
            type="button"
            disabled={isLoading}
            onClick={handleAddPhoto}
          >
            {!isLoading && <AddCircleIcon />}
            {isLoading && <CircularProgress size="20px" />}
          </IconButton>
          <IconButton
            color="info"
            type="button"
            onClick={hendleResetFoto}
            sx={{ ml: 1 }}
            disabled={isLoading}
          >
            <CloseIcon />
          </IconButton>
        </AddWrapper>
      )}

      {isPhoto && (
        <LoaderWrapper>
          <CircularProgress
            variant="determinate"
            value={loadingProgress ?? 0}
          />

          <LoaderPercent>
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`${Math.round(loadingProgress ?? 0)}%`}
            </Typography>
          </LoaderPercent>
        </LoaderWrapper>
      )}
    </PhotoWrapper>
  );
}

UserPhoto.propTypes = {
  user: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};
