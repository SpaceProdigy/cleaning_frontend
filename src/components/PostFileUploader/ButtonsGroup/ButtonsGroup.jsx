import { inputs } from "../../../locales/normalize";
import { Box } from "@mui/material";
import InputFileUpload from "../../InputFileUpload/InputFileUpload";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";

import PropTypes from "prop-types";
import { selectPostLoading } from "../../../redux/upLoadSlice";
ButtonsGroup.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
  handlePosterChange: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  files: PropTypes.array.isRequired,
};

export default function ButtonsGroup({ handleFileChange, handlePosterChange }) {
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectPostLoading);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <InputFileUpload
          onChange={handleFileChange}
          isLoading={isLoading}
          multiple={true}
          buttonText={inputs.inputUpLoad[language]}
        />
        <InputFileUpload
          isLoading={isLoading}
          onlyImages={true}
          multiple={true}
          onChange={handlePosterChange}
          buttonText={inputs.inputUpLoadPoster[language]}
        />
      </Box>
    </>
  );
}
