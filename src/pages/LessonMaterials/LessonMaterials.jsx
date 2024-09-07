import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { selectLanguage, selectTheme } from "../../redux/localOperation";
import {
  deleteFileByNameThunk,
  getScheduleByIdThunk,
} from "../../redux/englishLessonsOperations";
import { AlertComponent } from "../../components/AlertComponent/AlertComponent";
import ImageTitle from "../../components/ImageTitle/ImageTitle";
import ModalAddMaterial from "../../components/ModalAddMaterial/ModalAddMaterial";

import PropTypes from "prop-types";
import ImagesComponent from "./ImagesComponent/ImagesComponent";
import PDFComponent from "./PDFComponent/PDFComponent";
import { selectLessonsLoading } from "../../redux/englishLessonsSlice";
import ImageModal from "./ImageModal/ImageModal";
import { selectAuthUser, selectAuthentificated } from "../../redux/authSlice";

export default function LessonMaterials({
  permissions,
  lessonMaterials,
  nameCollection,
}) {
  const location = useLocation();
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectLessonsLoading);
  const currentUser = useSelector(selectAuthUser);
  const theme = useSelector(selectTheme);
  const authentificated = useSelector(selectAuthentificated);

  const dispatch = useDispatch();

  const [textComment, setTextComment] = useState({});
  const [openComment, setOpenComment] = useState(false);
  const [isModalMaterials, setIsModalMaterials] = useState(false);
  const [isPDF, setIsPDF] = useState([]);
  const [isImages, setIsImages] = useState([]);
  const [isImagesModal, setIsImagesModal] = useState(false);

  useEffect(() => {
    const isFiles = async () => {
      let arrPDF = [];
      let arrImage = [];

      await lessonMaterials?.materials?.filter((item) => {
        if (item.images) {
          arrImage.push(item);
        }

        if (item.pdf) {
          arrPDF.push(item);
        }
      });

      setIsImages(arrImage.reverse());
      setIsPDF(arrPDF.reverse());
    };
    isFiles();
  }, [lessonMaterials?.materials]);

  const handleDeleteFile = async (fileName) => {
    const updateValue = await lessonMaterials?.materials.filter(
      ({ name }) => name !== fileName
    );

    dispatch(
      deleteFileByNameThunk({
        name: fileName,
        id: lessonMaterials.id,
        nameCollection,
        updateValue: { materials: updateValue },
      })
    );
  };

  useEffect(() => {
    dispatch(
      getScheduleByIdThunk({
        nameCollection,
        currentId:
          location?.state?.id ??
          location.pathname.split("/")[location.pathname.split("/").length - 1],
      })
    );
  }, [dispatch, location.pathname, location?.state?.id, nameCollection]);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <AlertComponent />
      <ImageTitle
        tipingText={
          location?.state?.date ? location?.state?.date : lessonMaterials?.date
        }
        title={language === "en" ? "Lesson materials" : "Матеріали уроку"}
      />
      {permissions && (
        <Box textAlign="center" m={2}>
          <Button variant="contained" onClick={() => setIsModalMaterials(true)}>
            {language === "en" && "Add material"}
            {language === "ua" && "Додати матеріал"}
          </Button>
        </Box>
      )}

      <Box
        margin="40px 0"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="30px"
      >
        <ImagesComponent
          isImages={isImages}
          language={language}
          permissions={permissions}
          handleDeleteFile={handleDeleteFile}
          isLoading={isLoading}
          setIsImagesModal={setIsImagesModal}
          lessonMaterials={lessonMaterials}
          currentUser={currentUser}
          theme={theme}
          authentificated={authentificated}
          textComment={textComment}
          setTextComment={setTextComment}
        />
        <PDFComponent
          isPDF={isPDF}
          language={language}
          permissions={permissions}
          handleDeleteFile={handleDeleteFile}
          isLoading={isLoading}
        />
      </Box>

      {isPDF.length === 0 && isImages.length === 0 && (
        <Typography variant="h6" textAlign="center" mt={2}>
          {language === "en"
            ? "Materials not added yet"
            : "Матеріали ще не додані"}
        </Typography>
      )}

      <ImageModal
        isImagesModal={isImagesModal}
        setIsImagesModal={setIsImagesModal}
        isLoading={isLoading}
        language={language}
        currentUser={currentUser}
        theme={theme}
        authentificated={authentificated}
        textComment={textComment}
        setTextComment={setTextComment}
        lessonMaterials={lessonMaterials}
        isImages={isImages}
        openComment={openComment}
        setOpenComment={setOpenComment}
        permissions={permissions}
      />

      <ModalAddMaterial
        isModalMaterials={isModalMaterials}
        setIsModalMaterials={setIsModalMaterials}
        lessonMaterials={lessonMaterials}
      />
    </Box>
  );
}

LessonMaterials.propTypes = {
  permissions: PropTypes.bool.isRequired,
  lessonMaterials: PropTypes.object.isRequired,
  nameCollection: PropTypes.string.isRequired,
};
