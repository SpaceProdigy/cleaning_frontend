import { CircularProgress, IconButton, Typography } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import {
  WrapperLoader,
  WrapperNavigateButton,
  WrapperPageInfo,
  WrapperZoomButton,
} from "./PdfViewerMaterials.styled";
import { selectLanguage } from "../../redux/localOperation";
import { useEffect, useRef, useState } from "react";
PdfViewerMaterials.propTypes = {
  pdf: PropTypes.string,
};

export default function PdfViewerMaterials({ pdf }) {
  const language = useSelector(selectLanguage);
  const [numPages, setNumPages] = useState(null);
  const [currentPages, setCurrentPages] = useState(1);
  const [scalePages, setScalePages] = useState(1);

  const pdfRef = useRef(null);

  const [sizePage, setSizePage] = useState({
    width: window.innerWidth - 50,
    height: 300,
  });

  useEffect(() => {
    if (pdfRef.current) {
      if (sizePage.width < window.innerWidth - 50) {
        setSizePage((prevState) => {
          return { ...prevState, width: pdfRef.current.clientWidth };
        });
      }

      if (sizePage.height !== pdfRef.current.clientHeight) {
        setSizePage((prevState) => {
          return { ...prevState, height: pdfRef.current.clientHeight };
        });
      }
    }
  }, [
    sizePage.height,
    sizePage.width,
    pdfRef.current?.clientHeight,
    pdfRef.current?.clientWidth,
  ]);

  const handleZoomPage = () => {
    if (scalePages < 2) {
      setScalePages((prevstate) => prevstate + 0.1);
    }
  };

  const handleZoomOutPage = () => {
    if (scalePages > 1) {
      setScalePages((prevstate) => prevstate - 0.1);
    }
  };

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
    <div
      style={{
        position: "relative",
      }}
    >
      <WrapperNavigateButton>
        <IconButton
          disabled={currentPages === 1}
          onClick={handlePreviousPage}
          color="info"
          sx={{ bgcolor: "#11111199" }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <WrapperZoomButton>
          <IconButton
            size="small"
            disabled={scalePages <= 1}
            onClick={handleZoomOutPage}
            color="info"
            sx={{ bgcolor: "#11111199" }}
          >
            <ZoomOutIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={handleZoomPage}
            disabled={scalePages > 2}
            color="info"
            sx={{ bgcolor: "#11111199", ml: 1 }}
          >
            <ZoomInIcon fontSize="small" />
          </IconButton>
          <Typography variant="caption">
            Zoom:{scalePages.toFixed(1)}
          </Typography>
        </WrapperZoomButton>
        <IconButton
          onClick={handleNextPage}
          disabled={currentPages === numPages}
          color="info"
          sx={{ bgcolor: "#11111199" }}
        >
          <ChevronRightIcon />
        </IconButton>
      </WrapperNavigateButton>
      <WrapperPageInfo>
        <Typography variant="caption">
          {language === "en" ? "Total page: " : "Всього сторінок: "}
          {numPages}
        </Typography>
        <Typography variant="caption">
          {language === "en" ? " Current page: " : "Поточна сторінка: "}
          {currentPages}
        </Typography>
      </WrapperPageInfo>
      <Document
        loading={
          <WrapperLoader>
            <CircularProgress />
          </WrapperLoader>
        }
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          inputRef={pdfRef}
          scale={scalePages}
          pageNumber={currentPages}
          width={sizePage.width < 1100 ? sizePage.width : 1100}
          loading={
            <WrapperLoader>
              <CircularProgress />
            </WrapperLoader>
          }
        />
      </Document>
    </div>
  );
}
