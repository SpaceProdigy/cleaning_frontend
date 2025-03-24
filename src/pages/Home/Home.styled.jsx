import { Box, styled } from "@mui/material";
import picturesHorisontal from "../../pictures/home/hero.png";
import picturesVertical from "../../pictures/home/hero.png";

export const Hero = styled(Box)`
  width: 100%;
  height: 100%;
  background-image: url(${picturesHorisontal});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 720px) {
    background-image: url(${picturesVertical});
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #11111170;
  }
`;

export const WrapperTitel = styled(Box)`
  position: absolute;
  width: 90%;
  max-width: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#000000bb" : "#ffffffbb"};
  padding: 30px 0;
  border-radius: 7px;
`;

export const WrapperHero = styled(Box)`
  position: relative;
  width: calc(100% + 32px);
  height: 100vh;
  margin-left: -16px;
  margin-right: -16px;

  @media screen and (min-width: 600px) {
    margin-left: -24px;
    margin-right: -24px;
    width: calc(100% + 48px);
  }
`;

export const PostWrapper = styled(Box)`
  margin-bottom: 20px;
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
`;

export const IconButtonBox = styled(Box)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const WrapperPostUploader = styled(Box)`
  border-radius: 4px;
  max-width: 600px;
  width: 100%;
  max-height: 600px;
  overflow: auto;
  position: absolute;
  scrollbar-width: thin;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
