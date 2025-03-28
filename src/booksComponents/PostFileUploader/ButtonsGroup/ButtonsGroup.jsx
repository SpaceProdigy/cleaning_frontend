import { inputs } from "../../../locales/normalize";
import { Box, Paper, Typography } from "@mui/material";
import InputFileUpload from "../../InputFileUpload/InputFileUpload";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";
import PropTypes from "prop-types";
import { selectPostLoading } from "../../../redux/upLoadSlice";
import { useDropzone } from "react-dropzone";
import AddBoxIcon from "@mui/icons-material/AddBox";

ButtonsGroup.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
  handlePosterChange: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  files: PropTypes.array.isRequired,
};

export default function ButtonsGroup({ handleFileChange, handlePosterChange }) {
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectPostLoading);

  // Drag & Drop обработчик файлов (основные файлы)
  const onDropFiles = (acceptedFiles) => {
    handleFileChange(acceptedFiles);
  };

  // Drag & Drop обработчик постеров (только изображения)
  const onDropPosters = (acceptedFiles) => {
    handlePosterChange(acceptedFiles);
  };

  const { getRootProps: getFileRootProps, getInputProps: getFileInputProps } =
    useDropzone({ onDrop: onDropFiles, maxFiles: 1 });

  const {
    getRootProps: getPosterRootProps,
    getInputProps: getPosterInputProps,
  } = useDropzone({
    onDrop: onDropPosters,
    maxFiles: 1,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Box sx={{ display: "flex", gap: "15px", width: "100%" }}>
        {/* Drag & Drop зона для файлов */}
        <Paper
          elevation={3}
          {...getFileRootProps()}
          sx={{
            border: "2px dashed gray",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
            cursor: "pointer",
            height: "150px",
            width: "100%",
            alignContent: "center",
          }}
        >
          <AddBoxIcon fontSize="large" />
          <input {...getFileInputProps()} />
          <Typography variant="body2">
            {inputs.inputUpLoad[language]} (Drag & Drop)
          </Typography>
        </Paper>

        {/* Drag & Drop зона для постеров */}
        <Paper
          elevation={3}
          {...getPosterRootProps()}
          sx={{
            border: "2px dashed gray",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
            cursor: "pointer",
            height: "150px",
            width: "100%",
            alignContent: "center",
          }}
        >
          <AddBoxIcon fontSize="large" />
          <input {...getPosterInputProps()} />
          <Typography variant="body2">
            {inputs.inputUpLoadPoster[language]} (Drag & Drop)
          </Typography>
        </Paper>
      </Box>

      {/* Обычные кнопки загрузки (если нужен стандартный способ) */}
      <InputFileUpload
        onChange={handleFileChange}
        isLoading={isLoading}
        buttonText={inputs.inputUpLoad[language]}
      />
      <InputFileUpload
        isLoading={isLoading}
        onlyImages={true}
        onChange={handlePosterChange}
        buttonText={inputs.inputUpLoadPoster[language]}
      />
    </Box>
  );
}
