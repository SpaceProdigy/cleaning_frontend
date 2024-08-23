import { Typography } from "@mui/material";
import { StyleLink, StyledButton, Wrapper } from "./NotFound.sttyled";
import HomeIcon from "@mui/icons-material/Home";
import notFoundPictures from "../../pictures/no-results.png";

export default function NotFound() {
  return (
    <>
      <Wrapper>
        <img src={notFoundPictures} width={150} />
        <Typography textAlign="center" variant="h3">
          Not Found
        </Typography>
        <StyleLink to={"/"}>
          <StyledButton variant="outlined">
            <HomeIcon fontSize="medium" />
            Home
          </StyledButton>
        </StyleLink>
      </Wrapper>
    </>
  );
}
