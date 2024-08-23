import {
  Box,
  Chip,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { ContentBox } from "./PDFComponent.styled";
import PdfViewerMaterials from "../../../components/PdfViewerMaterials/PdfViewerMaterials";

export default function PDFComponent({
  isPDF,
  language,
  permissions,
  handleDeleteFile,
}) {
  return (
    <ContentBox>
      {isPDF.length !== 0 && (
        <Divider sx={{ m: 2, width: "100%" }}>
          <Chip label="PDF" />
        </Divider>
      )}
      {isPDF.length > 0 &&
        isPDF?.map(({ pdf, comments, name }, index) => (
          <Box key={index} position="relative">
            {pdf && <PdfViewerMaterials pdf={pdf} />}
          </Box>
        ))}
    </ContentBox>
  );
}

PDFComponent.propTypes = {
  isPDF: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
  permissions: PropTypes.bool.isRequired,
  handleDeleteFile: PropTypes.func.isRequired,
};
