import { Typography } from "@mui/material";
import { ReactTyped } from "react-typed";
import PropTypes from "prop-types";
import { HeaderFotoBox, Wrapper, WrapperTitle } from "./ImageTitle.styled";

ImageTitle.propTypes = {
  tipingText: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default function ImageTitle({ tipingText, image, title }) {
  return (
    <>
      <HeaderFotoBox image={image}>
        <Wrapper>
          <WrapperTitle>
            <Typography variant="inherit" textAlign="center">
              {title}
            </Typography>
            <Typography variant="h6">
              {tipingText && (
                <ReactTyped
                  strings={[tipingText]}
                  typeSpeed={70}
                  cursorChar={""}
                />
              )}
            </Typography>
          </WrapperTitle>
        </Wrapper>
      </HeaderFotoBox>
    </>
  );
}
