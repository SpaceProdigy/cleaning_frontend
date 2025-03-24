import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

import PropTypes from "prop-types";
InputFileUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  onlyImages: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default function InputFileUpload({
  onChange,
  disabled,
  multiple = false,
  buttonText,
  onlyImages = false,
  isLoading,
}) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      disabled={disabled || isLoading}
    >
      {buttonText}
      <VisuallyHiddenInput
        type="file"
        onChange={onChange}
        multiple={multiple}
        accept={onlyImages ? "image/*" : ""}
      />
    </Button>
  );
}
