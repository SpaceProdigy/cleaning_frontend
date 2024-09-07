import { CircularProgress, Typography } from "@mui/material";
import { MainWrapper, TextWrapper } from "./WaitAuth.styled";
import PropTypes from "prop-types";
import { useEffect } from "react";

WaitAuth.propTypes = {
  language: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function WaitAuth({ language, isLoading }) {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isLoading]);
  return (
    <MainWrapper>
      <TextWrapper>
        <Typography variant="subtitle1" textAlign="center">
          {language === "en"
            ? "The first login to the application may take some time, please wait."
            : "Перший вхід до застосунку може потребувати трохи часу, будь ласка зачекайте."}
        </Typography>
      </TextWrapper>
      <CircularProgress />
    </MainWrapper>
  );
}
