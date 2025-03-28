import FolderZipIcon from "@mui/icons-material/FolderZip";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import PropTypes from "prop-types";

FilesPreview.propTypes = {
  files: PropTypes.array.isRequired,
  setFiles: PropTypes.func,
  variant: PropTypes.string,
  cross: PropTypes.bool,
  onlySize: PropTypes.bool,
};

// Функция для конвертации размера файла
const formatFileSize = (size) => {
  if (size < 1024) {
    return `${size} B`; // Байты
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`; // Килобайты
  } else if (size < 1024 * 1024 * 1024) {
    return `${(size / 1024 / 1024).toFixed(1)} MB`; // Мегабайты
  } else {
    return `${(size / 1024 / 1024 / 1024).toFixed(1)} GB`; // Гигабайты
  }
};

export default function FilesPreview({
  files = [],
  setFiles,
  variant,
  cross,
  onlySize,
}) {
  const handleDelete = (i) => {
    const newArr = files.filter((_, index) => index !== i);

    setFiles(newArr);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        width: "100%",
      }}
    >
      {files?.map((item, index) => (
        <div key={index}>
          <a
            href={variant === "fullPost" && item?.url ? item.url : undefined}
            download={variant === "fullPost" ? item?.name : undefined}
            style={{
              color: "inherit",
              textDecoration: "none",
              cursor: variant === "fullPost" ? "pointer" : "default",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                transition: "color ease-in-out 300ms",
                "&:hover": variant === "fullPost" && {
                  color: "lightblue",
                },
              }}
            >
              {item.type === "application/x-compressed" ||
              item.type === "application/x-zip-compressed" ? (
                <FolderZipIcon />
              ) : item.type === "image/jpeg" ? (
                <InsertPhotoIcon />
              ) : item.type === "application/pdf" ? (
                <PictureAsPdfIcon />
              ) : (
                <InsertDriveFileIcon />
              )}
              <>
                {onlySize ? (
                  <Typography variant="caption">{`${formatFileSize(
                    item.size
                  )}`}</Typography>
                ) : (
                  <Typography variant="caption">{`${
                    item.name
                  }: ${formatFileSize(item.size)}`}</Typography>
                )}
              </>

              {variant !== "fullPost" && cross !== false && (
                <IconButton onClick={() => handleDelete(index)}>
                  <CloseIcon fontSize="small" color="error" />
                </IconButton>
              )}
            </Box>
          </a>
        </div>
      ))}
    </Box>
  );
}
