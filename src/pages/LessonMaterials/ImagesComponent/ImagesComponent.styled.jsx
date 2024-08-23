import { Box, Paper, styled } from "@mui/material";

export const ContentBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
`;

export const ContentWrapper = styled(Paper)`
  position: relative;
  max-width: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 320px) {
    width: 270px;
  }

  @media screen and (min-width: 370px) {
    width: 320px;
  }

  @media screen and (min-width: 430px) {
    width: 350px;
  }

  @media screen and (min-width: 600px) {
    width: 500px;
  }

  @media screen and (min-width: 720px) {
    width: 310px;
  }

  @media screen and (min-width: 900px) {
    width: 400px;
  }

  @media screen and (min-width: 1200px) {
    width: 350px;
  }
`;

export const WrapperButtonDelete = styled(Box)`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10;
`;

export const ImageBoxWrapper = styled(Box)`
  overflow: hidden;
`;

export const ImageBox = styled(Box)`
  position: relative;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px 5px 0 0;
  max-width: 400px;
  width: 270px;
  height: 250px;
  transition: scale 500ms ease;

  @media screen and (min-width: 370px) {
    width: 320px;
  }

  @media screen and (min-width: 430px) {
    width: 350px;
  }

  @media screen and (min-width: 600px) {
    width: 500px;
  }

  @media screen and (min-width: 720px) {
    width: 350px;
  }

  @media screen and (min-width: 720px) {
    width: 310px;
  }

  @media screen and (min-width: 900px) {
    width: 400px;
  }

  @media screen and (min-width: 1200px) {
    width: 350px;
  }

  &:hover {
    scale: 1.05;
    cursor: zoom-in;
  }
`;
