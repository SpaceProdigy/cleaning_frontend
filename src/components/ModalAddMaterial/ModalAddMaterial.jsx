import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import {
  MotionWrapper,
  Overlay,
  WrapperClose,
} from "./ModalAddMaterial.styled";
import { useLayoutEffect, useState } from "react";

import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence } from "framer-motion";
import {
  chooseCorrectFile,
  maxFilesError,
  maxSizeError,
} from "./functionModalAddMaterial";
import UploadButtons from "./UploadButtons/UploadButtons";
import { notify } from "../AlertComponent/notify";

ModalAddMaterial.propTypes = {
  isModalMaterials: PropTypes.bool.isRequired,
  setIsModalMaterials: PropTypes.func,
  lessonMaterials: PropTypes.object.isRequired,
};

export default function ModalAddMaterial({
  isModalMaterials,
  setIsModalMaterials,
  lessonMaterials,
}) {
  const language = useSelector(selectLanguage);
  const [loadingProgress, setLoadingProgress] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [imagePreview, setImagePreview] = useState({ pdf: [], images: [] });
  const [numPages, setNumPages] = useState(null);
  const [currentPages, setCurrentPages] = useState(1);

  useLayoutEffect(() => {
    if (isModalMaterials) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    }
  }, [isModalMaterials]);

  const handleFileChange = async (e) => {
    setSelectedFile([]);
    setCurrentPages(1);
    setNumPages(null);
    setImagePreview({ pdf: [], images: [] });
    setLoadingProgress([]);
    let selectedFiles = [...e.target.files];

    const pdfMoreOne = selectedFiles.filter(
      ({ type }) => type === "application/pdf"
    );

    if (pdfMoreOne.length > 1) {
      notify(
        "warning",
        language === "en?"
          ? `You can only add one PDF file at a time`
          : "Ви можете додати лише один файл PDF на раз"
      );

      const imagesArr = selectedFiles.filter(({ type }) =>
        type.includes("image")
      );
      selectedFiles = [...imagesArr, pdfMoreOne[0]];
    }
    console.log(pdfMoreOne);
    console.log(selectedFiles);

    if (lessonMaterials.materials && lessonMaterials.materials.length > 0) {
      const arrFileName = lessonMaterials.materials.map(({ name }) => name);
      const existFile = selectedFiles.filter((item) => {
        if (arrFileName.includes(item.name)) {
          notify(
            "warning",
            language === "en?"
              ? `This file already exist ${item.name}`
              : `Цей файл уже існує ${item.name}`
          );
          return;
        } else {
          return item;
        }
      });

      selectedFiles = [...existFile];
    }

    const maxSize = 5 * 1024 * 1024;

    if (selectedFiles?.length > 5) {
      maxFilesError(language, 5);
    }

    selectedFiles.forEach((file) => {
      if (file.size > maxSize) {
        maxSizeError(language);
        return;
      }

      if (
        file &&
        (file.type === "image/png" ||
          file.type === "image/jpeg" ||
          file.type === "image/jpg" ||
          file.type === "application/pdf")
      ) {
        if (file.type === "application/pdf") {
          setImagePreview((prevPreviews) => {
            if (prevPreviews?.pdf?.length + prevPreviews?.images?.length > 4) {
              return prevPreviews;
            } else {
              return {
                images: [...prevPreviews.images],
                pdf: [...prevPreviews.pdf, file],
              };
            }
          });
        } else {
          const reader = new FileReader();
          reader.onload = () => {
            setImagePreview((prevPreviews) => {
              if (
                prevPreviews?.pdf?.length + prevPreviews?.images?.length >
                4
              ) {
                return prevPreviews;
              } else {
                return {
                  images: [...prevPreviews.images, reader.result],
                  pdf: [...prevPreviews.pdf],
                };
              }
            });
          };
          reader.readAsDataURL(file);
        }

        setSelectedFile((prevState) => {
          if (prevState?.length > 4) {
            return prevState;
          } else {
            return [...prevState, file];
          }
        });
      } else {
        chooseCorrectFile(language);
      }
    });
  };

  const handleCloseModal = () => {
    setIsModalMaterials(false);
    setSelectedFile([]);
    setImagePreview([]);
    setCurrentPages(1);
    setNumPages(null);
    setLoadingProgress([]);
  };

  return (
    <AnimatePresence mode="wait">
      {isModalMaterials && (
        <Overlay
          id="overlay"
          onClick={(e) => {
            if (e.target.id === "overlay") {
              handleCloseModal();
            }
          }}
        >
          <MotionWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WrapperClose>
              <IconButton
                onClick={() => {
                  handleCloseModal();
                }}
              >
                <CloseIcon />
              </IconButton>
            </WrapperClose>

            <UploadButtons
              selectedFile={selectedFile}
              handleFileChange={handleFileChange}
              imagePreview={imagePreview}
              loadingProgress={loadingProgress}
              setLoadingProgress={setLoadingProgress}
              currentPages={currentPages}
              setCurrentPages={setCurrentPages}
              numPages={numPages}
              setNumPages={setNumPages}
              handleCloseModal={handleCloseModal}
            />
            {/* <button onClick={() => uploadTask.pause()}>pause</button>
            <button onClick={() => uploadTask.resume()}>resume</button>
            <button onClick={() => uploadTask.cancel()}>cancel</button> */}
          </MotionWrapper>
        </Overlay>
      )}
    </AnimatePresence>
  );
}
