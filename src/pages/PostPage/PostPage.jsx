/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import {
  Box,
  Avatar,
  Chip,
  Stack,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material"; // Импорт лоадера
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import FilesPreview from "../../components/PostFileUploader/FilesPreview/FilesPreview";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import {
  StyledPaper,
  ImagePlaceholder,
  ContentBox,
  TitleTypography,
  CategoryTypography,
  TagStack,
} from "./PostPage.styled";
import { selectCurrentPost, selectPostLoading } from "../../redux/upLoadSlice"; // Импорт селектора загрузки
import {
  deletePostThunk,
  getPostByIdThunk,
} from "../../redux/upLoadOperetions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Like from "../../components/Like/Like";
import dayjs from "dayjs";
import { notify } from "../../components/AlertComponent/notify";
import { selectAuthPermissions, selectAuthUser } from "../../redux/authSlice";
import UniversalReactMarkdown from "../../components/UniversalReactMarkdown/UniversalReactMarkdown";

const PostPage = () => {
  const language = useSelector(selectLanguage);

  const { id, nameCollection } = useParams();

  const user = useSelector(selectAuthUser);
  const [isLiking, setIsLiking] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentPost = useSelector(selectCurrentPost);
  const isLoading = useSelector(selectPostLoading);
  const permissions = useSelector(selectAuthPermissions);
  const superAdmin = permissions.some((role) => role === "superAdmin");
  const hasAdminOrSuperAdmin = permissions.some(
    (role) =>
      role === "admin" || role === "superAdmin" || role === nameCollection
  );

  const handleDelete = () => {
    dispatch(deletePostThunk({ nameCollection, id }))
      .then(() => {
        notify("success", "Post successfully deleted");
        navigate(-1);
      })
      .catch((error) => {
        notify(
          "error",
          error.response?.data?.error || "Error when deleting a post"
        );
        console.error("Error deleting post:", error);
      });
  };

  useEffect(() => {
    dispatch(getPostByIdThunk(id));
  }, [id, dispatch]);

  if (!isLiking) {
    if (isLoading || !currentPost) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="60vh"
        >
          <CircularProgress size={50} />
        </Box>
      );
    }
  }

  const {
    title,
    description,
    category,
    posters,
    tags = [],
    adder,
    files = [],
    videoLink,
    _id,
    likedBy = [],
    likes,
    createdAt,
  } = currentPost;

  return (
    <>
      <StyledPaper>
        <Box display="flex" justifyContent="flex-start" mb={2}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            variant="outlined"
          >
            {language === "ua" ? "Назад" : "Back"}
          </Button>
        </Box>
        {/* Изображение или заглушка */}
        {posters?.length > 0 ? (
          <ImageCarousel images={posters} variant="fullPost" />
        ) : (
          <ImagePlaceholder>
            <ImageNotSupportedIcon fontSize="large" />
          </ImagePlaceholder>
        )}

        <ContentBox>
          {/* Заголовок */}
          <TitleTypography
            variant="h5"
            sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
          >
            {title}
          </TitleTypography>

          {/* Категория */}
          {category && (
            <CategoryTypography variant="subtitle2">
              {language === "ua" ? "Категорія:" : "Category:"} {category}
            </CategoryTypography>
          )}

          {/* Автор */}
          {adder && (
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar src={adder.photoURL} alt={adder.name} />
              <Typography variant="body2">{adder.name}</Typography>
            </Stack>
          )}

          {/* Описание */}
          {description && (
            <Typography
              variant="body1"
              component="div"
              sx={{ wordBreak: "break-word" }}
            >
              <UniversalReactMarkdown>{description}</UniversalReactMarkdown>
            </Typography>
          )}

          {/* Видео */}
          {videoLink && (
            <Box
              sx={{ width: "100%", position: "relative", overflow: "hidden" }}
            >
              <VideoPlayer url={videoLink} />
            </Box>
          )}

          {/* Теги */}
          {tags.length > 0 && (
            <TagStack direction="row" flexWrap="wrap">
              {tags.map((tag) => (
                <Chip key={tag} label={tag} variant="outlined" />
              ))}
            </TagStack>
          )}

          {/* Файлы */}
          {files.length > 0 && (
            <Box>
              <FilesPreview files={files} variant="fullPost" />
            </Box>
          )}
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
                _id={_id}
                likedBy={likedBy}
                likes={likes}
                setIsLiking={setIsLiking}
                nameCollection={nameCollection}
              />
            )}
          </Box>
        </ContentBox>
        <Box display="flex" justifyContent="center">
          {hasAdminOrSuperAdmin && (
            <Button
              onClick={handleDelete}
              disabled={superAdmin ? !superAdmin : adder.uid !== user.uid}
            >
              Delete
            </Button>
          )}
        </Box>
      </StyledPaper>
    </>
  );
};

export default PostPage;
