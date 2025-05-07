/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import {
  DescriptionWrapper,
  MainWrapper,
  NoImageWrapper,
  TextWrapper,
  TitleWrapper,
} from "./Posts.styled";

import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";

import { NavLink } from "react-router-dom";

import dayjs from "dayjs";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Like from "../Like/Like";
import UniversalReactMarkdown from "../../components/UniversalReactMarkdown/UniversalReactMarkdown";

Posts.propTypes = {
  postsArr: PropTypes.array.isRequired,
  nameCollection: PropTypes.string.isRequired,
  setIsLiking: PropTypes.func,
  isLiking: PropTypes.bool,
};

export default function Posts({
  postsArr,
  nameCollection,
  setIsLiking,
  isLiking,
}) {
  return (
    <>
      {postsArr.map(
        (
          { title, _id, posters, description, likes, likedBy, createdAt },
          index
        ) => (
          <MainWrapper key={_id} id={index === 0 ? "firstPost" : undefined}>
            {posters?.length > 0 ? (
              <ImageCarousel images={posters} variant="post" />
            ) : (
              <NoImageWrapper>
                <ImageNotSupportedIcon fontSize="large" />
              </NoImageWrapper>
            )}
            <TextWrapper>
              <TitleWrapper>
                <NavLink
                  to={`/post/${nameCollection}/${_id}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    variant="body2"
                    textAlign="center"
                    sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                  >
                    {title}
                  </Typography>
                </NavLink>
              </TitleWrapper>

              <DescriptionWrapper>
                <Typography
                  variant="caption"
                  textOverflow="ellipsis"
                  sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                >
                  <UniversalReactMarkdown>{description}</UniversalReactMarkdown>
                  {description}
                </Typography>
              </DescriptionWrapper>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                {createdAt && (
                  <Typography variant="caption">
                    {dayjs(createdAt).format("DD-MM-YYYY")}
                  </Typography>
                )}

                {_id && likedBy && (
                  <Like
                    isLiking={isLiking}
                    setIsLiking={setIsLiking}
                    _id={_id}
                    likedBy={likedBy}
                    likes={likes}
                    nameCollection={nameCollection}
                  />
                )}
              </Box>
            </TextWrapper>
          </MainWrapper>
        )
      )}
    </>
  );
}
