import { Box, styled } from "@mui/material";
import img from "../../pictures/pageEnMaterial/city-bridg.jpg";

export const HeaderFotoBox = styled(Box)`
  width: calc(100% + 32px);
  height: 200px;
  background-image: ${({ image }) => (image ? `url(${image})` : `url(${img})`)};
  margin-left: -16px;
  margin-right: -16px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  @media screen and (min-width: 600px) {
    margin-left: -24px;
    margin-right: -24px;
    width: calc(100% + 48px);
    font-size: 32px;
    height: 300px;
  }
`;

export const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #11111150; */
`;

export const WrapperTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  background-color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#ffffffbb" : "#111111bb"};
  border-radius: 7px;
`;
