import { useRef, useState } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import DescriptionComponent from "./DescriptionComponent/DescriptionComponent";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { selectAuthUser } from "../../redux/authSlice";
import { notify } from "../../components/AlertComponent/notify";
import {
  notificationMapObj,
  notifyMessages,
} from "../../components/AlertComponent/notifyMessages";
import { AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { CloseIconWrapper, MainWrapper } from "./PostFileUploader.styled";
import PropTypes from "prop-types";
import { upLoadFilesToGoogleDiskAndCloudinaryThunk } from "../../redux/booksOperetions";
const MAX_FILE_SIZE = 200 * 1024 * 1024;
const MAX_POSTER_SIZE = 5 * 1024 * 1024;

const PostFileUploader = ({ setOpen, setLoading, defaultCategory }) => {
  const language = useSelector(selectLanguage);
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  const [posters, setPosters] = useState([]);
  const [posterPreview, setPosterPreview] = useState([]);
  const [files, setFiles] = useState([]);

  const cancelTokenRef = useRef(null);

  const handlePosterChange = async (e) => {
    const files = e.length > 0 ? e : Array.from(e.target.files).slice(0, 10); // Ограничение до 10 файлов

    const previewFiles = [];
    const compressedFiles = [];

    const validFiles = files.filter((file) => file.size <= MAX_POSTER_SIZE);

    if (validFiles.length !== files.length) {
      notify(
        "warning",
        notifyMessages({
          language,
          notifyType: notificationMapObj.maxSize,
          extraText: "5MB",
        })
      );
    }

    // Сжатие изображений
    for (const file of validFiles) {
      try {
        const options = {
          maxSizeMB: 1, // Максимальный размер файла в МБ
          maxWidthOrHeight: 800, // Максимальная ширина или высота
          useWebp: true, // Использовать формат WebP для сжатия
        };
        const compressedFile = await imageCompression(file, options);

        // Сохраняем имя файла, которое мы получаем из оригинала
        const compressedFileWithName = new File([compressedFile], file.name, {
          type: compressedFile.type,
        });

        compressedFiles.push(compressedFileWithName);
        previewFiles.push(URL.createObjectURL(compressedFileWithName));
      } catch (error) {
        console.error("Ошибка при сжатии изображения:", error);
      }
    }
    setPosters(compressedFiles);
    setPosterPreview(previewFiles);
  };

  const handleFileChange = (e) => {
    const selectedFiles =
      e.length > 0 ? e : Array.from(e.target.files).slice(0, 10); // Ограничение до 10 файлов

    const validFiles = selectedFiles.filter(
      (file) => file.size <= MAX_FILE_SIZE
    );

    if (validFiles.length !== selectedFiles.length) {
      notify(
        "warning",
        notifyMessages({
          language,
          notifyType: notificationMapObj.maxSize,
          extraText: "200MB",
        })
      );
    }

    setFiles(validFiles);
  };

  const handleUpload = async (data) => {
    try {
      setLoading(true);
      // Отменяем предыдущий запрос, если есть
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel("Отменено новым запросом");
      }

      // Создаем новый токен отмены
      cancelTokenRef.current = axios.CancelToken.source();

      const formData = new FormData();
      formData.append(
        "adder",
        JSON.stringify({
          name: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
        })
      );

      if (data?.title?.trim()) {
        formData.append("title", data?.title);
      }

      if (data?.category?.trim()) {
        formData.append("category", data?.category);
      }
      if (posters.length > 0) {
        posters.forEach((poster) => formData.append("poster", poster));
      }
      if (files.length > 0) {
        files.forEach((file) => formData.append("file", file));
      }

      dispatch(
        upLoadFilesToGoogleDiskAndCloudinaryThunk({
          cancelToken: cancelTokenRef.current.token,
          formData,
          language,
        })
      ).finally(() => {
        setLoading(false);
      });
      setOpen(false);
    } catch (error) {
      console.error("Ошибка загрузки файлов:", error);
    }
  };

  return (
    <MainWrapper>
      <CloseIconWrapper>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </CloseIconWrapper>
      <AnimatePresence>
        {posterPreview.length > 0 && (
          <ImageCarousel
            images={posterPreview}
            setPosterPreview={setPosterPreview}
            variant={"preview"}
          />
        )}
      </AnimatePresence>
      <DescriptionComponent
        defaultCategory={defaultCategory}
        handleUpload={handleUpload}
        handleFileChange={handleFileChange}
        handlePosterChange={handlePosterChange}
        files={files}
        setFiles={setFiles}
      />
    </MainWrapper>
  );
};

export default PostFileUploader;

PostFileUploader.propTypes = {
  setOpen: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  defaultTag: PropTypes.string,
  defaultCategory: PropTypes.string,
};
