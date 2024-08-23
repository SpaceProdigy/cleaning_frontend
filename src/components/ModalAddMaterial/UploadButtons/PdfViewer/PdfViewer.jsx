import { CircularProgress, IconButton, Typography } from "@mui/material";
import {
  LoaderPercent,
  LoaderWrapper,
  WrapperNavigateButton,
} from "./PdfViewer.styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../../redux/localOperation";
PdfViewer.propTypes = {
  pdf: PropTypes.object,
  loadingProgress: PropTypes.array,
  currentPages: PropTypes.number,
  setCurrentPages: PropTypes.func,
  numPages: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  setNumPages: PropTypes.func,
  index: PropTypes.number,
};

export default function PdfViewer({
  numPages,
  currentPages,
  setNumPages,
  setCurrentPages,
  loadingProgress,
  pdf,
  index,
}) {
  const language = useSelector(selectLanguage);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    setCurrentPages((prevstate) => prevstate + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPages((prevstate) => prevstate - 1);
  };
  return (
    <div>
      <div
        style={{
          width: 200,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="caption">
          {language === "en" ? "Total page: " : "Всього сторінок: "}
          {numPages}
        </Typography>
        <Typography variant="caption">
          {language === "en" ? "Current page: " : "Поточна сторінка: "}
          {currentPages}
        </Typography>
      </div>

      <div style={{ position: "relative", width: 200, height: 283 }}>
        <WrapperNavigateButton>
          <IconButton
            disabled={currentPages === 1}
            onClick={handlePreviousPage}
            color="info"
            sx={{ bgcolor: "#11111199" }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={handleNextPage}
            disabled={currentPages === numPages}
            color="info"
            sx={{ bgcolor: "#11111199" }}
          >
            <ChevronRightIcon />
          </IconButton>
        </WrapperNavigateButton>
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
              {`${Math.round(loadingProgress?.[index]?.progress ?? 0)}%`}
            </Typography>
          </LoaderPercent>
        </LoaderWrapper>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={currentPages} width={200} />
        </Document>
      </div>
    </div>
  );
}
